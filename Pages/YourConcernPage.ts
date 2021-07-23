import base = require('./BasePage');

export class YourConcernPage extends base.BasePage {

    // question labels
    enquiryDetailLabel = this.getElementByDataTestId('enquiryDetailLabel');
    desiredResolutionLabel = this.getElementByDataTestId('desiredResolutionLabel');
    internalComplaintLabel = this.getElementByDataTestId('internalComplaintLabel');
    internalComplaintOutcomeLabel = this.getElementByDataTestId('internalComplaintOutcomeLabel');
    oiaReviewedLabelForStudent = this.getElementByDataTestId('oiaReviewedLabel_Student');
    oiaReviewedLabelForNotStudent = this.getElementByDataTestId('oiaReviewedLabel_NotStudent');
    oiaInformationNotesLabel = this.getElementByDataTestId('oiaInformationNotesLabel');

    // input controls
    enquiryDetailInput = this.getElementByDataTestId('enquiryDetail');
    desiredResolutionInput = this.getElementByDataTestId('desiredResolution');
    internalComplaintTrueRadio = this.getElementByDataTestId('internalComplaintTrue');
    internalComplaintFalseRadio = this.getElementByDataTestId('internalComplaintFalse');
    internalComplaintOutcomeInput = this.getElementByDataTestId('internalComplaintOutcome');
    oiaReviewedTrueRadio = this.getElementByDataTestId('oiaReviewedTrue');
    oiaReviewedFalseRadio = this.getElementByDataTestId('oiaReviewedFalse');
    oiaInformationNotesInput = this.getElementByDataTestId('oiaInformationNotes');
    nextButton = this.getElementByDataTestId('next');
    previousButton = this.getElementByDataTestId('previous');

    // error messages
    concernRequiredError = this.getElementByDataTestId('enquiryDetailRequired');
    desiredResolutionRequiredError = this.getElementByDataTestId('desiredResolutionRequired');
    internalComplaintRequiredError = this.getElementByDataTestId('internalComplaintRequired');
    internalComplaintOutcomeRequiredError = this.getElementByDataTestId('internalComplaintOutcomeRequired');
    oiaReviewedRequiredError = this.getElementByDataTestId('oiaReviewedRequired');
    oiaInformationRequiredError = this.getElementByDataTestId('oiaInformationRequired');

    enterEnquiryDetail(concern): void {
        this.enquiryDetailInput.sendKeys(concern);
    }

    enterDesiredResolution(desiredResolution): void {
        this.desiredResolutionInput.sendKeys(desiredResolution);
    }

    selectInternalComplaintTrue(): void {
        this.internalComplaintTrueRadio.click();
    }

    selectInternalComplaintFalse(): void {
        this.internalComplaintFalseRadio.click();
    }

    enterInternalComplaintOutcome(outcome): void {
        this.internalComplaintOutcomeInput.sendKeys(outcome);
    }

    selectOiaReviewedTrue(): void {
        this.oiaReviewedTrueRadio.click();
    }

    selectOiaReviewedFalse(): void {
        this.oiaReviewedFalseRadio.click();
    }

    enterOiaInformationNotes(information): void {
        this.oiaInformationNotesInput.sendKeys(information);
    }

    clickNext(): void {
        this.nextButton.click();
    }

    clickPrevious(): void {
        this.previousButton.click();
    }
}
module.exports = new YourConcernPage;