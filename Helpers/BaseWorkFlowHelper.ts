export class BaseWorkFlowHelper {

    testData = require('../Data/TestData.js');
    using = require('jasmine-data-provider');
    validation = require('../Data/ValidationData.js');

    goToApplication() {
        browser.driver.get(browser.baseUrl);
    }

    refresh(): void {
        browser.refresh();
    }

    setTimeout(timeout: number) {
        browser.driver.manage().timeouts().implicitlyWait(timeout);
    }

    waitForUrl(expectedUrl: string): void {
        browser.wait(function () {
            return browser.getCurrentUrl().then(function (url) {
                return url.indexOf(browser.baseUrl + expectedUrl) !== -1;
            });
        }, browser.params.timeout, "Timed out while waiting for the expected url '" + expectedUrl + "'");
    }

    waitForUrlToContain(expectedToContain: string): void {
        browser.wait(function () {
            return browser.getCurrentUrl().then(function (url) {
                return url.indexOf(expectedToContain) !== -1;
            });
        }, browser.params.timeout, "Timed out while waiting for the expected url to contain '" + expectedToContain + "'");
    }
}