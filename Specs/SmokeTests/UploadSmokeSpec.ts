import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module UploadSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.uploadPage;
    var testData = workFlowHelper.testData.upload;
    var enquirerTypes = workFlowHelper.testData.enquirerTypes;
    
    workFlowHelper.using(enquirerTypes, function (type) {

        if (browser.params.browserName == "chrome") {
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

                    workFlowHelper.completeConcern();
                });

                it('should display the "Upload" page', function () {
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

                    it('should contain a Choose Files... button', function () {
                        expect(page.chooseFileInput.isPresent()).toBeTruthy();
                    });

                    it('should contain a Next button', function () {
                        expect(page.nextButton.isDisplayed()).toBeTruthy();
                    });
                });

                describe('Uploading a file', function () {

                    it('should allow text to be entered for "File name"', function () {
                        page.chooseFile(testData.fileName);
                        expect(page.fileName(0).getText()).toEqual(testData.fileName);
                    });

                    it('should contain a text box to enter a description of a document', function () {
                        expect(page.description(0).isPresent()).toBeTruthy();
                    });

                    it('should allow text to be entered for the description of a document', function () {
                        var description = testData.description;
                        page.description(0).sendKeys(description);
                        expect(page.description(0).getAttribute('value')).toEqual(description);
                    });

                    it('should contain a remove button for a document', function () {
                        expect(page.removeButton(0).isPresent()).toBeTruthy();
                    });
                });
            });
        }
    });
}