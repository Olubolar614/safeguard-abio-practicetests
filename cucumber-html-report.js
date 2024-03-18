const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/reports/cucumber-json",
  reportPath: "./cypress/reports/html-multi-report",
  metadata: {
    browser: {
      name: "chrome",
      version: "60",
    },
    device: "Local test machine",
    platform: {
      name: "ubuntu",
      version: "16.04",
    },
  },
  customData: {
    title: "Orange Hrm Testcases Run info",
    data: [
      { label: "Project", value: "Orange Hrm" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: "Mar 8th 2024, 02:31 PM EST" },
      { label: "Execution End Time", value: "Mar 8th 2024, 02:56 PM EST" },
    ],
  },
});