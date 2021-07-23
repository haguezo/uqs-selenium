import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module ProviderSearchSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.providerSearchDropdown;
    var testData = workFlowHelper.testData.providerSearch;

    workFlowHelper.using(testData.pages, function (pageUnderTest) {

        describe('The "Institution" field on the "' + pageUnderTest + '" page', function () {

            beforeAll(function () {

                workFlowHelper.goToApplication();

                if (pageUnderTest == "Course details") {
                    workFlowHelper.completeYourDetails_Student();
                }
                else {
                    workFlowHelper.completeYourDetails_Staff();
                }
            });

            it('should contain a text box to search for "Institution"', function () {
                expect(page.providerSearch.isDisplayed()).toBeTruthy();
            });

            it('should contain the placeholder text "Select an institution." for "Institution"', function () {
                expect(page.providerSearch.getText()).toEqual(testData.placeholder);
            });

            it('should allow text to be entered for "Institution"', function () {
                var searchText = testData.searchTerm;
                page.enterProviderSearchText(searchText);
                expect(page.providerSearchInput.getAttribute('value')).toEqual(searchText);
            });

            it('should allow an institution to be selected', function () {
                page.enterProviderSearchText(testData.searchTerm);
                page.selectProvider(testData.orgId);
                expect(page.selectedProvider.getText()).toEqual(testData.name);
            });
        });
    });
}