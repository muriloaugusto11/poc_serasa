const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7qzrvv',
  e2e: {
    baseUrl: 'https://fakerestapi.azurewebsites.net',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
