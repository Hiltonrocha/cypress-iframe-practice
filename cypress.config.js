const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://notes-serverless-app.com',
    env: {
      hideCredentials: true, 
      requestMode: true,
    },
    experimentalRunAllSpecs: true
  },
    fixturesFolder: false,
    video: false,
    chromeWebSecurity: false
})
