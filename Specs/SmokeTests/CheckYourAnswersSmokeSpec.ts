import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module CheckYourAnswersSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.checkYourAnswersPage;
    var testData = workFlowHelper.testData.checkYourAnswers;
    var enquirerTypes = workFlowHelper.testData.enquirerTypes;

    workFlowHelper.using([false, true], function (doUpload) {

        var uploadMessage = (doUpload === true) ? " containing uploaded documents" : " with no documents";

        workFlowHelper.using(enquirerTypes, function (type) {

            describe('The "Check your details before submitting" page for a enquirer type of ' + type + uploadMessage, function () {

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
                    if (doUpload) {
                        workFlowHelper.chooseFileToUpload();
                        workFlowHelper.completeUpload();
                    }
                    else {
                        workFlowHelper.completeUpload(true, true);
                    }
                });

                it('should display the "Check your details before submitting" page', function () {
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

                describe('Page controls', function () {

                    it('should display the page title as "' + testData.pageTitle + '"', function () {
                        expect(page.pageTitle.getText()).toEqual(testData.pageTitle);
                    });

                    it('should display the name of the enquirer', function () {
                        expect(page.nameText.isDisplayed()).toBeTruthy();
                    });

                    it('should display the text entered for name of enquirer', function () {
                        expect(page.nameText.getText()).toEqual(workFlowHelper.testData.yourDetails.name);
                    });

                    it('should display the email address of the enquirer', function () {
                        expect(page.emailText.isDisplayed()).toBeTruthy();
                    });

                    it('should display the email address entered for the enquirer', function () {
                        expect(page.emailText.getText()).toEqual(workFlowHelper.testData.yourDetails.email);
                    });

                    it('should display the response to the "Age" question', function () {
                        expect(page.ageText.isDisplayed()).toBeTruthy();
                    });

                    it('should display the response to the "Age" question as "You are over 18"', function () {
                        expect(page.ageText.getText()).toEqual('You are over 18');
                    });

                    it('should display the response to the "Ongoing legal proceedings" question', function () {
                        expect(page.tribunalText.isDisplayed()).toBeTruthy();
                    });

                    it('should display the response to the "Ongoing legal proceedings" question as "Issue is subject to ongoing legal proceedings"', function () {
                        expect(page.tribunalText.getText()).toEqual('Issue is subject to ongoing legal proceedings');
                    });

                    it('should contain a Change button for "Your details"', function () {
                        expect(page.changeYourDetailsButton.isDisplayed()).toBeTruthy();
                    });

                    if (type == "staff") {

                        it('should display the response to the "Are you" question as "You are a member of staff"', function () {
                            expect(page.typeText.getText()).toEqual('You are a member of staff');
                        });

                        it('should display the name of the provider', function () {
                            expect(page.providerStaffText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the job title of the enquirer', function () {
                            expect(page.jobTitleText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the job title entered for the enquirer', function () {
                            expect(page.jobTitleText.getText()).toEqual(workFlowHelper.testData.employeeDetails.title);
                        });

                        it('should contain a Change button for "Employee details"', function () {
                            expect(page.changeEmployeeDetailsButton.isDisplayed()).toBeTruthy();
                        });

                        it('should not contain a Change button for "Course details"', function () {
                            expect(page.changeCourseDetailsButton.isDisplayed()).toBeFalsy();
                        });

                        it('should not contain a Change button for "Other details"', function () {
                            expect(page.changeOtherDetailsButton.isDisplayed()).toBeFalsy();
                        });
                    }

                    if (type == "student") {

                        it('should display the response to the "Are you" question as "You are a current, recent or prospective student"', function () {
                            expect(page.typeText.getText()).toEqual('You are a current, recent or prospective student');
                        });

                        it('should display the name of the provider', function () {
                            expect(page.providerCourseText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the course title', function () {
                            expect(page.courseTitleText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the course title entered', function () {
                            expect(page.courseTitleText.getText()).toEqual(workFlowHelper.testData.courseDetails.title);
                        });

                        it('should display the course level', function () {
                            expect(page.courseLevelText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the course level entered', function () {
                            expect(page.courseLevelText.getText()).toEqual('PhD - level 8');
                        });

                        it('should display the attendance type', function () {
                            expect(page.attendanceTypeText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the attendance type entered', function () {
                            expect(page.attendanceTypeText.getText()).toEqual('Full time');
                        });

                        it('should display the course start date', function () {
                            expect(page.courseStartDateText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the course start date entered', function () {
                            expect(page.courseStartDateText.getText()).toEqual(workFlowHelper.testData.courseDetails.courseStartDate);
                        });

                        it('should display the course end date', function () {
                            expect(page.courseEndDateText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the course end date entered', function () {
                            expect(page.courseEndDateText.getText()).toEqual(workFlowHelper.testData.courseDetails.courseEndDate);
                        });

                        it('should display the student type', function () {
                            expect(page.studentTypeText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the student type entered', function () {
                            expect(page.studentTypeText.getText()).toEqual('Home/EU student');
                        });

                        it('should contain a Change button for "Course details"', function () {
                            expect(page.changeCourseDetailsButton.isDisplayed()).toBeTruthy();
                        });

                        it('should not contain a Change button for "Employee details"', function () {
                            expect(page.changeEmployeeDetailsButton.isDisplayed()).toBeFalsy();
                        });

                        it('should not contain a Change button for "Other details"', function () {
                            expect(page.changeOtherDetailsButton.isDisplayed()).toBeFalsy();
                        });
                    }

                    if (type == "other") {

                        it('should display the response to the "Are you" question as "You are an other enquirer"', function () {
                            expect(page.typeText.getText()).toEqual('You are an other enquirer');
                        });

                        it('should display the name of the provider', function () {
                            expect(page.providerOtherText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the other relationship', function () {
                            expect(page.otherRelationshipText.isDisplayed()).toBeTruthy();
                        });

                        it('should display the text entered for other relationship', function () {
                            expect(page.otherRelationshipText.getText()).toEqual(workFlowHelper.testData.otherDetails.relationship);
                        });

                        it('should contain a Change button for "Other details"', function () {
                            expect(page.changeOtherDetailsButton.isDisplayed()).toBeTruthy();
                        });

                        it('should not contain a Change button for "Employee details"', function () {
                            expect(page.changeEmployeeDetailsButton.isDisplayed()).toBeFalsy();
                        });

                        it('should not contain a Change button for "Course details"', function () {
                            expect(page.changeCourseDetailsButton.isDisplayed()).toBeFalsy();
                        });
                    }

                    it('should display the description of the issue', function () {
                        expect(page.enquiryDetailText.isDisplayed()).toBeTruthy();
                    });

                    it('should display the description of the issue entered', function () {
                        expect(page.enquiryDetailText.getText()).toEqual(workFlowHelper.testData.yourConcern.description);
                    });

                    it('should display the desired resolution', function () {
                        expect(page.desiredResolutionText.isDisplayed()).toBeTruthy();
                    });

                    it('should display the desired resolution entered', function () {
                        expect(page.desiredResolutionText.getText()).toEqual(workFlowHelper.testData.yourConcern.desiredResolution);
                    });

                    it('should display the internal complaint outcome', function () {
                        expect(page.internalComplaintOutcomeText.isDisplayed()).toBeTruthy();
                    });

                    it('should display the internal complaint outcome entered', function () {
                        var first200chars = workFlowHelper.testData.yourConcern.internalComplaintOutcome.slice(0, 200);
                        var first200noSpaces = first200chars.replace(/\s/g, '');

                        page.internalComplaintOutcomeText.getText().then(function (text) {
                            var textnoSpaces = text.replace(/\s/g, '');
                            expect(textnoSpaces).toEqual(first200noSpaces);
                        });
                    });

                    it('should display the OIA information', function () {
                        expect(page.oiaInformationText.isDisplayed()).toBeTruthy();
                    });

                    it('should display the OIA information entered', function () {
                        expect(page.oiaInformationText.getText()).toEqual(workFlowHelper.testData.yourConcern.information);
                    });

                    it('should contain a Change button for "Your concern"', function () {
                        expect(page.changeYourConcernButton.isDisplayed()).toBeTruthy();
                    });

                    it('should contain a Change button for "Supporting documents"', function () {
                        expect(page.changeSupportingDocumentsButton.isDisplayed()).toBeTruthy();
                    });

                    if (doUpload) {
                        it('should not contain text stating that documents will be sent by email', function () {
                            expect(page.sendDocumentsByEmailText.isDisplayed()).toBeFalsy();
                        });

                        it('should not contain text stating that documents will be sent by post', function () {
                            expect(page.sendDocumentsByPostText.isDisplayed()).toBeFalsy();
                        });
                    }
                    else {
                        it('should contain text stating that documents will be sent by email', function () {
                            expect(page.sendDocumentsByEmailText.isDisplayed()).toBeTruthy();
                        });

                        it('should contain text stating that documents will be sent by post', function () {
                            expect(page.sendDocumentsByPostText.isDisplayed()).toBeTruthy();
                        });
                    }

                    it('should contain the "I accept - submit my concern" button', function () {
                        expect(page.submitButton.isDisplayed()).toBeTruthy();
                    });
                });

                describe('Alternative data', function () {

                    it('should display "Your are under 18" in the "Your details" section when the value is changed', function () {
                        page.changeYourDetails();
                        workFlowHelper.yourDetailsPage.selectUnder18();
                        workFlowHelper.yourDetailsPage.clickNext();

                        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
                        expect(page.ageText.getText()).toEqual('You are under 18');
                    });

                    it('should display "Issue is not subject to ongoing legal proceedings" in the "Your details" section when the value is changed', function () {
                        page.changeYourDetails();
                        workFlowHelper.yourDetailsPage.selectTribunalFalse();
                        workFlowHelper.yourDetailsPage.clickNext();

                        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
                        expect(page.tribunalText.getText()).toEqual('Issue is not subject to ongoing legal proceedings');
                    });
                    
                    it('should display "No" for the "OIA information" question in the "Your concern" section when the value is changed', function () {
                        page.changeYourConcern();
                        workFlowHelper.yourConcernPage.selectOiaReviewedFalse();
                        workFlowHelper.yourConcernPage.clickNext();

                        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
                        expect(page.noOiaInformation.getText()).toEqual('No');
                    });
                });
            });
        });
    });
}