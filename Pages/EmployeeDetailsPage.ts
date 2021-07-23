import base = require('./BasePage');

export class EmployeeDetailsPage extends base.BasePage {

    // input controls
    providerInput = this.getElementByDataTestId('provider');
    jobTitleInput = this.getElementByDataTestId('jobTitle');
    startDateInput = this.getElementByDataTestId('employmentStartDate');
    endDateInput = this.getElementByDataTestId('employmentEndDate');
    nextButton = this.getElementByDataTestId('next');
    previousButton = this.getElementByDataTestId('previous');

    // error messages
    providerRequiredError = this.getElementByDataTestId('providerRequired');
    jobTitleRequiredError = this.getElementByDataTestId('jobTitleRequired');
    startDateRequiredError = this.getElementByDataTestId('employmentStartDateRequired');

    enterJobTitle(title): void {
        this.jobTitleInput.sendKeys(title);
    }

    enterStartDate(date): void {
        this.startDateInput.sendKeys(date);
    }

    enterEndDate(date): void {
        this.endDateInput.sendKeys(date);
    }

    clickNext(): void {
        this.nextButton.click();
    }
    
    clickPrevious(): void {
        this.previousButton.click();
    }

    completeMandatoryText(title, startDate): void {
        this.enterJobTitle(title);
        this.enterStartDate(startDate);
    }
}
module.exports = new EmployeeDetailsPage;