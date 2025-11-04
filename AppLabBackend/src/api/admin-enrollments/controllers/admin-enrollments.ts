/**
 * admin-enrollments controller
 */

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
  async findMany(ctx) {
    try {
      // Verify user is admin
      const user = ctx.state.user;
      if (!user || user.role?.name !== 'Admin') {
        return ctx.forbidden('Access denied. Admin role required.');
      }

      // Parse and validate query parameters
      const {
        page = '1',
        limit = '50',
        search,
        courseStatus,
        courseName,
        enrollmentDateFrom,
        enrollmentDateTo
      } = ctx.query;

      // Validate pagination parameters
      const parsedPage = parseInt(page as string, 10);
      const parsedLimit = parseInt(limit as string, 10);

      if (isNaN(parsedPage) || parsedPage < 1) {
        return ctx.badRequest('Invalid page parameter. Must be a positive integer.');
      }

      if (isNaN(parsedLimit) || parsedLimit < 1 || parsedLimit > 100) {
        return ctx.badRequest('Invalid limit parameter. Must be between 1 and 100.');
      }

      // Validate courseStatus parameter
      if (courseStatus && !['active', 'completed', 'suspended'].includes(courseStatus as string)) {
        return ctx.badRequest('Invalid courseStatus parameter. Must be one of: active, completed, suspended');
      }

      // Validate date parameters
      if (enrollmentDateFrom && isNaN(Date.parse(enrollmentDateFrom as string))) {
        return ctx.badRequest('Invalid enrollmentDateFrom parameter. Must be a valid date.');
      }

      if (enrollmentDateTo && isNaN(Date.parse(enrollmentDateTo as string))) {
        return ctx.badRequest('Invalid enrollmentDateTo parameter. Must be a valid date.');
      }

      // Build filters object
      const filters: QueryFilters = {
        page: parsedPage,
        limit: parsedLimit,
        search: search as string || undefined,
        courseStatus: courseStatus as 'active' | 'completed' | 'suspended' || undefined,
        courseName: courseName as string || undefined,
        enrollmentDateFrom: enrollmentDateFrom as string || undefined,
        enrollmentDateTo: enrollmentDateTo as string || undefined
      };

      // Get enrollment data from service
      const result = await strapi.service('api::admin-enrollments.admin-enrollments').findManyEnrollments(filters);

      ctx.body = result;
    } catch (error) {
      strapi.log.error('Error fetching admin enrollments:', error);

      // Return appropriate error response
      if ((error as Error).message?.includes('validation')) {
        return ctx.badRequest('Invalid request parameters');
      }

      return ctx.internalServerError('Failed to fetch enrollment data');
    }
  }
};