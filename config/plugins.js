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
