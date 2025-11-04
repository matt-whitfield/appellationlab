/**
 * admin-stat controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::admin-stats.admin-stat', ({ strapi }) => ({
  async enrollment(ctx) {
    try {
      // Verify user is admin
      const user = ctx.state.user;
      if (!user || user.role?.name !== 'Admin') {
        return ctx.forbidden('Access denied. Admin role required.');
      }

      // Get enrollment statistics
      const enrollmentStats = await strapi.service('api::admin-stats.admin-stat').getEnrollmentStats();
      
      ctx.body = {
        data: enrollmentStats
      };
    } catch (error) {
      strapi.log.error('Error fetching enrollment statistics:', error);
      ctx.badRequest('Failed to fetch enrollment statistics');
    }
  },

  async user(ctx) {
    try {
      // Verify user is admin
      const user = ctx.state.user;
      if (!user || user.role?.name !== 'Admin') {
        return ctx.forbidden('Access denied. Admin role required.');
      }

      // Get user statistics
      const userStats = await strapi.service('api::admin-stats.admin-stat').getUserStats();
      
      ctx.body = {
        data: userStats
      };
    } catch (error) {
      strapi.log.error('Error fetching user statistics:', error);
      ctx.badRequest('Failed to fetch user statistics');
    }
  },

  async certificate(ctx) {
    try {
      // Verify user is admin
      const user = ctx.state.user;
      if (!user || user.role?.name !== 'Admin') {
        return ctx.forbidden('Access denied. Admin role required.');
      }

      // Get certificate statistics
      const certificateStats = await strapi.service('api::admin-stats.admin-stat').getCertificateStats();
      
      ctx.body = {
        data: certificateStats
      };
    } catch (error) {
      strapi.log.error('Error fetching certificate statistics:', error);
      ctx.badRequest('Failed to fetch certificate statistics');
    }
  },

  async exam(ctx) {
    try {
      // Verify user is admin
      const user = ctx.state.user;
      if (!user || user.role?.name !== 'Admin') {
        return ctx.forbidden('Access denied. Admin role required.');
      }

      // Get exam statistics
      const examStats = await strapi.service('api::admin-stats.admin-stat').getExamStats();
      
      ctx.body = {
        data: examStats
      };
    } catch (error) {
      strapi.log.error('Error fetching exam statistics:', error);
      ctx.badRequest('Failed to fetch exam statistics');
    }
  }
}));