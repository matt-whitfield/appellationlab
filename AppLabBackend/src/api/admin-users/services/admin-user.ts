/**
 * admin-users service
 */

interface CertificateData {
  id: string | number;
  certificateId?: string;
  certificateUrl?: string;
  issuedAt?: string;
  courseId?: string | number;
  courseTitle?: string;
}

interface EnrolledCourseData {
  id: string | number;
  courseId?: string | number;
  courseTitle?: string;
  courseStatus: 'active' | 'completed' | 'suspended';
  enrolledAt?: string;
  completedAt?: string;
  progress?: any;
}

interface AdminUserView {
  id: string | number;
  email: string;
  username?: string;
  firstName?: string;
  lastName?: string;
  role: 'user' | 'admin';
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
  enrollmentCount: number;
  completedCourses: number;
  activeCourses: number;
  certificates: CertificateData[];
  finalExamAttempts: number;
  enrolledCourses: EnrolledCourseData[];
}

interface PaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface AdminUsersResponse {
  data: AdminUserView[];
  meta: PaginationMeta;
}

interface QueryFilters {
  page?: number;
  limit?: number;
  search?: string;
  status?: 'confirmed' | 'blocked' | 'all';
  role?: 'user' | 'admin' | 'all';
}

export default {
  async findManyUsers(filters: QueryFilters): Promise<AdminUsersResponse> {
    try {
      const { page = 1, limit = 10, search, status, role } = filters;
      
      // Build dynamic filters for users
      const userFilters: any = {};
      
      // Filter by confirmation status
      if (status === 'confirmed') {
        userFilters.confirmed = true;
        userFilters.blocked = false;
      } else if (status === 'blocked') {
        userFilters.blocked = true;
      }
      
      // Filter by search term (email, username, first/last name)
      if (search) {
        userFilters.$or = [
          { email: { $containsi: search } },
          { username: { $containsi: search } },
          { firstName: { $containsi: search } },
          { lastName: { $containsi: search } }
        ];
      }
      
      // Get total count for pagination
      const totalUsers = await strapi.db.query('plugin::users-permissions.user').count({
        where: userFilters
      });
      
      // Calculate pagination
      const pageSize = Math.min(limit, 100); // Max 100 per page
      const pageCount = Math.ceil(totalUsers / pageSize);
      const start = (page - 1) * pageSize;
      
      // Get users with pagination
      const users = await strapi.db.query('plugin::users-permissions.user').findMany({
        where: userFilters,
        populate: ['role'],
        offset: start,
        limit: pageSize,
        orderBy: { createdAt: 'desc' }
      });
      
      // Filter by role if specified (done after fetch to handle Admin role name)
      let filteredUsers = users;
      if (role === 'admin') {
        filteredUsers = users.filter((user: any) => user.role?.name === 'Admin');
      } else if (role === 'user') {
        filteredUsers = users.filter((user: any) => user.role?.name !== 'Admin');
      }
      
      // Get enrollment data for all users (only published enrollments)
      const userIds = filteredUsers.map((user: any) => user.id);
      const enrollments = await strapi.db.query('api::course-enrollment.course-enrollment').findMany({
        where: {
          user: { id: { $in: userIds } },
          publishedAt: { $notNull: true }
        },
        populate: ['user', 'course', 'certificate']
      });

      // Get certificates for all users (through course enrollment relationship since user field might be null)
      const certificates = await strapi.db.query('api::certificate.certificate').findMany({
        where: {
          publishedAt: { $notNull: true },
          course_enrollment: {
            user: { id: { $in: userIds } }
          }
        },
        populate: ['course', 'course_enrollment', 'course_enrollment.user']
      });

      // Get final exam attempts for all users (only published attempts)
      const finalExamAttempts = await strapi.db.query('api::final-exam-attempt.final-exam-attempt').findMany({
        where: {
          user: { id: { $in: userIds } },
          publishedAt: { $notNull: true }
        },
        populate: ['user']
      });

      // Group enrollments by user
      const enrollmentsByUser = enrollments.reduce((acc: any, enrollment: any) => {
        const userId = enrollment.user?.id;
        if (!userId) return acc;

        if (!acc[userId]) {
          acc[userId] = {
            total: 0,
            active: 0,
            completed: 0,
            enrollments: [],
            enrolledCourses: []
          };
        }

        acc[userId].total++;
        acc[userId].enrollments.push(enrollment);

        // Add course details to enrolledCourses array
        acc[userId].enrolledCourses.push({
          id: enrollment.id,
          courseId: enrollment.course?.id,
          courseTitle: enrollment.course?.title,
          courseStatus: enrollment.courseStatus,
          enrolledAt: enrollment.enrolledAt,
          completedAt: enrollment.completedAt,
          progress: enrollment.progress
        });

        if (enrollment.courseStatus === 'active') {
          acc[userId].active++;
        } else if (enrollment.courseStatus === 'completed') {
          acc[userId].completed++;
        }

        return acc;
      }, {});

      // Group certificates by user (using course enrollment user relationship)
      const certificatesByUser = certificates.reduce((acc: any, certificate: any) => {
        const userId = certificate.course_enrollment?.user?.id;
        if (!userId) return acc;

        if (!acc[userId]) {
          acc[userId] = [];
        }

        acc[userId].push({
          id: certificate.id,
          certificateId: certificate.certificateId,
          certificateUrl: certificate.certificateUrl,
          issuedAt: certificate.issuedAt,
          courseId: certificate.course?.id,
          courseTitle: certificate.course?.title
        });

        return acc;
      }, {});

      // Group final exam attempts by user
      const examAttemptsByUser = finalExamAttempts.reduce((acc: any, attempt: any) => {
        const userId = attempt.user?.id;
        if (!userId) return acc;

        if (!acc[userId]) {
          acc[userId] = 0;
        }

        acc[userId]++;
        return acc;
      }, {});

      // Transform users to AdminUserView format
      const adminUsers: AdminUserView[] = filteredUsers.map((user: any) => {
        const userEnrollments = enrollmentsByUser[user.id] || {
          total: 0,
          active: 0,
          completed: 0,
          enrollments: [],
          enrolledCourses: []
        };

        const userCertificates = certificatesByUser[user.id] || [];
        const userExamAttempts = examAttemptsByUser[user.id] || 0;

        return {
          id: user.id,
          email: user.email,
          username: user.username || undefined,
          firstName: user.firstName || undefined,
          lastName: user.lastName || undefined,
          role: user.role?.name === 'Admin' ? 'admin' : 'user',
          confirmed: user.confirmed,
          blocked: user.blocked,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          lastLoginAt: user.lastLoginAt || undefined,
          enrollmentCount: userEnrollments.total,
          completedCourses: userEnrollments.completed,
          activeCourses: userEnrollments.active,
          certificates: userCertificates,
          finalExamAttempts: userExamAttempts,
          enrolledCourses: userEnrollments.enrolledCourses
        };
      });
      
      return {
        data: adminUsers,
        meta: {
          pagination: {
            page,
            pageSize,
            pageCount,
            total: totalUsers
          }
        }
      };
    } catch (error) {
      strapi.log.error('Error fetching admin users:', error);
      throw error;
    }
  }
};