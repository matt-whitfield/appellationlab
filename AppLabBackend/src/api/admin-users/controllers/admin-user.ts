/**
 * admin-users controller
 */

interface QueryFilters {
  page?: number;
  limit?: number;
  search?: string;
  status?: 'confirmed' | 'blocked' | 'all';
  role?: 'user' | 'admin' | 'all';
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
        limit = '10', 
        search, 
        status = 'all', 
        role = 'all' 
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

      // Validate status parameter
      if (status && !['confirmed', 'blocked', 'all'].includes(status as string)) {
        return ctx.badRequest('Invalid status parameter. Must be one of: confirmed, blocked, all');
      }

      // Validate role parameter
      if (role && !['user', 'admin', 'all'].includes(role as string)) {
        return ctx.badRequest('Invalid role parameter. Must be one of: user, admin, all');
      }

      // Build filters object
      const filters: QueryFilters = {
        page: parsedPage,
        limit: parsedLimit,
        search: search as string || undefined,
        status: status === 'all' ? undefined : status as 'confirmed' | 'blocked',
        role: role === 'all' ? undefined : role as 'user' | 'admin'
      };

      // Get users data from service
      const result = await strapi.service('api::admin-users.admin-user').findManyUsers(filters);
      
      ctx.body = result;
    } catch (error) {
      strapi.log.error('Error fetching admin users:', error);
      
      // Return appropriate error response
      if ((error as Error).message?.includes('validation')) {
        return ctx.badRequest('Invalid request parameters');
      }
      
      return ctx.internalServerError('Failed to fetch user data');
    }
  }
};