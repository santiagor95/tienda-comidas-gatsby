module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'srodriguezm95@gmail.com',
      defaultReplyTo: 'srodriguezm95@gmail.com',
    },
  },
  // ...
});