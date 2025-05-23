const { defineConfig } = require("cypress");

async function setupNodeEvents(on, config) {
    // implement node event listeners here
    return config;
  };


module.exports = defineConfig({
  e2e: {
    setupNodeEvents, 
    specPattern: "Cypress/**/*.js",
   
  },
});


// const { defineConfig } = require("cypress");
// const cucumber = require('cypress-cucumber-preprocessor').default

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       on('file:preprocessor', cucumber())
//     },
//    // specPattern: "cypress/BDD/*.feature",
//     specPattern: "Cypress/**/*.js"
//   },
// }); 