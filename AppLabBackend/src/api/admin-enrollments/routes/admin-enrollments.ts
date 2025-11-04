/**
 * admin-enrollments router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/admin-enrollments',
      handler: 'admin-enrollments.findMany',
      config: {
        policies: [],
        middlewares: []
      }
    }
  ]
};