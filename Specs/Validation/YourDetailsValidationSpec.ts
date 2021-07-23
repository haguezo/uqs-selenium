import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module YourDetailsValidationSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.yourDetailsPage;
    var testData = workFlowHelper.testData.yourDetails;
    var validationData = workFlowHelper.validation.yourDetails;

    describe('Validation on the "Your Details" page', function () {

        beforeAll(function () {
            workFlowHelper.goToApplication();
        });

        it('should display the "Your Details" page', function () {
            workFlowHelper.waitForUrl(testData.url);
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
        });

        it('should display required error messages if nothing entered', function () {
            page.clickNext();
            expect(page.nameRequiredError.isDisplayed()).toBeTruthy();
            expect(page.emailRequiredError.isDisplayed()).toBeTruthy();
            expect(page.enquirerTypeRequiredError.isDisplayed()).toBeTruthy();
            expect(page.tribunalRequiredError.isDisplayed()).toBeTruthy();
        });

        it('should display the "' + validationData.nameRequired + '" error message when "Your full name" has not been entered', function () {
            expect(page.nameRequiredError.getText()).toEqual(validationData.nameRequired);
        });

        it('should display the "' + validationData.emailRequired + '" error message when "Email address" has not been entered', function () {
            expect(page.emailRequiredError.getText()).toEqual(validationData.emailRequired);
        });

        it('should display the "' + validationData.enquirerTypeRequired + '" error message if nothing is selected for "Are you"', function () {
            expect(page.enquirerTypeRequiredError.getText()).toEqual(validationData.enquirerTypeRequired);
        });

        it('should display the "' + validationData.confirmAgeRequired + '" error message if nothing is selected for "Are you over 18 years old?"', function () {
            expect(page.confirmAgeRequiredError.getText()).toEqual(validationData.confirmAgeRequired);
        });

        it('should display the "' + validationData.tribunalRequired + '" error message if nothing is selected for "Is the concern subject to any ongoing court or employment tribunal proceedings between you and the provider? "', function () {
            expect(page.tribunalRequiredError.getText()).toEqual(validationData.tribunalRequired);
        });

        it('should display required error messages if spaces entered in text fields', function () {
            var spaces = '     ';
            workFlowHelper.refresh();
            page.enterName(spaces);
            page.enterEmail(spaces);
            page.enterConfirmEmail(spaces);
            page.clickNext();
            expect(page.nameRequiredError.isDisplayed()).toBeTruthy();
            expect(page.emailRequiredError.isDisplayed()).toBeTruthy();
            expect(page.enquirerTypeRequiredError.isDisplayed()).toBeTruthy();
            expect(page.tribunalRequiredError.isDisplayed()).toBeTruthy();
        });

        it('should display the "' + validationData.nameRequired + '" error message when spaces have been entered for "Your full name"', function () {
            expect(page.nameRequiredError.getText()).toEqual(validationData.nameRequired);
        });

        it('should display the "' + validationData.emailRequired + '" error message when spaces have been entered for "Email address"', function () {
            expect(page.emailRequiredError.getText()).toEqual(validationData.emailRequired);
        });

        it('should display an error message if an invalid email is entered into "Email address"', function () {
            page.enterEmail('abc');
            page.clickNext();
            expect(page.emailInvalidError.isDisplayed()).toBeTruthy();
        });

        it('should display the "' + validationData.emailInvalid + '" error message when "Email address" is invalid', function () {
            expect(page.emailInvalidError.getText()).toEqual(validationData.emailInvalid);
        });

        it('should display an error message for "Confirm email address" if value does not match "Email address"', function () {
            page.enterEmail(testData.email);
            page.enterConfirmEmail('z');
            page.clickNext();
            expect(page.confirmEmailInvalidError.isDisplayed()).toBeTruthy();
        });

        it('should display the "' + validationData.confirmEmailInvalid + '" error message when "Confirm email address" if a valid "Email address" is entered', function () {
            expect(page.confirmEmailInvalidError.getText()).toEqual(validationData.confirmEmailInvalid);
        });
    });
}