module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: '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',
      },
      settings: {
        defaultFrom: 'kjaakevin@gmail.com',
        defaultReplyTo: 'kjaakevin@gmail.com',
      },
    },
  },
});
