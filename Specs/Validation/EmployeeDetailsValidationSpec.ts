import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module EmployeeDetailsValidationSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.employeeDetailsPage;
    var testData = workFlowHelper.testData.employeeDetails;
    var validationData = workFlowHelper.validation.employeeDetails;
    var providerValidationData = workFlowHelper.validation.providerSearch;

    describe('Validation on the "Employee Details" page', function () {

        beforeAll(function () {
            workFlowHelper.goToApplication();
            workFlowHelper.completeYourDetails_Staff();
        });

        it('should display the "Employee Details" page', function () {
            workFlowHelper.waitForUrl(testData.url);
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
        });

        it('should display required error messages if nothing entered', function () {
            page.clickNext();
            expect(page.providerRequiredError.isDisplayed()).toBeTruthy();
            expect(page.jobTitleRequiredError.isDisplayed()).toBeTruthy();
            expect(page.startDateRequiredError.isDisplayed()).toBeTruthy();
        });

        it('should display the "' + providerValidationData.required + '" error message when "Institution" has not been entered', function () {
            expect(page.providerRequiredError.getText()).toEqual(providerValidationData.required);
        });

        it('should display the "' + validationData.jobTitleRequired + '" error message when "Your title at this institution" has not been entered', function () {
            expect(page.jobTitleRequiredError.getText()).toEqual(validationData.jobTitleRequired);
        });

        it('should display the "' + validationData.startDateRequired + '" error message when "Start date of employment" has not been entered', function () {
            expect(page.startDateRequiredError.getText()).toEqual(validationData.startDateRequired);
        });

        it('should display required error messages if spaces entered in text fields', function () {
            var spaces = '     ';
            page.enterJobTitle(spaces);
            page.enterStartDate(spaces);
            page.clickNext();
            expect(page.jobTitleRequiredError.isDisplayed()).toBeTruthy();
            expect(page.startDateRequiredError.isDisplayed()).toBeTruthy();
        });

        it('should display the "' + validationData.jobTitleRequired + '" error message when spaces have been entered for "Your title at this institution"', function () {
            expect(page.jobTitleRequiredError.getText()).toEqual(validationData.jobTitleRequired);
        });

        it('should display the "' + validationData.startDateRequired + '" error message when spaces have been entered for "Start date of employment"', function () {
            expect(page.startDateRequiredError.getText()).toEqual(validationData.startDateRequired);
        });
    });
}