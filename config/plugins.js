module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'kabreu2812@gmail.com',
        defaultReplyTo: 'kabreu2812@gmail.com',
      },
    },
  },
});
