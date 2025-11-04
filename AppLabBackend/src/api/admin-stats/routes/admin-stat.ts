/**
 * admin-stat router
 */

export default {
  routes: [
    {
      method: 'GET',
      path: '/admin-stats/enrollment',
      handler: 'admin-stat.enrollment',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: '/admin-stats/user',
      handler: 'admin-stat.user',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: '/admin-stats/certificate',
      handler: 'admin-stat.certificate',
      config: {
        policies: [],
        middlewares: []
      }
    },
    {
      method: 'GET',
      path: '/admin-stats/exam',
      handler: 'admin-stat.exam',
      config: {
        policies: [],
        middlewares: []
      }
    }
  ]
};