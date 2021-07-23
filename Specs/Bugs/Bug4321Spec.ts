import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module Bug4321Spec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.checkYourAnswersPage;
    var testData = workFlowHelper.testData.checkYourAnswers;
    var shortText = 'Short piece of text (less than 200 chars) should not show "More.." link.';
    var longText = 'Long piece of text (more than 200 chars) should show "More.." link.  At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice. Instantly cordially far intention recommend estimable yet her his. Ladies stairs enough esteem add fat all enable.';
    var equalText = 'Equal piece of text (exactly 200 chars) should not show "More.." link. Increasing impression interested expression he my. Respect invited request charmed me warrant to. Expect no pretty as do thought.';

    describe("Bug 4321: 'More...' slider showing when there is nothing to else to see", function () {

        describe('Short length text (less than 200 characters) on the "' + testData.pageTitle + '" page', function () {

            beforeEach(function () {

                workFlowHelper.goToApplication();
                workFlowHelper.completeYourDetails_Staff();
                workFlowHelper.completeEmployeeDetails();
                workFlowHelper.completeConcern(shortText, shortText, shortText, shortText);
                workFlowHelper.completeUpload();
                workFlowHelper.waitForUrlToContain(testData.url);
            });

            it('should not display the "More..." button for "Description of issue"', function () {
                expect(page.enquiryDetailToggleButton.isDisplayed()).toEqual(false);
            });

            it('should not display the "More..." button for "Desired resolution"', function () {
                expect(page.desiredResolutionToggleButton.isDisplayed()).toEqual(false);
            });

            it('should not display the "More..." button for "Internal complaint details"', function () {
                expect(page.internalComplaintOutcomeToggleButton.isDisplayed()).toEqual(false);
            });

            it('should not display the "More..." button for "OIA or external body information"', function () {
                expect(page.oiaInformationToggleButton.isDisplayed()).toEqual(false);
            });
        });

        describe('Equal length text (200 characters) on the "' + testData.pageTitle + '" page', function () {

            beforeEach(function () {

                workFlowHelper.goToApplication();
                workFlowHelper.completeYourDetails_Student();
                workFlowHelper.completeStudentDetails();
                workFlowHelper.completeConcern(equalText, equalText, equalText, equalText);
                workFlowHelper.completeUpload();
                workFlowHelper.waitForUrlToContain(testData.url);
            });

            it('should not display the "More..." button for "Description of issue"', function () {
                expect(page.enquiryDetailToggleButton.isDisplayed()).toEqual(false);
            });

            it('should not display the "More..." button for "Desired resolution"', function () {
                expect(page.desiredResolutionToggleButton.isDisplayed()).toEqual(false);
            });

            it('should not display the "More..." button for "Internal complaint details"', function () {
                expect(page.internalComplaintOutcomeToggleButton.isDisplayed()).toEqual(false);
            });

            it('should not display the "More..." button for "OIA or external body information"', function () {
                expect(page.oiaInformationToggleButton.isDisplayed()).toEqual(false);
            });
        });

        describe('Equal length text (200 characters) on the "' + testData.pageTitle + '" page', function () {

            beforeEach(function () {

                workFlowHelper.goToApplication();
                workFlowHelper.completeYourDetails_Other();
                workFlowHelper.completeOtherDetails();
                workFlowHelper.completeConcern(longText, longText, longText, longText);
                workFlowHelper.completeUpload();
                workFlowHelper.waitForUrlToContain(testData.url);
            });

            it('should display the "More..." button for "Description of issue"', function () {
                expect(page.enquiryDetailToggleButton.isDisplayed()).toEqual(true);
            });

            it('should display the "More..." button for "Desired resolution"', function () {
                expect(page.desiredResolutionToggleButton.isDisplayed()).toEqual(true);
            });

            it('should display the "More..." button for "Internal complaint details"', function () {
                expect(page.internalComplaintOutcomeToggleButton.isDisplayed()).toEqual(true);
            });

            it('should display the "More..." button for "OIA or external body information"', function () {
                expect(page.oiaInformationToggleButton.isDisplayed()).toEqual(true);
            });
        });
    });
}