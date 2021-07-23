import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module Bug3358Spec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.yourDetailsPage;
    var testData = workFlowHelper.testData.yourDetails;

    var emailLimit = 50;
    var email50 = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwx';
    var email51 = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxy';

    describe("The 'Your details' page", function () {

        beforeAll(function () {
            workFlowHelper.goToApplication();
        });

        it('should display the "Your Details" page', function () {
            workFlowHelper.waitForUrl(testData.url);
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
        });

        describe("The 'E-mail address' field", function () {

            it('should limit to 50 chars', function () {

                page.enterEmail(email51);
                page.emailInput.getAttribute('value').then(function (email) {
                    expect(email.length).toEqual(emailLimit);
                });

                expect(page.emailInput.getAttribute('value')).toEqual(email50);
            });
        });

        describe("Bug 3358: the 'Confirm your e-mail address' field", function () {

            it('should also limit to 50 chars', function () {

                page.enterConfirmEmail(email51);
                page.confirmEmailInput.getAttribute('value').then(function (email) {
                    expect(email.length).toEqual(emailLimit);
                });

                expect(page.confirmEmailInput.getAttribute('value')).toEqual(email50);
            });
        });
    });
}