/* eslint-disable no-unused-vars */
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "mu29g6",
  reporter: "mocha-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/test-results-[hash].xml",
      toConsole: true,
      testsuitesTitle: "Cypress Tests",
      suiteTitleSeparatedBy: " - ",
      includePending: true,
    },
  },
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      // eslint-disable-next-line no-undef
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
  },
});
