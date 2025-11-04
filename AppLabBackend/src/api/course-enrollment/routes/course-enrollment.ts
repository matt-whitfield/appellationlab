/**
 * course-enrollment router
 */

export default {
  routes: [
    // Custom routes for user-specific enrollments
    {
      method: 'GET',
      path: '/course-enrollments/me',
      handler: 'api::course-enrollment.course-enrollment.me',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/course-enrollments/check/:courseId',
      handler: 'api::course-enrollment.course-enrollment.checkEnrollment',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    // Default CRUD routes
    {
      method: 'GET',
      path: '/course-enrollments',
      handler: 'api::course-enrollment.course-enrollment.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/course-enrollments/:id',
      handler: 'api::course-enrollment.course-enrollment.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'POST',
      path: '/course-enrollments',
      handler: 'api::course-enrollment.course-enrollment.create',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'PUT',
      path: '/course-enrollments/:id',
      handler: 'api::course-enrollment.course-enrollment.update',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'DELETE',
      path: '/course-enrollments/:id',
      handler: 'api::course-enrollment.course-enrollment.delete',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
