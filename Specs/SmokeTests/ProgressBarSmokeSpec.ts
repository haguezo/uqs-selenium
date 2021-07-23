import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module ProgressBarSmokeSpec {
    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var testData = workFlowHelper.testData;
    var enquirerTypes = workFlowHelper.testData.enquirerTypes;

    workFlowHelper.using(enquirerTypes, function (type) {

        describe('The progress bar for a enquirer type of ' + type, function () {

            beforeAll(function () {
                workFlowHelper.goToApplication();
                workFlowHelper.waitForUrl(workFlowHelper.testData.yourDetails.url);
            });

            it('should display "' + testData.yourDetails.progress + ' on the "' + testData.yourDetails.pageTitle + '" page', function () {
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.yourDetails.url);
                expect(workFlowHelper.yourDetailsPage.progressBar.getText()).toEqual(testData.yourDetails.progress);
            });

            if (type == "staff") {
                it('should display "' + testData.employeeDetails.progress + ' on the "' + testData.employeeDetails.pageTitle + '" page', function () {
                    workFlowHelper.completeYourDetails_Staff();
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.employeeDetails.url);
                    expect(workFlowHelper.employeeDetailsPage.progressBar.getText()).toEqual(testData.employeeDetails.progress);
                });
            }

            if (type == "student") {
                it('should display "' + testData.courseDetails.progress + ' on the "' + testData.courseDetails.pageTitle + '" page', function () {
                    workFlowHelper.completeYourDetails_Student();
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.courseDetails.url);
                    expect(workFlowHelper.courseDetailsPage.progressBar.getText()).toEqual(testData.courseDetails.progress);
                });
            }

            if (type == "other") {
                it('should display "' + testData.otherDetails.progress + ' on the "' + testData.otherDetails.pageTitle + '" page', function () {
                    workFlowHelper.completeYourDetails_Other();
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.otherDetails.url);
                    expect(workFlowHelper.otherDetailsPage.progressBar.getText()).toEqual(testData.otherDetails.progress);
                });
            }

            it('should display "' + testData.yourConcern.progress + ' on the "' + testData.yourConcern.pageTitle + '" page', function () {
                if (type == "staff") {
                    workFlowHelper.completeEmployeeDetails();
                }

                if (type == "student") {
                    workFlowHelper.completeStudentDetails();
                }

                if (type == "other") {
                    workFlowHelper.completeOtherDetails();
                }

                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.yourConcern.url);
                expect(workFlowHelper.yourConcernPage.progressBar.getText()).toEqual(testData.yourConcern.progress);
            });

            it('should display "' + testData.upload.progress + ' on the "' + testData.upload.pageTitle + '" page', function () {
                workFlowHelper.completeConcern();
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.upload.url);
                expect(workFlowHelper.uploadPage.progressBar.getText()).toEqual(testData.upload.progress);
            });

            it('should display "' + testData.checkYourAnswers.progress + ' on the "' + testData.checkYourAnswers.pageTitle + '" page', function () {
                workFlowHelper.completeUpload(true, true);
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.checkYourAnswers.url);
                expect(workFlowHelper.checkYourAnswersPage.progressBar.getText()).toEqual(testData.checkYourAnswers.progress);
            });

            // Navigate back to "Your details"
            it('should display "' + testData.yourDetails.progress + ' on the "' + testData.yourDetails.pageTitle + '" page after clicking "Change" on the "' + testData.checkYourAnswers.pageTitle + '" page', function () {
                workFlowHelper.checkYourAnswersPage.changeYourDetails();
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.yourDetails.url);
                expect(workFlowHelper.yourDetailsPage.progressBar.getText()).toEqual(testData.yourDetails.progress);
            });

            // Navigate back to "Check your answers"
            it('should display "' + testData.checkYourAnswers.progress + ' on the "' + testData.checkYourAnswers.pageTitle + '" page after clicking "Next" on the "' + testData.yourDetails.pageTitle + '" page', function () {
                workFlowHelper.yourDetailsPage.clickNext();
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.checkYourAnswers.url);
                expect(workFlowHelper.checkYourAnswersPage.progressBar.getText()).toEqual(testData.checkYourAnswers.progress);
            });

            if (type == "staff") {
                // Navigate back to "The institution/HE provider"
                it('should display "' + testData.employeeDetails.progress + ' on the "' + testData.employeeDetails.pageTitle + '" page after clicking "Change" on the "' + testData.checkYourAnswers.pageTitle + '" page', function () {
                    workFlowHelper.checkYourAnswersPage.changeEmployeeDetails();
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.employeeDetails.url);
                    expect(workFlowHelper.employeeDetailsPage.progressBar.getText()).toEqual(testData.employeeDetails.progress);
                });

                // Navigate back to "Check your answers"
                it('should display "' + testData.checkYourAnswers.progress + ' on the "' + testData.checkYourAnswers.pageTitle + '" page after clicking "Next" on the "' + testData.employeeDetails.pageTitle + '" page', function () {
                    workFlowHelper.employeeDetailsPage.clickNext();
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.checkYourAnswers.url);
                    expect(workFlowHelper.checkYourAnswersPage.progressBar.getText()).toEqual(testData.checkYourAnswers.progress);
                });
            }

            if (type == "student") {
                // Navigate back to "Course details"
                it('should display "' + testData.courseDetails.progress + ' on the "' + testData.courseDetails.pageTitle + '" page after clicking "Change" on the "' + testData.checkYourAnswers.pageTitle + '" page', function () {
                    workFlowHelper.checkYourAnswersPage.changeCourseDetails();
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.courseDetails.url);
                    expect(workFlowHelper.courseDetailsPage.progressBar.getText()).toEqual(testData.courseDetails.progress);
                });

                // Navigate back to "Check your answers"
                it('should display "' + testData.checkYourAnswers.progress + ' on the "' + testData.checkYourAnswers.pageTitle + '" page after clicking "Next" on the "' + testData.courseDetails.pageTitle + '" page', function () {
                    workFlowHelper.courseDetailsPage.clickNext();
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.checkYourAnswers.url);
                    expect(workFlowHelper.checkYourAnswersPage.progressBar.getText()).toEqual(testData.checkYourAnswers.progress);
                });
            }

            if (type == "other") {
                // Navigate back to "Other details"
                it('should display "' + testData.otherDetails.progress + ' on the "' + testData.otherDetails.pageTitle + '" page after clicking "Change" on the "' + testData.checkYourAnswers.pageTitle + '" page', function () {
                    workFlowHelper.checkYourAnswersPage.changeOtherDetails();
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.otherDetails.url);
                    expect(workFlowHelper.otherDetailsPage.progressBar.getText()).toEqual(testData.otherDetails.progress);
                });

                // Navigate back to "Check your answers"
                it('should display "' + testData.checkYourAnswers.progress + ' on the "' + testData.checkYourAnswers.pageTitle + '" page after clicking "Next" on the "' + testData.otherDetails.pageTitle + '" page', function () {
                    workFlowHelper.otherDetailsPage.clickNext();
                    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.checkYourAnswers.url);
                    expect(workFlowHelper.checkYourAnswersPage.progressBar.getText()).toEqual(testData.checkYourAnswers.progress);
                });
            }

            // Navigate back to "Your concern"
            it('should display "' + testData.yourConcern.progress + ' on the "' + testData.yourConcern.pageTitle + '" page after clicking "Change" on the "' + testData.checkYourAnswers.pageTitle + '" page', function () {
                workFlowHelper.checkYourAnswersPage.changeYourConcern();
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.yourConcern.url);
                expect(workFlowHelper.yourConcernPage.progressBar.getText()).toEqual(testData.yourConcern.progress);
            });

            // Navigate back to "Check your answers"
            it('should display "' + testData.checkYourAnswers.progress + ' on the "' + testData.checkYourAnswers.pageTitle + '" page after clicking "Next" on the "' + testData.yourConcern.pageTitle + '" page', function () {
                workFlowHelper.yourConcernPage.clickNext();
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.checkYourAnswers.url);
                expect(workFlowHelper.checkYourAnswersPage.progressBar.getText()).toEqual(testData.checkYourAnswers.progress);
            });

            // Navigate back to "Upload supporting documents"
            it('should display "' + testData.upload.progress + ' on the "' + testData.upload.pageTitle + '" page after clicking "Change" on the "' + testData.checkYourAnswers.pageTitle + '" page', function () {
                workFlowHelper.checkYourAnswersPage.changeSupportingDocuments();
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.upload.url);
                expect(workFlowHelper.uploadPage.progressBar.getText()).toEqual(testData.upload.progress);
            });

            // Navigate back to "Check your answers"
            it('should display "' + testData.checkYourAnswers.progress + ' on the "' + testData.checkYourAnswers.pageTitle + '" page after clicking "Next" on the "' + testData.upload.pageTitle + '" page', function () {
                workFlowHelper.uploadPage.clickNext();
                expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + workFlowHelper.testData.checkYourAnswers.url);
                expect(workFlowHelper.checkYourAnswersPage.progressBar.getText()).toEqual(testData.checkYourAnswers.progress);
            });
        });
    });
}