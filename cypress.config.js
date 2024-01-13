const { defineConfig } = require("cypress");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 8000,
  env:{
    url:'https://rahulshettyacademy.com',
  },
  retries: {
    runMode: 1,
    },
  projectId:"cviqky",
  e2e: {
    baseUrl:'https://rahulshettyacademy.com',  
    //'cypress/integration/examples/*.js', 'cypress/integration/Tests/*.js','cypress/integration/examples/bdd/features/*.feature'
    specPattern: ['cypress/Integration/Examples/Framework/*.js', 'cypress/Integration/Examples/Test/*.js','cypress/Integration/Examples/BDD/Features/*.feature'],
    setupNodeEvents,
  },
});