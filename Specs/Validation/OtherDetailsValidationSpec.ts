import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module OtherDetailsValidationSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.otherDetailsPage;
    var testData = workFlowHelper.testData.otherDetails;
    var validationData = workFlowHelper.validation.otherDetails;
    var providerValidationData = workFlowHelper.validation.providerSearch;

    describe('Validation on the "Other Details" page', function () {

        beforeAll(function () {
            workFlowHelper.goToApplication();
            workFlowHelper.completeYourDetails_Other();
        });

        it('should display the "Other Details" page', function () {
            workFlowHelper.waitForUrl(testData.url);
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
        });

        it('should display required error messages if nothing entered', function () {
            page.clickNext();
            expect(page.providerRequiredError.isDisplayed()).toBeTruthy();
            expect(page.relationshipRequiredError.isDisplayed()).toBeTruthy();
        });

        it('should display the "' + providerValidationData.required + '" error message when "Institution" has not been entered', function () {
            expect(page.providerRequiredError.getText()).toEqual(providerValidationData.required);
        });

        it('should display the "' + validationData.relationshipRequired + '" error message when "Relationship to the provider" has not been entered', function () {
            expect(page.relationshipRequiredError.getText()).toEqual(validationData.relationshipRequired);
        });

         it('should display required error messages if spaces entered in text fields', function () {
            var spaces = '     ';
            page.enterRelationship(spaces);
            page.clickNext();
            expect(page.relationshipRequiredError.isDisplayed()).toBeTruthy();
        });

         it('should display the "' + validationData.relationshipRequired + '" error message when spaces have been entered for "Relationship to this provider"', function () {
             expect(page.relationshipRequiredError.getText()).toEqual(validationData.relationshipRequired);
        });
    });
}