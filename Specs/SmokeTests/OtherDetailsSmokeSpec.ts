import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module OtherDetailsSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.otherDetailsPage;
    var testData = workFlowHelper.testData.otherDetails;

    describe('The "Other Details" page', function () {

        beforeAll(function () {
            workFlowHelper.goToApplication();
            workFlowHelper.completeYourDetails_Other();
        });

        it('should display the "The institution/HE provider" (Other details) page', function () {
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

            it('should contain a text box to enter "Briefly describe your relationship to this provider"', function () {
                expect(page.relationshipInput.isDisplayed()).toBeTruthy();
            });
            
            it('should contain a Next button', function () {
                expect(page.nextButton.isDisplayed()).toBeTruthy();
            });
        });

        describe('Data entry', function () {

            // TODO: add test for Provider

            it('should allow text to be entered for "Briefly describe your relationship to this provider"', function () {
                var relationship = testData.relationship;
                page.enterRelationship(relationship);
                expect(page.relationshipInput.getAttribute('value')).toEqual(relationship);
            });
        });
    });
}