import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module Bug4231Spec {

    if (browser.params.env !== 'live') {

        var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
        var page = workFlowHelper.thankYouPage;
        var testData = workFlowHelper.testData.thankYou;
        var enquirerTypes = workFlowHelper.testData.enquirerTypes;
        var acknowledgementRefs = [];
        var currentReference = '';

        describe("Bug 4231: Duplicate UQS references", function () {

            for (var i = 0; i < 5; i++) {
                workFlowHelper.using(enquirerTypes, function (type) {

                    describe('The "Thank you" page for a enquirer type of ' + type, function () {

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
                            workFlowHelper.completeUpload();
                            workFlowHelper.submitConcern();
                        });

                        it('should display the "Thank you" page', function () {
                            workFlowHelper.waitForUrlToContain(testData.url);
                            expect(browser.getCurrentUrl()).toContain(browser.baseUrl + testData.url);
                        });

                        it('should create a unique acknowledgement reference', function () {
                            console.log(acknowledgementRefs.length);
                            page.acknowledgementRef.getText().then(function (reference) {
                                expect(acknowledgementRefs).not.toContain(reference);
                                currentReference = reference;
                            });
                        });

                        it('should add the newly created unique acknowledgement reference to the acknowledgementRefs array (used for testing this bug)', function () {
                            acknowledgementRefs.push(currentReference);
                            expect(acknowledgementRefs).toContain(currentReference);
                        });
                    });
                });
            }
        });
    }
}