import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module UploadValidationSpec {
    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.uploadPage;
    var testData = workFlowHelper.testData.upload;
    var validationData = workFlowHelper.validation.upload;
    var enquirerTypes = workFlowHelper.testData.enquirerTypes;
    var uploadAcceptedTypes = workFlowHelper.testData.uploadAcceptedFileTypes;
    var uploadDeniedTypes = workFlowHelper.testData.uploadDeniedFileTypes;

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

                function removeFile() {
                    workFlowHelper.uploadPage.removeButton(0).click();
                }

                it('should display the "Upload" page', function () {
                    workFlowHelper.waitForUrl(testData.url);
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
                });

                it('should display the "' + validationData.fileTooLarge + '" error message when the file is bigger than 10MB', function () {

                    workFlowHelper.chooseFileToUpload(testData.bigFileName, testData.bigDescription);
                    workFlowHelper.uploadPage.clickNext();
                    browser.sleep(2000);

                    var errorMessage = page.errorMessage(0);
                    expect(errorMessage.isDisplayed()).toBeTruthy();
                    expect(errorMessage.getText()).toEqual(validationData.fileTooLarge);

                    // tidy up
                    removeFile();
                });

                it('should display the "' + validationData.descriptionRequired + '" error message when description is empty', function () {

                    workFlowHelper.chooseFileToUpload(null, ' ');

                    var errorMessage = page.errorMessage(0);
                    expect(errorMessage.isDisplayed()).toBeTruthy();
                    expect(errorMessage.getText()).toEqual(validationData.descriptionRequired);

                    // tidy up
                    removeFile();
                });

                it('should not display the "' + validationData.descriptionRequired + '" error message when a description has been provided', function () {

                    workFlowHelper.chooseFileToUpload();

                    var errorMessage = page.errorMessage(0);
                    expect(errorMessage.getText()).toEqual('');

                    // tidy up
                    removeFile();
                });

                it('should allow a file of exactly 10MB to be uploaded', function () {

                    workFlowHelper.chooseFileToUpload(testData.exactFileName, testData.exactDescription);
                    workFlowHelper.uploadPage.clickNext();
                    workFlowHelper.waitForUrl(workFlowHelper.testData.checkYourAnswers.url);
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.checkYourAnswers.url);
                });

                workFlowHelper.using(uploadAcceptedTypes, function (filename) {

                    describe('Uploading accepted upload type' + filename, function () {

                        beforeAll(function () {
                            workFlowHelper.checkYourAnswersPage.changeSupportingDocuments();
                            workFlowHelper.waitForUrl(workFlowHelper.testData.upload.url);
                        });

                        it('should display the "Upload" page', function () {
                            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.upload.url);
                        });

                        it('should allow the file ' + filename + ' to be uploaded', function () {
                            workFlowHelper.uploadPage.removeButton(0).click().then(function () {
                                workFlowHelper.chooseFileToUpload(filename, "File valid");
                                workFlowHelper.uploadPage.clickNext();
                                workFlowHelper.waitForUrl(workFlowHelper.testData.checkYourAnswers.url);
                                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.checkYourAnswers.url);
                            });
                        });
                    });
                });

                describe("Uploading denied file types", function () {

                    beforeAll(function () {
                        workFlowHelper.checkYourAnswersPage.changeSupportingDocuments();
                        workFlowHelper.waitForUrl(workFlowHelper.testData.upload.url);
                        removeFile();
                    });

                    workFlowHelper.using(uploadDeniedTypes, function (filename) {

                        it('should display the "' + validationData.fileTypeNotAccepted + '" error message when the user trys to upload file "' + filename + '"', function () {

                            workFlowHelper.chooseFileToUpload(filename, testData.genericValidationDescription);
                            workFlowHelper.uploadPage.clickNext();
                            browser.sleep(2000);

                            var errorMessage = page.errorMessage(0);
                            expect(errorMessage.isDisplayed()).toBeTruthy();
                            expect(errorMessage.getText()).toEqual(validationData.fileTypeNotAccepted);
                        });
                    });
                });
            });
        }
    });
}