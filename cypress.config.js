const { defineConfig } = require("cypress");
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {

    "reporter": "mochawesome",
   "reporterOptions": {
      "reportDir": "cypress/reports",
      "overwrite": false,
      "html": false,
      "json": true
   },

   "projectId": "d5o7bs",
    "baseUrl":"https://opensource-demo.orangehrmlive.com",
    "experimentalSessionAndOrigin": true,
    "video" : true,
    "videoCompression" : 0,
    //"videosFolder": "cypress/Raju",
    // "viewportHeight": 844,
    // "viewportWidth": 390,
   // retries: { "runMode": 1, "openMode": 4 },
   "defaultCommandTimeout" :20000,
   "pageLoadTimeout" : 120000,
   "chromeWebSecurity": false,
   "specPattern": "**/*.feature",

    setupNodeEvents(on, config) {
      on('task', {downloadFile})
      return require('./cypress/plugins/index.js')(on, config)
      // implement node event listeners here
    },
  },


});
