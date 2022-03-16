module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '908a4b24a8351e8c07621807a83eed7d'),
  },
});
