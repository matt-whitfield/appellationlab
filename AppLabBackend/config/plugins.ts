export default ({ env }) => ({
  // ...
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
      jwt: {
        expiresIn: '7d', // Token expiration
      },
      register: {
        allowedFields: ['firstName', 'lastName'],
      },
    },
  },
  // ...
});