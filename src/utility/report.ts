const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: "test-result",
    reportPath: "test-result/reports/multiple-cucumber-html-report",
    reportname: "Playwright automation report",
    pageTitle: "Nopcommerce app",
    displayDuration: true,
    metadata:{
        browser: {
            name: "chrome",
            version: "121",
        },
        device: "Local test machine",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "nopCommerce app" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "B11221.34321" }
         ],
  },
});
    