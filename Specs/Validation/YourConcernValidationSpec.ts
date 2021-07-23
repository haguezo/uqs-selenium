import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module YourConcernValidationSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.yourConcernPage;
    var testData = workFlowHelper.testData.yourConcern;
    var validationData = workFlowHelper.validation.yourConcern;
    var enquirerTypes = workFlowHelper.testData.enquirerTypes;

    workFlowHelper.using(enquirerTypes, function (type) {

        describe('Validation on the "Your concern" page for a enquirer type of ' + type, function () {

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

            it('should display the "Your Concern" page', function () {
                workFlowHelper.waitForUrl(testData.url);
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
            });

            it('should display required error messages if nothing entered', function () {
                page.clickNext();
                expect(page.concernRequiredError.isDisplayed()).toBeTruthy();
                expect(page.desiredResolutionRequiredError.isDisplayed()).toBeTruthy();
                expect(page.internalComplaintRequiredError.isDisplayed()).toBeTruthy();
                expect(page.internalComplaintOutcomeRequiredError.isDisplayed()).toBeTruthy();
            });

            it('should display the "' + validationData.descriptionRequired + '" error message when "' + testData.descriptionLabel +'" has not been entered', function () {
                expect(page.concernRequiredError.getText()).toEqual(validationData.descriptionRequired);
            });

            it('should display required error messages if spaces entered for "' + testData.descriptionLabel +'"', function () {
                var spaces = '     ';
                page.enterEnquiryDetail(spaces);
                page.clickNext();
                expect(page.concernRequiredError.isDisplayed()).toBeTruthy();
            });

            it('should display the "' + validationData.descriptionRequired + '" error message when spaces have been entered for "' + testData.descriptionLabel + '"', function () {
                expect(page.concernRequiredError.getText()).toEqual(validationData.descriptionRequired);
            });

            it('should display the "' + validationData.desiredResolutionRequired + '" error message when "' + testData.desiredResolutionLabel + '" has not been entered', function () {
                expect(page.desiredResolutionRequiredError.getText()).toEqual(validationData.desiredResolutionRequired);
            });

            it('should display required error messages if spaces entered for "' + testData.desiredResolutionLabel + '"', function () {
                var spaces = '     ';
                page.enterDesiredResolution(spaces);
                page.clickNext();
                expect(page.desiredResolutionRequiredError.isDisplayed()).toBeTruthy();
            });

            it('should display the "' + validationData.desiredResolutionRequired + '" error message when spaces have been entered for "' + testData.desiredResolutionLabel + '"', function () {
                expect(page.desiredResolutionRequiredError.getText()).toEqual(validationData.desiredResolutionRequired);
            });

            it('should display the "' + validationData.internalComplaintRequired + '" error message when "' + testData.internalComplaintLabel + '" has not been selected', function () {
                expect(page.internalComplaintRequiredError.getText()).toEqual(validationData.internalComplaintRequired);
            });

            it('should display the "' + validationData.internalComplaintOutcomeRequired + '" error message when "' + testData.internalComplaintOutcomeLabel + '" has not been entered', function () {
                expect(page.internalComplaintOutcomeRequiredError.getText()).toEqual(validationData.internalComplaintOutcomeRequired);
            });

            it('should display required error messages if spaces entered for "' + testData.internalComplaintOutcomeLabel + '"', function () {
                var spaces = '     ';
                page.enterInternalComplaintOutcome(spaces);
                page.clickNext();
                expect(page.internalComplaintOutcomeRequiredError.isDisplayed()).toBeTruthy();
            });

            it('should display the "' + validationData.internalComplaintOutcomeRequired + '" error message when spaces have been entered for "' + testData.internalComplaintOutcomeLabel + '"', function () {
                expect(page.internalComplaintOutcomeRequiredError.getText()).toEqual(validationData.internalComplaintOutcomeRequired);
            });

            if (type == "Student") {
                it('should display the "' + validationData.oiaReviewedRequired + '" error message when "' + testData.informationLabel_Student + '" has not been selected', function () {
                    expect(page.oiaReviewedRequiredError.getText()).toEqual(validationData.oiaReviewedRequired);
                });
            }
            else {
                it('should display the "' + validationData.oiaReviewedRequired + '" error message when "' + testData.informationLabel_NotStudent + '" has not been selected', function () {
                    expect(page.oiaReviewedRequiredError.getText()).toEqual(validationData.oiaReviewedRequired);
                });
            }

            it('should display the "' + validationData.oiaInformationRequired + '" error message when "' + testData.informationYesLabel + '" has not been entered', function () {
                page.selectOiaReviewedTrue();
                page.clickNext();
                expect(page.oiaInformationRequiredError.getText()).toEqual(validationData.oiaInformationRequired);
            });

            it('should display required error messages if spaces entered for "' + testData.informationYesLabel + '"', function () {
                var spaces = '     ';
                page.enterOiaInformationNotes(spaces);
                page.clickNext();
                expect(page.oiaInformationRequiredError.isDisplayed()).toBeTruthy();
            });

            it('should display the "' + validationData.oiaInformationRequired + '" error message when spaces have been entered for "' + testData.informationYesLabel + '"', function () {
                expect(page.oiaInformationRequiredError.getText()).toEqual(validationData.oiaInformationRequired);
            });
        });
    });
}