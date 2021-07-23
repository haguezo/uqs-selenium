import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module Bug3349Spec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.yourDetailsPage;
    var testData = workFlowHelper.testData.yourDetails;

    describe("Bug 3349: entering partial URL", function () {

        beforeAll(function () {
            browser.driver.get(browser.baseUrl + "#/form");
        });

        it('should redirect to the "Your Details" page', function () {
            workFlowHelper.waitForUrl(testData.url);
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
        });
    });
}