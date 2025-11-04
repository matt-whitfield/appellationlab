/**
 * course-enrollment controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::course-enrollment.course-enrollment', ({ strapi }) => ({
  async create(ctx) {
    // Get the authenticated user from the context
    const user = ctx.state.user;
    
    if (!user) {
      return ctx.unauthorized('You must be authenticated to enroll in a course');
    }

    // Add the user ID to the request data
    const { data } = ctx.request.body;
    
    // Create enrollment with user attached
    const result = await strapi.entityService.create('api::course-enrollment.course-enrollment', {
      data: {
        ...data,
        user: user.id,
      },
      populate: ['course', 'user'],
    });

    return { data: result };
  },

  // Get enrollments for the authenticated user
  async me(ctx) {
    const user = ctx.state.user;
    if (!user) {
      return ctx.unauthorized('You must be authenticated to view your enrollments');
    }

    try {
      const enrollments = await strapi.entityService.findMany('api::course-enrollment.course-enrollment', {
        filters: {
          user: { id: user.id }
        },
        populate: {
          course: { populate: ['image'] }
        }
      });

      return { data: enrollments };
    } catch (error) {
      console.error('Error fetching user enrollments:', error);
      return ctx.badRequest('Failed to fetch enrollments');
    }
  },

  // Check if user is enrolled in a specific course
  async checkEnrollment(ctx) {
    const user = ctx.state.user;
    const { courseId } = ctx.params;

    console.log('[DEBUG] checkEnrollment called');
    console.log('[DEBUG] Authenticated user:', user);
    console.log('[DEBUG] courseId param:', courseId);

    if (!user) {
      return ctx.unauthorized('You must be authenticated to check enrollment');
    }
    if (!courseId) {
      return ctx.badRequest('Course ID is required');
    }

    // Build course filter
    let courseFilter;
    if (courseId.match(/^[a-z0-9]+$/)) {
      courseFilter = { documentId: courseId };
    } else {
      courseFilter = { id: parseInt(courseId) };
    }
    console.log('[DEBUG] courseFilter:', courseFilter);

    // Find the course
    const course = await strapi.entityService.findMany('api::course.course', {
      filters: courseFilter,
      limit: 1
    });
    console.log('[DEBUG] course found:', course);

    if (!course || course.length === 0) {
      return ctx.notFound('Course not found');
    }

    // Find enrollments for this user and course
    const enrollments = await strapi.entityService.findMany('api::course-enrollment.course-enrollment', {
      filters: {
        user: { id: user.id },
        course: { id: course[0].id }
      },
      limit: 1
    });
    console.log('[DEBUG] enrollments found:', enrollments);

    return {
      data: {
        isEnrolled: enrollments.length > 0,
        enrollment: enrollments[0] || null
      }
    };
  }
}));
