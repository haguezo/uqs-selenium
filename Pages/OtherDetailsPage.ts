import base = require('./BasePage');

export class OtherDetailsPage extends base.BasePage {

    // input controls
    providerInput = this.getElementByDataTestId('provider');
    relationshipInput = this.getElementByDataTestId('otherRelationship');
    nextButton = this.getElementByDataTestId('next');
    previousButton = this.getElementByDataTestId('previous');

    // error messages
    providerRequiredError = this.getElementByDataTestId('providerRequired');
    relationshipRequiredError = this.getElementByDataTestId('otherRelationshipRequired');

    enterRelationship(title): void {
        this.relationshipInput.sendKeys(title);
    }

    clickNext(): void {
        this.nextButton.click();
    }

    clickPrevious(): void {
        this.previousButton.click();
    }

    completeMandatoryText(relationship): void {
        this.enterRelationship(relationship);
    }
}
module.exports = new OtherDetailsPage;