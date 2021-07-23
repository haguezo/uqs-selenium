import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module MoreToggleSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.checkYourAnswersPage;
    var testData = workFlowHelper.testData.checkYourAnswers;
    var enquirerTypes = workFlowHelper.testData.enquirerTypes;
    var shortText = 'Short piece of text (less than 200 chars) should not show "More.." link.';
    var longText = 'Long piece of text (more than 200 chars) should show "More.." link. At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice. Instantly cordially far intention recommend estimable yet her his. Ladies stairs enough esteem add fat all enable.';
    var equalText = 'Equal piece of text (exactly 200 chars) should not show "More.." link. Increasing impression interested expression he my. Respect invited request charmed me warrant to. Expect no pretty as do thought.';
    var charsToShow = 200;

    workFlowHelper.using([false, true], function (doUpload) {

        workFlowHelper.using(enquirerTypes, function (type) {

            describe('The "Check your details before submitting" page for a enquirer type of ' + type, function () {

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

                    workFlowHelper.completeConcern(shortText, shortText, shortText, shortText);
                    workFlowHelper.completeUpload(true, true);
                    workFlowHelper.waitForUrl(testData.url);
                });

                it('should not display any "more" text for "Description of issue" when short length text (less than 200 characters) is entered', function () {
                    expect(page.enquiryDetailMoreText.isDisplayed()).toEqual(false);
                });

                it('should not display any "more" text for "Desired resolution" when short length text (less than 200 characters) is entered', function () {
                    expect(page.desiredResolutionMoreText.isDisplayed()).toEqual(false);
                });

                it('should not display any "more" text for "Internal complaint details" when short length text (less than 200 characters) is entered', function () {
                    expect(page.internalComplaintOutcomeMoreText.isDisplayed()).toEqual(false);
                });

                it('should not display any "more" text for "OIA or external body information" when short length text (less than 200 characters) is entered', function () {
                    expect(page.oiaInformationMoreText.isDisplayed()).toEqual(false);
                });

                it('should display all entered characters for the "Description of issue"', function () {
                    page.enquiryDetailText.getText().then(function (text) {
                        expect(text.length).toEqual(shortText.length);
                    });
                });

                it('should display all entered characters for the "Desired resolution"', function () {
                    page.desiredResolutionText.getText().then(function (text) {
                        expect(text.length).toEqual(shortText.length);
                    });
                });

                it('should display all entered characters for the "Internal complaint details"', function () {
                    page.internalComplaintOutcomeText.getText().then(function (text) {
                        expect(text.length).toEqual(shortText.length);
                    });
                });

                it('should display all entered characters for the "OIA or external body information"', function () {
                    page.oiaInformationText.getText().then(function (text) {
                        expect(text.length).toEqual(shortText.length);
                    });
                });

                describe("For equal length text", function () {

                    beforeAll(function () {
                        page.changeYourConcern();
                        workFlowHelper.yourConcernPage.enquiryDetailInput.clear();
                        workFlowHelper.yourConcernPage.desiredResolutionInput.clear();
                        workFlowHelper.yourConcernPage.internalComplaintOutcomeInput.clear();
                        workFlowHelper.yourConcernPage.oiaInformationNotesInput.clear();
                        workFlowHelper.completeConcern(equalText, equalText, equalText, equalText);
                    });

                    it('should not display any "more" text for "Description of issue"', function () {
                        expect(page.enquiryDetailMoreText.isDisplayed()).toEqual(false);
                    });

                    it('should not display any "more" text for "Desired resolution"', function () {
                        expect(page.desiredResolutionMoreText.isDisplayed()).toEqual(false);
                    });

                    it('should not display any "more" text for "Internal complaint details"', function () {
                        expect(page.internalComplaintOutcomeMoreText.isDisplayed()).toEqual(false);
                    });

                    it('should not display any "more" text for "OIA or external body information"', function () {
                        expect(page.oiaInformationMoreText.isDisplayed()).toEqual(false);
                    });

                    it('should display all entered characters for the "Description of issue"', function () {
                        page.enquiryDetailText.getText().then(function (text) {
                            expect(text.length).toEqual(equalText.length);
                        });
                    });

                    it('should display all entered characters for the "Desired resolution"', function () {
                        page.desiredResolutionText.getText().then(function (text) {
                            expect(text.length).toEqual(equalText.length);
                        });
                    });

                    it('should display all entered characters for the "Internal complaint details"', function () {
                        page.internalComplaintOutcomeText.getText().then(function (text) {
                            expect(text.length).toEqual(equalText.length);
                        });
                    });

                    it('should display all entered characters for the "OIA or external body information"', function () {
                        page.oiaInformationText.getText().then(function (text) {
                            expect(text.length).toEqual(equalText.length);
                        });
                    });
                });

                describe("For long length text (more than 200 characters)", function () {

                    beforeAll(function () {
                        page.changeYourConcern();
                        workFlowHelper.yourConcernPage.enquiryDetailInput.clear();
                        workFlowHelper.yourConcernPage.desiredResolutionInput.clear();
                        workFlowHelper.yourConcernPage.internalComplaintOutcomeInput.clear();
                        workFlowHelper.yourConcernPage.oiaInformationNotesInput.clear();
                        workFlowHelper.completeConcern(longText, longText, longText, longText);
                    });

                    it('should not display any "more" text for "Description of issue" on first load', function () {
                        expect(page.enquiryDetailMoreText.isDisplayed()).toEqual(false);
                    });

                    it('should not display any "more" text for "Desired resolution" on first load', function () {
                        expect(page.desiredResolutionMoreText.isDisplayed()).toEqual(false);
                    });

                    it('should not display any "more" text for "Internal complaint details" on first load', function () {
                        expect(page.internalComplaintOutcomeMoreText.isDisplayed()).toEqual(false);
                    });

                    it('should not display any "more" text for "OIA or external body information" on first load', function () {
                        expect(page.oiaInformationMoreText.isDisplayed()).toEqual(false);
                    });

                    it('should only display ' + charsToShow + ' characters for the "Description of issue"', function () {
                        page.enquiryDetailText.getText().then(function (text) {
                            expect(text.length).toEqual(charsToShow);
                        });
                    });

                    it('should only display ' + charsToShow + ' characters for the "Desired resolution"', function () {
                        page.desiredResolutionText.getText().then(function (text) {
                            expect(text.length).toEqual(charsToShow);
                        });
                    });

                    it('should only display ' + charsToShow + ' characters for the "Internal complaint details"', function () {
                        page.internalComplaintOutcomeText.getText().then(function (text) {
                            expect(text.length).toEqual(charsToShow);
                        });
                    });

                    it('should only display ' + charsToShow + ' characters for the "OIA or external body information"', function () {
                        page.oiaInformationText.getText().then(function (text) {
                            expect(text.length).toEqual(charsToShow);
                        });
                    });

                    it('should display "more" text for "Description of issue" on clicking "More..."', function () {
                        page.enquiryDetailToggleButton.click();
                        expect(page.enquiryDetailMoreText.isDisplayed()).toEqual(true);
                    });

                    it('should display "more" text for "Desired resolution" on clicking "More..."', function () {
                        page.desiredResolutionToggleButton.click();
                        expect(page.desiredResolutionMoreText.isDisplayed()).toEqual(true);
                    });

                    it('should display "more" text for "Internal complaint details" on clicking "More..."', function () {
                        page.internalComplaintOutcomeToggleButton.click();
                        expect(page.internalComplaintOutcomeMoreText.isDisplayed()).toEqual(true);
                    });

                    it('should display "more" text for "OIA or external body information" on clicking "More..."', function () {
                        page.oiaInformationToggleButton.click();
                        expect(page.oiaInformationMoreText.isDisplayed()).toEqual(true);
                    });

                    it('should display the complete text for "Description of issue"', function () {
                        page.enquiryDetailText.getText().then(function (text) {
                            expect(text.trim()).toEqual(longText.trim());
                        });
                    });

                    it('should display the complete text for "Desired resolution"', function () {
                        page.desiredResolutionText.getText().then(function (text) {
                            expect(text.trim()).toEqual(longText.trim());
                        });
                    });

                    it('should display the complete text for "Internal complaint details', function () {
                        page.internalComplaintOutcomeText.getText().then(function (text) {
                            expect(text.trim()).toEqual(longText.trim());
                        });
                    });

                    it('should display the complete text for "OIA or external body information"', function () {
                        page.oiaInformationText.getText().then(function (text) {
                            expect(text.trim()).toEqual(longText.trim());
                        });
                    });

                    it('should display all entered characters for the "Description of issue" after "More..." is clicked', function () {
                        page.enquiryDetailText.getText().then(function (text) {
                            expect(text.length).toEqual(longText.length);
                        });
                    });

                    it('should display all entered characters for the "Desired resolution" after "More..." is clicked', function () {
                        page.desiredResolutionText.getText().then(function (text) {
                            expect(text.length).toEqual(longText.length);
                        });
                    });

                    it('should display all entered characters for the "Internal complaint details" after "More..." is clicked', function () {
                        page.internalComplaintOutcomeText.getText().then(function (text) {
                            expect(text.length).toEqual(longText.length);
                        });
                    });

                    it('should display all entered characters for the "OIA or external body information" after "More..." is clicked', function () {
                        page.oiaInformationText.getText().then(function (text) {
                            expect(text.length).toEqual(longText.length);
                        });
                    });

                    it('should hide the "more" text for "Description of issue" on clicking "Less"', function () {
                        page.enquiryDetailToggleButton.click().then(function () {
                            browser.wait(protractor.ExpectedConditions.invisibilityOf(page.enquiryDetailMoreText), 2000);
                            expect(page.enquiryDetailMoreText.isDisplayed()).toEqual(false);
                        });
                    });

                    it('should hide the "more" text for "Desired resolution" on clicking "Less"', function () {
                        page.desiredResolutionToggleButton.click().then(function () {
                            browser.wait(protractor.ExpectedConditions.invisibilityOf(page.desiredResolutionMoreText), 2000);
                            expect(page.desiredResolutionMoreText.isDisplayed()).toEqual(false);
                        });
                    });

                    it('should hide the "more" text for "Internal complaint details" on clicking "Less"', function () {
                        page.internalComplaintOutcomeToggleButton.click().then(function () {
                            browser.wait(protractor.ExpectedConditions.invisibilityOf(page.internalComplaintOutcomeMoreText), 2000);
                            expect(page.internalComplaintOutcomeMoreText.isDisplayed()).toEqual(false);
                        });
                    });

                    it('should hide the "more" text for "OIA or external body information" on clicking "Less"', function () {
                        page.oiaInformationToggleButton.click().then(function () {
                            browser.wait(protractor.ExpectedConditions.invisibilityOf(page.oiaInformationMoreText), 2000);
                            expect(page.oiaInformationMoreText.isDisplayed()).toEqual(false);
                        });
                    });

                    it('should only display ' + charsToShow + ' characters for the "Description of issue" after "Less" is clicked', function () {
                        page.enquiryDetailText.getText().then(function (text) {
                            expect(text.length).toEqual(charsToShow);
                        });
                    });

                    it('should only display ' + charsToShow + ' characters for the "Desired resolution" after "Less" is clicked', function () {
                        page.desiredResolutionText.getText().then(function (text) {
                            expect(text.length).toEqual(charsToShow);
                        });
                    });

                    it('should only display ' + charsToShow + ' characters for the "Internal complaint details" after "Less" is clicked', function () {
                        page.internalComplaintOutcomeText.getText().then(function (text) {
                            expect(text.length).toEqual(charsToShow);
                        });
                    });

                    it('should only display ' + charsToShow + ' characters for the "OIA or external body information" after "Less" is clicked', function () {
                        page.oiaInformationText.getText().then(function (text) {
                            expect(text.length).toEqual(charsToShow);
                        });
                    });
                });
            });
        });
    });
}