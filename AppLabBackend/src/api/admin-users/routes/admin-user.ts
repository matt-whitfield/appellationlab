/**
 * admin-users router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/admin-users',
      handler: 'admin-user.findMany',
      config: {
        policies: [],
        middlewares: []
      }
    }
  ]
};