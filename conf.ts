const DEFAULT_TIMEOUT_INTERVAL = 90000; 

var SpecReporter = require("jasmine-spec-reporter");
var HtmlScreenshotReporter = require("protractor-jasmine2-screenshot-reporter");
var SeleniumServerJar = require("selenium-server-standalone-jar");

var specReporter = new SpecReporter({
    displayStacktrace: "summary",
    displaySpecDuration: true,
    displaySuiteNumber: true
});

var htmlReporter = new HtmlScreenshotReporter({
    showSummary: true,
    showQuickLinks: true,
    dest: "C:\\TestResults\\Uqs",
    docTitle: 'UQS E2E Test Report',
    filename: "Uqs_E2E_Report.html",
    showConfiguration: true,
    ignoreSkippedSpecs: true,
    captureOnlyFailedSpecs: true,
    reportOnlyFailedSpecs: false,
    pathBuilder: function (currentSpec, suites, browserCapabilities) {
        return browserCapabilities.get("browserName") + "/" + currentSpec.id;
    }
});

exports.config = {
    /* Use either of these:
       - directConnect: bypasses Selenium server and connects to Chrome directly
       - seleniumServerJar: specifies the location of the executable jar (automatically starts up Selenium server)
       - seleniumAddress: specifies location of a running Selenium Server (requires manual startup of Selenium server)
   */
    directConnect: true,  // does not support PhantomJs
    //seleniumServerJar: SeleniumServerJar.path,  // doesn't work at home via VPN use directConnect instead
    //seleniumAddress: "http://localhost:4444/wd/hub",
    //seleniumPort: 4444,
    //seleniumArgs: ['-Dwebdriver.ie.driver=.//Drivers//IEDriverServer.exe'],
    allScriptsTimeout: 90000,
    baseUrl: "http://localhost:52545/",
    framework: "jasmine2",
    maxSessions: 1,
    multiCapabilities: [
        { "browserName": "chrome" },
        //{ "browserName": "internet explorer" },
        //{ "browserName": "firefox" },       
        //{
          // "browserName": "chrome",
           // chromeOptions: {
            //   'mobileEmulation': {
              //     'deviceName': 'Apple iPhone 6 Plus'
        //            //'deviceName': 'Apple iPad'
        //            //'deviceName': 'Samsung Galaxy S4'
        //            //'deviceName': 'Google Nexus 5'
        //            //'deviceName': 'Laptop with touch'
            //    }
          //  }
        //},
    ],
    params: {
        env: 'dev',
        complete: {
            as: 'other',
            pages: 4
        }
    },
    rootElement: "[ng-app]",
    specs: [
        "Specs/**/*.js"
    ],
    suites: {
        all: "Specs/**/*.js",
        bug: "Specs/Bugs/*.js",
        dev: "Specs/Validation/UploadValidationSpec.js",
        helper: "Data/EnquiryCompleter.js",
        populate: "Data/EnquiryPopulation.js",
        smoke: "Specs/SmokeTests/*.js",
        validation: "Specs/Validation/*.js",
    },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(specReporter);
        jasmine.getEnv().addReporter(htmlReporter);

        return browser.getProcessedConfig().then(function (config) {
            browser.params.browserName = config.capabilities.browserName;

            switch (config.params.env) {
                case 'test':
                    browser.baseUrl = 'http://*****-test2/uqs-e2e/web';
                    break;
                case 'uat':
                    browser.baseUrl = 'https://*****-test2.*****.ac.uk/uqs/web';
                    break;
                case 'live':
                    browser.baseUrl = 'https://www.*****.ac.uk/reg/forstudents/qualityissues/raiseissue';
                    break;
                default: 'dev'
                    browser.baseUrl = 'http://localhost:52545/';
                    break;
            }
        });
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: DEFAULT_TIMEOUT_INTERVAL,
        showColors: true,
        isVerbose: false,
        includeStackTrace: true,
        print: function () { },
        realtimeFailure: true
    }
};