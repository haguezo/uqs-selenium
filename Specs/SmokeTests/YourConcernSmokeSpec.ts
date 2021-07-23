import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module YourConcernSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.yourConcernPage;
    var testData = workFlowHelper.testData.yourConcern;
    var enquirerTypes = workFlowHelper.testData.enquirerTypes;
    var asterisk = '*';
    var requiredAsterisk = 'requiredasterisk';

    workFlowHelper.using(enquirerTypes, function (type) {

        describe('The "Your concern" page for a enquirer type of ' + type, function () {

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
            });

            it('should display the "Your concern" page', function () {
                workFlowHelper.waitForUrl(testData.url);
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
            });

            it('should display the title "' + testData.pageTitle + '" on the page', function () {
                expect(page.pageTitle.getText()).toEqual(testData.pageTitle);
            });

            it('should display the "Progress bar"', function () {
                expect(page.progressBar.isDisplayed()).toBeTruthy();
            });

            it('should display "' + testData.progress + '" on the "Progress bar"', function () {
                expect(page.progressBar.getText()).toEqual(testData.progress);
            });

            describe('Labels', function () {

                it('should contain the question "' + testData.descriptionLabel  +'"', function () {
                    expect(page.enquiryDetailLabel.isDisplayed()).toBeTruthy();
                    expect(page.enquiryDetailLabel.getText()).toContain(testData.descriptionLabel);
                });

                it('should display the mandatory asterisk for the question "' + testData.descriptionLabel + '"', function () {
                    expect(page.enquiryDetailLabel.element(by.className(requiredAsterisk)).isPresent()).toBeTruthy();
                    expect(page.enquiryDetailLabel.getText()).toContain(asterisk);
                });

                it('should contain the question "' + testData.desiredResolutionLabel + '"', function () {
                    expect(page.desiredResolutionLabel.isDisplayed()).toBeTruthy();
                    expect(page.desiredResolutionLabel.getText()).toContain(testData.desiredResolutionLabel);
                });

                it('should display the mandatory asterisk for the question "' + testData.desiredResolutionLabel + '"', function () {
                    expect(page.desiredResolutionLabel.element(by.className(requiredAsterisk)).isPresent()).toBeTruthy();
                    expect(page.desiredResolutionLabel.getText()).toContain(asterisk);
                });

                it('should contain the question "' + testData.internalComplaintLabel + '"', function () {
                    expect(page.internalComplaintLabel.isDisplayed()).toBeTruthy();
                    expect(page.internalComplaintLabel.getText()).toContain(testData.internalComplaintLabel);
                });

                it('should display the mandatory asterisk for the question "' + testData.internalComplaintLabel + '"', function () {
                    expect(page.internalComplaintLabel.element(by.className(requiredAsterisk)).isPresent()).toBeTruthy();
                    expect(page.internalComplaintLabel.getText()).toContain(asterisk);
                });

                it('should contain the question "' + testData.internalComplaintOutcomeLabel + '"', function () {
                    expect(page.internalComplaintOutcomeLabel.isDisplayed()).toBeTruthy();
                    expect(page.internalComplaintOutcomeLabel.getText()).toContain(testData.internalComplaintOutcomeLabel);

                });

                it('should display the mandatory asterisk for the question "' + testData.internalComplaintOutcomeLabel + '"', function () {
                    expect(page.internalComplaintOutcomeLabel.element(by.className(requiredAsterisk)).isPresent()).toBeTruthy();
                    expect(page.internalComplaintOutcomeLabel.getText()).toContain(asterisk);
                });

                if (type == "student") {
                    it('should contain the question "' + testData.informationLabel_Student + '"', function () {
                        expect(page.oiaReviewedLabelForStudent.isDisplayed()).toBeTruthy();
                        expect(page.oiaReviewedLabelForStudent.getText()).toContain(testData.informationLabel_Student);
                    });

                    it('should display the mandatory asterisk for the question "' + testData.informationLabel_Student + '"', function () {
                        expect(page.oiaReviewedLabelForStudent.element(by.className(requiredAsterisk)).isPresent()).toBeTruthy();
                        expect(page.oiaReviewedLabelForStudent.getText()).toContain(asterisk);
                    });
                }
                else {
                    it('should contain the question "' + testData.informationLabel_NotStudent + '"', function () {
                        expect(page.oiaReviewedLabelForNotStudent.isDisplayed()).toBeTruthy();
                        expect(page.oiaReviewedLabelForNotStudent.getText()).toContain(testData.informationLabel_NotStudent);
                    });

                    it('should display the mandatory asterisk for the question "' + testData.informationLabel_NotStudent + '"', function () {
                        expect(page.oiaReviewedLabelForNotStudent.element(by.className(requiredAsterisk)).isPresent()).toBeTruthy();
                        expect(page.oiaReviewedLabelForNotStudent.getText()).toContain(asterisk);
                    });
                }
            });

            describe('Input controls', function () {

                it('should contain a text box to enter "' + testData.descriptionLabel +'"', function () {
                    expect(page.enquiryDetailInput.isDisplayed()).toBeTruthy();
                });

                it('should contain a text box to enter "' + testData.desiredResolutionLabel +'"', function () {
                    expect(page.desiredResolutionInput.isDisplayed()).toBeTruthy();
                });

                it('should contain a radio button for "Yes" under "' + testData.internalComplaintLabel + '"', function () {
                    expect(page.internalComplaintTrueRadio.isDisplayed()).toBeTruthy();
                });

                it('should contain a radio button for "No" under "' + testData.internalComplaintLabel + '"', function () {
                    expect(page.internalComplaintFalseRadio.isDisplayed()).toBeTruthy();
                });

                it('should contain a text box to enter "' + testData.internalComplaintOutcomeLabel + '"', function () {
                    expect(page.internalComplaintOutcomeInput.isDisplayed()).toBeTruthy();
                });

                if (type == "student") {
                    it('should contain a radio button for "Yes" under "' + testData.informationLabel_Student +'"', function () {
                        expect(page.oiaReviewedTrueRadio.isDisplayed()).toBeTruthy();
                    });

                    it('should contain a radio button for "No" under "' + testData.informationLabel_Student +'"', function () {
                        expect(page.oiaReviewedFalseRadio.isDisplayed()).toBeTruthy();
                    });
                }
                else {
                    it('should contain a radio button for "Yes" under "' + testData.informationLabel_NotStudent + '"', function () {
                        expect(page.oiaReviewedTrueRadio.isDisplayed()).toBeTruthy();
                    });

                    it('should contain a radio button for "No" under "' + testData.informationLabel_NotStudent + '"', function () {
                        expect(page.oiaReviewedFalseRadio.isDisplayed()).toBeTruthy();
                    });
                }
                
                it('should not contain a text box to enter "If yes, please provide the following information" until the "Yes" radio button is selected', function () {
                    expect(page.oiaInformationNotesInput.isDisplayed()).toBeFalsy();
                });

                it('should contain a Next button', function () {
                    expect(page.nextButton.isDisplayed()).toBeTruthy();
                });
            });

            describe('Data entry', function () {

                it('should allow text to be entered for "' + testData.descriptionLabel +'"', function () {
                    var concern = testData.description;
                    page.enterEnquiryDetail(concern);
                    expect(page.enquiryDetailInput.getAttribute('value')).toEqual(concern);
                });

                it('should allow text to be entered for "' + testData.desiredResolutionLabel +'"', function () {
                    var resolution = testData.desiredResolution;
                    page.enterDesiredResolution(resolution);
                    expect(page.desiredResolutionInput.getAttribute('value')).toEqual(resolution);
                });

                it('should allow the radio button for "Yes" to be selected for "' + testData.internalComplaintLabel +'"', function () {
                    page.selectInternalComplaintTrue();
                    expect(page.internalComplaintFalseRadio.isSelected()).toBeFalsy();
                    expect(page.internalComplaintTrueRadio.isSelected()).toBeTruthy();
                });

                it('should allow the radio button for "No" to be selectedfor "' + testData.internalComplaintLabel + '"', function () {
                    page.selectInternalComplaintFalse();
                    expect(page.internalComplaintFalseRadio.isSelected()).toBeTruthy();
                    expect(page.internalComplaintTrueRadio.isSelected()).toBeFalsy();
                });

                it('should allow text to be entered for "' + testData.internalComplaintOutcomeLabel +'"', function () {
                    var outcome = testData.internalComplaintOutcome;
                    page.enterInternalComplaintOutcome(outcome);
                    expect(page.internalComplaintOutcomeInput.getAttribute('value')).toEqual(outcome);
                });

                it('should allow the radio button for "Yes" to be selected', function () {
                    page.selectOiaReviewedTrue();
                    expect(page.oiaReviewedFalseRadio.isSelected()).toBeFalsy();
                    expect(page.oiaReviewedTrueRadio.isSelected()).toBeTruthy();
                });

                it('should allow the radio button for "No" to be selected', function () {
                    page.selectOiaReviewedFalse();
                    expect(page.oiaReviewedFalseRadio.isSelected()).toBeTruthy();
                    expect(page.oiaReviewedTrueRadio.isSelected()).toBeFalsy();
                });

                it('should contain the question "' + testData.desiredResolutionLabel + '" when the "Yes" radio button is selected', function () {
                    page.selectOiaReviewedTrue();
                    expect(page.oiaInformationNotesLabel.isDisplayed()).toBeTruthy();
                    expect(page.oiaInformationNotesLabel.getText()).toContain(testData.informationYesLabel);
                });

                it('should contain an input for the question "' + testData.desiredResolutionLabel + '" when the "Yes" radio button is selected', function () {
                    expect(page.oiaInformationNotesInput.isDisplayed()).toBeTruthy();
                });

                it('should display the mandatory asterisk for the question "' + testData.desiredResolutionLabel + '"', function () {
                    expect(page.oiaInformationNotesLabel.element(by.className(requiredAsterisk)).isPresent()).toBeTruthy();
                    expect(page.oiaInformationNotesLabel.getText()).toContain(asterisk);
                });

                it('should allow the text to be entered for "If yes, please provide the following information" when the "Yes" radio button is selected', function () {
                    page.selectOiaReviewedTrue();
                    expect(page.oiaInformationNotesInput.isDisplayed()).toBeTruthy();
                });

                it('should allow text to be entered for "If yes, please provide the following information"', function () {
                    var information = testData.information;
                    page.enterOiaInformationNotes(information)
                    expect(page.oiaInformationNotesInput.getAttribute('value')).toEqual(information);
                });
            });
        });
    });
}