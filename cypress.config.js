const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-multi-reporters',
  reporterOptions:{
    reporterEnabled: 'spec, cypress-mochawesome-reporter, mocha-junit-reporter',
    mochaJunitReporterReporterOptions: {
      mochaFile: 'cypress/reports/junit/results-[hash].xml'
    },
    cypressMochawesomeReporterReporterOptions: {
      charts: true,
      reportPageTitle: 'Relatório Execução de Testes + {Timestamp}',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false
    }
  },
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },

    // defaultCommandTimeout: 1000,
    // execTimeout:60000,
    // taskTimeout: 60000,
    // pageLoadTimeout: 60000,
    // requestTimeout: 5000,
    // responseTimeout: 30000
  },
});
