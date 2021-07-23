import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module ThankYouSmokeSpec {

    if (browser.params.env !== 'live') {

        var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
        var page = workFlowHelper.thankYouPage;
        var testData = workFlowHelper.testData.thankYou;
        var enquirerTypes = workFlowHelper.testData.enquirerTypes;

        workFlowHelper.using([false, true], function (doUpload) {

            var uploadMessage = (doUpload === true) ? " containing uploaded documents" : " with no documents";

            workFlowHelper.using(enquirerTypes, function (type) {

                describe('The "Thank you" page for a enquirer type of ' + type + uploadMessage, function () {

                    beforeAll(function () {

                        workFlowHelper.goToApplication();

                        if (type == "staff") {
                            workFlowHelper.completeYourDetails_Staff();
                            workFlowHelper.completeEmployeeDetails();
                        }
                        if (type == "student") {
                            workFlowHelper.completeYourDetails_Student();
                            workFlowHelper.completeStudentDetails();
                        }
                        if (type == "other") {
                            workFlowHelper.completeYourDetails_Other();
                            workFlowHelper.completeOtherDetails();
                        }

                        workFlowHelper.completeConcern();
                        if (doUpload) { workFlowHelper.chooseFileToUpload(); }
                        workFlowHelper.completeUpload();
                        workFlowHelper.submitConcern();
                    });

                    it('should display the "Thank you" page', function () {
                        workFlowHelper.waitForUrlToContain(testData.url);
                        expect(browser.getCurrentUrl()).toContain(browser.baseUrl + testData.url);
                    });

                    describe('Page controls', function () {

                        it('should contain the acknowledgement reference number', function () {
                            expect(page.acknowledgementRef.isDisplayed()).toBeTruthy();
                        });

                        it('should contain text for the acknowledgement reference number', function () {
                            expect(page.acknowledgementRef.getText()).toBeTruthy();
                        });

                        it('should display the same acknowledgement reference number in the page url', function () {
                            expect(browser.getCurrentUrl()).toContain(page.acknowledgementRef.getText());
                        });
                    });
                });
            });
        });
    }
}