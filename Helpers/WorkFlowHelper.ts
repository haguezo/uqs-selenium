import base = require('./BaseWorkFlowHelper');
import yourDetailsModule = require('../Pages/YourDetailsPage');
import employeeDetailsModule = require('../Pages/EmployeeDetailsPage');
import courseDetailsModule = require('../Pages/CourseDetailsPage');
import otherDetailsModule = require('../Pages/OtherDetailsPage');
import yourConcernModule = require('../Pages/YourConcernPage');
import providerSearchModule = require('../Pages/ProviderSearchDropDown');
import uploadModule = require('../Pages/UploadPage');
import checkYourAnswersModule = require('../Pages/CheckYourAnswersPage');
import thankYouModule = require('../Pages/ThankYouPage');
import progressBarModule = require('../Pages/BasePage');

export class WorkFlowHelper extends base.BaseWorkFlowHelper {

    // pages to automate
    yourDetailsPage: yourDetailsModule.YourDetailsPage = require('../Pages/YourDetailsPage.js');
    employeeDetailsPage: employeeDetailsModule.EmployeeDetailsPage = require('../Pages/EmployeeDetailsPage.js');
    courseDetailsPage: courseDetailsModule.CourseDetailsPage = require('../Pages/CourseDetailsPage.js');
    otherDetailsPage: otherDetailsModule.OtherDetailsPage = require('../Pages/OtherDetailsPage.js');
    yourConcernPage: yourConcernModule.YourConcernPage = require('../Pages/YourConcernPage.js');
    providerSearchDropdown: providerSearchModule.ProviderSearchDropDown = require('../Pages/ProviderSearchDropDown.js');
    uploadPage: uploadModule.UploadPage = require('../Pages/UploadPage.js');
    checkYourAnswersPage: checkYourAnswersModule.CheckYourAnswersPage = require('../Pages/CheckYourAnswersPage.js');
    thankYouPage: thankYouModule.ThankYouPage = require('../Pages/ThankYouPage.js');
    progressBarDiv: progressBarModule.BasePage = require('../Pages/BasePage.js');

    completeYourDetails_Student(name = null, email = null): void {
        this.yourDetailsPage.completeMandatoryText(
            name || this.testData.yourDetails.name,
            email || this.testData.yourDetails.email);
        this.yourDetailsPage.select18OrOver();
        this.yourDetailsPage.selectStudent();
        this.yourDetailsPage.selectTribunalTrue();
        this.yourDetailsPage.clickNext();
    }

    completeYourDetails_Staff(name = null, email = null): void {
        this.yourDetailsPage.completeMandatoryText(
            name || this.testData.yourDetails.name,
            email || this.testData.yourDetails.email);
        this.yourDetailsPage.select18OrOver();
        this.yourDetailsPage.selectStaff();
        this.yourDetailsPage.selectTribunalTrue();
        this.yourDetailsPage.clickNext();
    }

    completeYourDetails_Other(name = null, email = null): void {
        this.yourDetailsPage.completeMandatoryText(
            name || this.testData.yourDetails.name,
            email || this.testData.yourDetails.email);
        this.yourDetailsPage.select18OrOver();
        this.yourDetailsPage.selectOther();
        this.yourDetailsPage.selectTribunalTrue();
        this.yourDetailsPage.clickNext();
    }

    completeEmployeeDetails(searchTerm = null, orgId = null, title = null, startDate = null): void {
        this.providerSearchDropdown.enterProviderSearchText(
            searchTerm || this.testData.employeeDetails.searchTerm);
        this.providerSearchDropdown.selectProvider(
            orgId || this.testData.employeeDetails.orgId);
        this.employeeDetailsPage.completeMandatoryText(
            title || this.testData.employeeDetails.title,
            startDate || this.testData.employeeDetails.employmentStartDate);
        this.employeeDetailsPage.clickNext();
    }

    completeStudentDetails(searchTerm = null, orgId = null, title = null, startDate = null, endDate = null): void {
        this.providerSearchDropdown.enterProviderSearchText(
            searchTerm || this.testData.courseDetails.searchTerm);
        this.providerSearchDropdown.selectProvider(
            orgId || this.testData.courseDetails.orgId);
        this.courseDetailsPage.enterCourseTitle(
            title || this.testData.courseDetails.title);
        this.courseDetailsPage.selectCourseLevel8();
        this.courseDetailsPage.selectFullTime();
        this.courseDetailsPage.enterStartDate(
            startDate || this.testData.courseDetails.courseStartDate);
        this.courseDetailsPage.enterEndDate(
            endDate || this.testData.courseDetails.courseEndDate);
        this.courseDetailsPage.selectEU();
        this.courseDetailsPage.clickNext();
    }

    completeOtherDetails(searchTerm = null, orgId = null, relationship = null): void {
        this.providerSearchDropdown.enterProviderSearchText(
            searchTerm || this.testData.otherDetails.searchTerm);
        this.providerSearchDropdown.selectProvider(
            orgId || this.testData.otherDetails.orgId);
        this.otherDetailsPage.completeMandatoryText(
            relationship || this.testData.otherDetails.relationship);
        this.otherDetailsPage.clickNext();
    }

    completeConcern(description = null, resolution = null, internalComplaintOutcome = null, information = null): void {
        this.yourConcernPage.enterEnquiryDetail(
            description || this.testData.yourConcern.description);

        this.yourConcernPage.enterDesiredResolution(
            resolution || this.testData.yourConcern.desiredResolution);

        this.yourConcernPage.selectInternalComplaintTrue();
        this.yourConcernPage.enterInternalComplaintOutcome(
            internalComplaintOutcome || this.testData.yourConcern.internalComplaintOutcome);

        this.yourConcernPage.selectOiaReviewedTrue();

        this.yourConcernPage.enterOiaInformationNotes(
            information || this.testData.yourConcern.information);

        this.yourConcernPage.clickNext();
    }

    chooseFileToUpload(filename = null, description = null): void {
        this.uploadPage.chooseFile(filename || this.testData.upload.fileName);
        this.uploadPage.description(0).sendKeys(description || this.testData.upload.description);
    }

    completeUpload(sendDocsByEmail = false, sendDocsByPost = false): void {
        if (sendDocsByEmail) { this.uploadPage.clickSendDocumentsByEmail(); }
        if (sendDocsByPost) { this.uploadPage.clickSendDocumentsByPost(); }
        this.uploadPage.clickNext();
        this.waitForUrl(this.testData.checkYourAnswers.url);
    }

    submitConcern(): void {
        this.checkYourAnswersPage.submitButton.click();
    }
}

module.exports = new WorkFlowHelper;