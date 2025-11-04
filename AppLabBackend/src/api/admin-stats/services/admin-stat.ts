/**
 * admin-stat service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::admin-stats.admin-stat', ({ strapi }) => ({
  async getEnrollmentStats() {
    try {
      // Get all course enrollments
      const allEnrollments = await strapi.entityService.findMany('api::course-enrollment.course-enrollment', {
        populate: ['course', 'user'],
      });

      // Calculate total enrollments
      const totalEnrollments = allEnrollments.length;

      // Calculate active enrollments (status = 'active')
      const activeEnrollments = allEnrollments.filter(
        enrollment => enrollment.courseStatus === 'active'
      ).length;

      // Calculate completed enrollments (status = 'completed')
      const completedEnrollments = allEnrollments.filter(
        enrollment => enrollment.courseStatus === 'completed'
      ).length;

      // Calculate suspended enrollments (status = 'suspended')
      const suspendedEnrollments = allEnrollments.filter(
        enrollment => enrollment.courseStatus === 'suspended'
      ).length;

      // Calculate enrollments this month
      const currentDate = new Date();
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      
      const enrollmentsThisMonth = allEnrollments.filter(enrollment => {
        if (!enrollment.enrolledAt) return false;
        const enrolledDate = new Date(enrollment.enrolledAt);
        return enrolledDate >= firstDayOfMonth && enrolledDate <= currentDate;
      }).length;

      // Calculate last month enrollments for trend comparison
      const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      
      const enrollmentsLastMonth = allEnrollments.filter(enrollment => {
        if (!enrollment.enrolledAt) return false;
        const enrolledDate = new Date(enrollment.enrolledAt);
        return enrolledDate >= firstDayOfLastMonth && enrolledDate <= lastDayOfLastMonth;
      }).length;

      // Determine trend
      let enrollmentsTrend = 'stable';
      if (enrollmentsThisMonth > enrollmentsLastMonth) {
        enrollmentsTrend = 'up';
      } else if (enrollmentsThisMonth < enrollmentsLastMonth) {
        enrollmentsTrend = 'down';
      }

      return {
        totalEnrollments,
        activeEnrollments,
        completedEnrollments,
        suspendedEnrollments,
        enrollmentsThisMonth,
        enrollmentsTrend
      };
    } catch (error) {
      strapi.log.error('Error calculating enrollment statistics:', error);
      throw error;
    }
  },

  async getUserStats() {
    try {
      // Get all users
      const allUsers = await strapi.entityService.findMany('plugin::users-permissions.user', {
        populate: ['role']
      });

      // Calculate total users
      const totalUsers = allUsers.length;

      // Calculate users by role
      const adminUsers = allUsers.filter((user: any) => user.role?.name === 'Admin').length;
      const regularUsers = allUsers.filter((user: any) => user.role?.name !== 'Admin').length;

      // Calculate new users this month
      const currentDate = new Date();
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      
      const newUsersThisMonth = allUsers.filter(user => {
        if (!user.createdAt) return false;
        const createdDate = new Date(user.createdAt);
        return createdDate >= firstDayOfMonth && createdDate <= currentDate;
      }).length;

      // Calculate last month users for trend
      const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      
      const newUsersLastMonth = allUsers.filter(user => {
        if (!user.createdAt) return false;
        const createdDate = new Date(user.createdAt);
        return createdDate >= firstDayOfLastMonth && createdDate <= lastDayOfLastMonth;
      }).length;

      // Calculate active users (users with recent login)
      const thirtyDaysAgo = new Date(currentDate.getTime() - (30 * 24 * 60 * 60 * 1000));
      const activeUsers = allUsers.filter(user => {
        if (!user.lastLoginAt) return false;
        const lastLogin = new Date(user.lastLoginAt);
        return lastLogin >= thirtyDaysAgo;
      }).length;

      // Determine trend
      let usersTrend = 'stable';
      if (newUsersThisMonth > newUsersLastMonth) {
        usersTrend = 'up';
      } else if (newUsersThisMonth < newUsersLastMonth) {
        usersTrend = 'down';
      }

      return {
        totalUsers,
        activeUsers,
        adminUsers,
        regularUsers,
        newUsersThisMonth,
        usersTrend
      };
    } catch (error) {
      strapi.log.error('Error calculating user statistics:', error);
      throw error;
    }
  },

  async getCertificateStats() {
    try {
      // Get all certificates
      const allCertificates = await strapi.entityService.findMany('api::certificate.certificate', {
        populate: ['user', 'course']
      });

      // Calculate total certificates
      const totalCertificates = allCertificates.length;

      // Calculate certificates this month
      const currentDate = new Date();
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      
      const certificatesThisMonth = allCertificates.filter(certificate => {
        if (!certificate.issuedAt) return false;
        const issuedDate = new Date(certificate.issuedAt);
        return issuedDate >= firstDayOfMonth && issuedDate <= currentDate;
      }).length;

      // Calculate last month certificates for trend
      const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      
      const certificatesLastMonth = allCertificates.filter(certificate => {
        if (!certificate.issuedAt) return false;
        const issuedDate = new Date(certificate.issuedAt);
        return issuedDate >= firstDayOfLastMonth && issuedDate <= lastDayOfLastMonth;
      }).length;

      // Calculate pending certificates (completed enrollments without certificates)
      const completedEnrollments = await strapi.entityService.findMany('api::course-enrollment.course-enrollment', {
        filters: {
          courseStatus: 'completed'
        },
        populate: ['certificate']
      });

      const pendingCertificates = completedEnrollments.filter((enrollment: any) => !enrollment.certificate).length;

      // Determine trend
      let certificatesTrend = 'stable';
      if (certificatesThisMonth > certificatesLastMonth) {
        certificatesTrend = 'up';
      } else if (certificatesThisMonth < certificatesLastMonth) {
        certificatesTrend = 'down';
      }

      return {
        totalCertificates,
        certificatesThisMonth,
        pendingCertificates,
        certificatesTrend
      };
    } catch (error) {
      strapi.log.error('Error calculating certificate statistics:', error);
      throw error;
    }
  },

  async getExamStats() {
    try {
      // Get all final exam attempts
      const allExamAttempts = await strapi.entityService.findMany('api::final-exam-attempt.final-exam-attempt', {
        populate: ['user', 'final_exam', 'course']
      });

      // Calculate total exam attempts
      const totalExamAttempts = allExamAttempts.length;

      // Calculate passed vs failed attempts
      const passedAttempts = allExamAttempts.filter(attempt => attempt.passed === true).length;
      const failedAttempts = allExamAttempts.filter(attempt => attempt.passed === false).length;

      // Calculate average score
      const scoresSum = allExamAttempts.reduce((sum, attempt) => {
        return sum + (attempt.scorePercentage || 0);
      }, 0);
      const averageScore = totalExamAttempts > 0 ? Math.round(scoresSum / totalExamAttempts) : 0;

      // Calculate attempts this month
      const currentDate = new Date();
      const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
      
      const attemptsThisMonth = allExamAttempts.filter(attempt => {
        if (!attempt.completedAt) return false;
        const completedDate = new Date(attempt.completedAt);
        return completedDate >= firstDayOfMonth && completedDate <= currentDate;
      }).length;

      // Calculate last month attempts for trend
      const firstDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      const lastDayOfLastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
      
      const attemptsLastMonth = allExamAttempts.filter(attempt => {
        if (!attempt.completedAt) return false;
        const completedDate = new Date(attempt.completedAt);
        return completedDate >= firstDayOfLastMonth && completedDate <= lastDayOfLastMonth;
      }).length;

      // Determine trend
      let examsTrend = 'stable';
      if (attemptsThisMonth > attemptsLastMonth) {
        examsTrend = 'up';
      } else if (attemptsThisMonth < attemptsLastMonth) {
        examsTrend = 'down';
      }

      return {
        totalExamAttempts,
        passedAttempts,
        failedAttempts,
        averageScore,
        attemptsThisMonth,
        examsTrend
      };
    } catch (error) {
      strapi.log.error('Error calculating exam statistics:', error);
      throw error;
    }
  }
}));