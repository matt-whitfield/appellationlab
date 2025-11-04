/**
 * admin-enrollments service
 */

interface AdminEnrollmentView {
  id: string | number;
  documentId: string;
  courseId: string;
  courseTitle: string;
  courseSlug?: string;
  courseStatus: 'active' | 'completed' | 'suspended';
  enrolledAt: string;
  completedAt?: string;
  user: {
    id: string | number;
    email: string;
    firstName?: string;
    lastName?: string;
  };
  progress: {
    progressPercentage: number;
  };
  certificate?: {
    id: string | number;
    certificateId?: string;
    certificateUrl?: string;
    issuedAt?: string;
  };
}

interface PaginationMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

interface AdminEnrollmentsResponse {
  data: AdminEnrollmentView[];
  meta: PaginationMeta;
}

interface QueryFilters {
  page?: number;
  limit?: number;
  search?: string;
  courseStatus?: 'active' | 'completed' | 'suspended';
  courseName?: string;
  enrollmentDateFrom?: string;
  enrollmentDateTo?: string;
}

export default {
  async findManyEnrollments(filters: QueryFilters): Promise<AdminEnrollmentsResponse> {
    try {
      const { page = 1, limit = 50, search, courseStatus, courseName, enrollmentDateFrom, enrollmentDateTo } = filters;

      // Build dynamic filters for enrollments
      const enrollmentFilters: any = {
        publishedAt: { $notNull: true } // Only published enrollments
      };

      // Filter by course status
      if (courseStatus) {
        enrollmentFilters.courseStatus = courseStatus;
      }

      // Filter by date range
      if (enrollmentDateFrom || enrollmentDateTo) {
        enrollmentFilters.enrolledAt = {};
        if (enrollmentDateFrom) {
          enrollmentFilters.enrolledAt.$gte = enrollmentDateFrom;
        }
        if (enrollmentDateTo) {
          enrollmentFilters.enrolledAt.$lte = enrollmentDateTo;
        }
      }

      // Filter by course name if provided
      if (courseName) {
        enrollmentFilters.course = {
          title: { $containsi: courseName }
        };
      }

      // For search functionality, we need to handle it with user and course data
      let searchUserIds: number[] = [];
      if (search) {
        // Search for users by email, firstName, lastName
        const matchingUsers = await strapi.db.query('plugin::users-permissions.user').findMany({
          where: {
            $or: [
              { email: { $containsi: search } },
              { firstName: { $containsi: search } },
              { lastName: { $containsi: search } }
            ]
          },
          select: ['id']
        });
        searchUserIds = matchingUsers.map((user: any) => user.id);

        // Also search courses by title
        const matchingCourses = await strapi.db.query('api::course.course').findMany({
          where: {
            title: { $containsi: search },
            publishedAt: { $notNull: true }
          },
          select: ['id']
        });
        const searchCourseIds = matchingCourses.map((course: any) => course.id);

        // Combine user and course search
        if (searchUserIds.length > 0 || searchCourseIds.length > 0) {
          enrollmentFilters.$or = [];
          if (searchUserIds.length > 0) {
            enrollmentFilters.$or.push({
              user: { id: { $in: searchUserIds } }
            });
          }
          if (searchCourseIds.length > 0) {
            enrollmentFilters.$or.push({
              course: { id: { $in: searchCourseIds } }
            });
          }
        } else {
          // No matching users or courses found, return empty result
          return {
            data: [],
            meta: {
              pagination: {
                page,
                pageSize: limit,
                pageCount: 0,
                total: 0
              }
            }
          };
        }
      }

      // Get total count for pagination
      const totalEnrollments = await strapi.db.query('api::course-enrollment.course-enrollment').count({
        where: enrollmentFilters
      });

      // Calculate pagination
      const pageSize = Math.min(limit, 100); // Max 100 per page
      const pageCount = Math.ceil(totalEnrollments / pageSize);
      const start = (page - 1) * pageSize;

      // Get enrollments with pagination and population
      const enrollments = await strapi.db.query('api::course-enrollment.course-enrollment').findMany({
        where: enrollmentFilters,
        populate: {
          user: {
            select: ['id', 'email', 'firstName', 'lastName']
          },
          course: {
            select: ['id', 'documentId', 'title', 'slug'],
            where: { publishedAt: { $notNull: true } }
          },
          certificate: {
            select: ['id', 'certificateId', 'certificateUrl', 'issuedAt']
          }
        },
        offset: start,
        limit: pageSize,
        orderBy: { enrolledAt: 'desc' }
      });

      // Transform enrollments to AdminEnrollmentView format
      const adminEnrollments: AdminEnrollmentView[] = enrollments.map((enrollment: any) => {
        const enrollmentData: AdminEnrollmentView = {
          id: enrollment.id,
          documentId: enrollment.documentId,
          courseId: enrollment.course?.documentId || enrollment.course?.id || '',
          courseTitle: enrollment.course?.title || 'Unknown Course',
          courseSlug: enrollment.course?.slug,
          courseStatus: enrollment.courseStatus,
          enrolledAt: enrollment.enrolledAt,
          completedAt: enrollment.completedAt || undefined,
          user: {
            id: enrollment.user?.id || 0,
            email: enrollment.user?.email || 'Unknown Email',
            firstName: enrollment.user?.firstName || undefined,
            lastName: enrollment.user?.lastName || undefined
          },
          progress: {
            progressPercentage: enrollment.progressPercentage || 0
          }
        };

        // Add certificate if available
        if (enrollment.certificate) {
          enrollmentData.certificate = {
            id: enrollment.certificate.id,
            certificateId: enrollment.certificate.certificateId,
            certificateUrl: enrollment.certificate.certificateUrl,
            issuedAt: enrollment.certificate.issuedAt
          };
        }

        return enrollmentData;
      });

      return {
        data: adminEnrollments,
        meta: {
          pagination: {
            page,
            pageSize,
            pageCount,
            total: totalEnrollments
          }
        }
      };
    } catch (error) {
      strapi.log.error('Error fetching admin enrollments:', error);
      throw error;
    }
  }
};