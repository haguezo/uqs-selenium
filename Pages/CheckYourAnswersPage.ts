import base = require('./BasePage');

export class CheckYourAnswersPage extends base.BasePage {

    // Your details
    nameText = this.getElementByDataTestId('name');
    emailText = this.getElementByDataTestId('email');
    ageText = this.getElementByDataTestId('age');
    typeText = this.getElementByDataTestId('type');
    phoneText = this.getElementByDataTestId('phone');
    addressLine1Text = this.getElementByDataTestId('addressLine1');
    addressLine2Text = this.getElementByDataTestId('addressLine2');
    addressLine3Text = this.getElementByDataTestId('addressLine3');
    postcodeText = this.getElementByDataTestId('postcode');
    tribunalText = this.getElementByDataTestId('tribunal');
    changeYourDetailsButton = this.getElementByDataTestId('changeYourDetails');

    // Your course
    providerCourseText = this.getElementByDataTestId('providerCourse');
    courseTitleText = this.getElementByDataTestId('courseTitle');
    courseLevelText = this.getElementByDataTestId('courseLevel');
    attendanceTypeText = this.getElementByDataTestId('attendanceType');
    courseStartDateText = this.getElementByDataTestId('courseStartDate');
    courseEndDateText = this.getElementByDataTestId('courseEndDate');
    withdrawDateText = this.getElementByDataTestId('withdrawDate');
    studentTypeText = this.getElementByDataTestId('studentType');
    changeCourseDetailsButton = this.getElementByDataTestId('changeCourseDetails');

    // Your institution
    providerStaffText = this.getElementByDataTestId('providerStaff');
    jobTitleText = this.getElementByDataTestId('jobTitle');
    employmentStartDateText = this.getElementByDataTestId('employmentStartDate');
    employmentEndDateText = this.getElementByDataTestId('employmentEndDate');
    changeEmployeeDetailsButton = this.getElementByDataTestId('changeEmployeeDetails');

    // Other
    providerOtherText = this.getElementByDataTestId('providerOther');
    otherRelationshipText = this.getElementByDataTestId('otherRelationship');
    changeOtherDetailsButton = this.getElementByDataTestId('changeOtherDetails');

    // Your concern
    enquiryDetailText = this.getElementByDataTestId('enquiryDetail');
    enquiryDetailMoreText = element(by.id('viewDescription'));
    desiredResolutionText = this.getElementByDataTestId('desiredResolution');
    desiredResolutionMoreText = element(by.id('viewDesiredResolution'));
    internalComplaintOutcomeText = this.getElementByDataTestId('internalComplaintOutcome');
    internalComplaintOutcomeMoreText = element(by.id('viewinternalComplaintOutcome'));
    oiaInformationText = this.getElementByDataTestId('oiaInformationText');
    oiaInformationMoreText = element(by.id('viewoiaInformation'));
    noOiaInformation = this.getElementByDataTestId('oiaInformation');
    enquiryDetailToggleButton = this.getElementByDataTestId('enquiryDetailToggle');
    desiredResolutionToggleButton = this.getElementByDataTestId('desiredResolutionToggle');
    internalComplaintOutcomeToggleButton = this.getElementByDataTestId('internalComplaintOutcomeToggle');
    oiaInformationToggleButton = this.getElementByDataTestId('oiaInformationToggle');
    changeYourConcernButton = this.getElementByDataTestId('changeYourConcern');

    // Supporting documents
    fileList = this.getElementByDataTestId('filelist');
    sendDocumentsByEmailText = this.getElementByDataTestId('sendDocumentsEmail');
    sendDocumentsByPostText = this.getElementByDataTestId('sendDocumentsPost');
    changeSupportingDocumentsButton = this.getElementByDataTestId('changeSupportingDocuments');

    // Submit button
    submitButton = this.getElementByDataTestId('submitConcern');

    changeYourDetails(): void {
        this.changeYourDetailsButton.click();
    }

    changeCourseDetails(): void {
        this.changeCourseDetailsButton.click();
    }

    changeEmployeeDetails(): void {
        this.changeEmployeeDetailsButton.click();
    }

    changeOtherDetails(): void {
        this.changeOtherDetailsButton.click();
    }

    changeYourConcern(): void {
        this.changeYourConcernButton.click();
    }

    changeSupportingDocuments(): void {
        this.changeSupportingDocumentsButton.click();
    }

    submit(): void {
        this.submitButton.click();
    }
}
module.exports = new CheckYourAnswersPage;