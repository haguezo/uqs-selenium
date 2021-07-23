import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module Bug3359Spec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.yourDetailsPage;
    var testData = workFlowHelper.testData.yourDetails;

    var limit = 10;
    var postcodeOnLimit = '0123456789';
    var postcodeOverLimit = '012345678910';

    describe("The 'Your details' page", function () {

        beforeAll(function () {
            workFlowHelper.goToApplication();
        });

        it('should display the "Your Details" page', function () {
            workFlowHelper.waitForUrl(testData.url);
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
        });

        describe("Bug 3359: the 'Postcode' field", function () {

            it('should limit to 10 chars', function () {

                page.enterPostcode(postcodeOverLimit);
                page.postcodeInput.getAttribute('value').then(function (postcode) {
                    expect(postcode.length).toEqual(limit);
                });

                expect(page.postcodeInput.getAttribute('value')).toEqual(postcodeOnLimit);
            });
        });
    });
}