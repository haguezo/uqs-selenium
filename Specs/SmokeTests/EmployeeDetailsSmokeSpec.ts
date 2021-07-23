import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module EmployeeDetailsSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.employeeDetailsPage;
    var testData = workFlowHelper.testData.employeeDetails;

    describe('The "Employee Details" page', function () {

        beforeAll(function () {
            workFlowHelper.goToApplication();
            workFlowHelper.completeYourDetails_Staff();
        });

        it('should display the "The institution/HE provider" (Employee details) page', function () {
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

        describe('Input controls', function () {

            it('should contain a text box to enter "Institution"', function () {
                expect(page.providerInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "Your job title at this institution"', function () {
                expect(page.jobTitleInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "Start date of employment"', function () {
                expect(page.startDateInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "End date of employment (if applicable)"', function () {
                expect(page.endDateInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a Next button', function () {
                expect(page.nextButton.isDisplayed()).toBeTruthy();
            });
        });

        describe('Data entry', function () {

            it('should allow text to be entered for "Your job title at this institution"', function () {
                var title = testData.title;
                page.enterJobTitle(title);
                expect(page.jobTitleInput.getAttribute('value')).toEqual(title);
            });

            it('should allow text to be entered for "Start date of employment"', function () {
                var date = testData.employmentStartDate;
                page.enterStartDate(date);
                expect(page.startDateInput.getAttribute('value')).toEqual(date);
            });

            it('should allow text to be entered for "End date of employment (if applicable)"', function () {
                var date = testData.employmentEndDate;
                page.enterEndDate(date);
                expect(page.endDateInput.getAttribute('value')).toEqual(date);
            });
        });
    });
}