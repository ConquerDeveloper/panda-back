module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'kjaakevin@gmail.com',
        defaultReplyTo: 'kjaakevin@gmail.com',
      },
    },
  },
});
