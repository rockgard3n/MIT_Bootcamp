module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c702575e913f7031402bf601b4485199'),
  },
});
