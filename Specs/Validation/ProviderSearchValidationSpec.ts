import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module ProviderSearchValidationSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.providerSearchDropdown;
    var testData = workFlowHelper.testData.providerSearch;
    var validationData = workFlowHelper.validation.providerSearch;

    workFlowHelper.using(testData.pages, function (pageUnderTest) {

        describe('Validation for the "Institution" field on the "' + pageUnderTest + '" page', function () {

            beforeAll(function () {

                workFlowHelper.goToApplication();

                if (pageUnderTest == "Course details") {
                    workFlowHelper.completeYourDetails_Student();
                }
                else {
                    workFlowHelper.completeYourDetails_Staff();
                }
            });

            it('should display a message advising the user to enter 2 or more characters when clicked', function () {
                page.providerSearch.click().then(function () {
                    expect(page.minLengthMessage.isPresent()).toBeTruthy();
                    expect(page.minLengthMessage.isDisplayed()).toBeTruthy();
                });
            });

            it('should display a message advising the user to enter 2 or more characters when 1 character is entered', function () {
                page.enterProviderSearchText('a');
                expect(page.minLengthMessage.isPresent()).toBeTruthy();
                expect(page.minLengthMessage.isDisplayed()).toBeTruthy();
            });
            
            it('should not display a message advising the user to enter 2 or more characters when 2 characters are entered', function () {
                page.enterProviderSearchText('ab');
                expect(page.minLengthMessage.isPresent()).toBeFalsy();
            });

            it('should display a message advising the user that no providers have been found when search term returns nothing', function () {
                page.enterProviderSearchText('zz');
                expect(page.noProviderMessage.isPresent()).toBeTruthy();
                expect(page.noProviderMessage.isDisplayed()).toBeTruthy();
            });

            it('should not display the message advising the user that no providers have been found when search term returns results', function () {
                page.enterProviderSearchText('ba');
                expect(page.noProviderMessage.isPresent()).toBeFalsy();
            });
        });
    });
}