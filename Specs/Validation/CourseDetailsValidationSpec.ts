import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module CourseDetailsValidationSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.courseDetailsPage;
    var testData = workFlowHelper.testData.courseDetails;
    var validationData = workFlowHelper.validation.courseDetails;
    var providerValidationData = workFlowHelper.validation.providerSearch;

    describe('Validation on the "Course Details" page', function () {

        beforeAll(function () {
            workFlowHelper.goToApplication();
            workFlowHelper.completeYourDetails_Student();
        });

        it('should display the "Course Details" page', function () {
            workFlowHelper.waitForUrl(testData.url);
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
        });

        it('should display required error messages if nothing entered', function () {
            page.clickNext();
            expect(page.providerRequiredError.isDisplayed()).toBeTruthy();
            expect(page.courseTitleRequiredError.isDisplayed()).toBeTruthy();
            expect(page.courseLevelRequiredError.isDisplayed()).toBeTruthy();
            expect(page.attendanceRequiredError.isDisplayed()).toBeTruthy();
            expect(page.startDateRequiredError.isDisplayed()).toBeTruthy();
            expect(page.endDateRequiredError.isDisplayed()).toBeTruthy();
            expect(page.studentTypeRequiredError.isDisplayed()).toBeTruthy();
        });

        it('should display the "' + providerValidationData.required + '" error message when "Institution" has not been entered', function () {
            expect(page.providerRequiredError.getText()).toEqual(providerValidationData.required);
        });

        it('should display the "' + validationData.titleRequired + '" error message when "Title of your course" has not been entered', function () {
            expect(page.courseTitleRequiredError.getText()).toEqual(validationData.titleRequired);
        });

        it('should display the "' + validationData.levelRequired + '" error message if nothing is selected for "Level of your course"', function () {
            expect(page.courseLevelRequiredError.getText()).toEqual(validationData.levelRequired);
        });

        it('should display the "' + validationData.attendanceRequired + '" error message if nothing is selected for "Full time or part time"', function () {
            expect(page.attendanceRequiredError.getText()).toEqual(validationData.attendanceRequired);
        });

        it('should display the "' + validationData.startDateRequired + '" error message when "Start date of course" has not been entered', function () {
            expect(page.startDateRequiredError.getText()).toEqual(validationData.startDateRequired);
        });

        it('should display the "' + validationData.endDateRequired + '" error message when "End date of course" has not been entered', function () {
            expect(page.endDateRequiredError.getText()).toEqual(validationData.endDateRequired);
        });

        it('should display the "' + validationData.studentTypeRequired + '" error message if nothing is selected for "Are you"', function () {
            expect(page.studentTypeRequiredError.getText()).toEqual(validationData.studentTypeRequired);
        });

        it('should display required error messages if spaces entered in text fields', function () {
            var spaces = '     ';
            page.enterCourseTitle(spaces);
            page.enterStartDate(spaces);
            page.enterEndDate(spaces);
            page.clickNext();
            expect(page.courseTitleRequiredError.isDisplayed()).toBeTruthy();
            expect(page.startDateRequiredError.isDisplayed()).toBeTruthy();
            expect(page.endDateRequiredError.isDisplayed()).toBeTruthy();
        });

        it('should display the "' + validationData.titleRequired + '" error message when spaces have been entered for "Title of your course"', function () {
            expect(page.courseTitleRequiredError.getText()).toEqual(validationData.titleRequired);
        });

        it('should display the "' + validationData.startDateRequired + '" error message when spaces have been entered for "Start date of course"', function () {
            expect(page.startDateRequiredError.getText()).toEqual(validationData.startDateRequired);
        });

        it('should display the "' + validationData.endDateRequired + '" error message when spaces have been entered for "End date of course"', function () {
            expect(page.endDateRequiredError.getText()).toEqual(validationData.endDateRequired);
        });
    });
}