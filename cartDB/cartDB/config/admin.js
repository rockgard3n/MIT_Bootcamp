module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c20ff18537c5e084d475dcc6d7b9d2a'),
  },
});
