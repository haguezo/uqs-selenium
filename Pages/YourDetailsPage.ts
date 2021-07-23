import base = require('./BasePage');

export class YourDetailsPage extends base.BasePage {

    // input controls
    representativeText = this.getElementByDataTestId('representativeText');
    nameInput = this.getElementByDataTestId('name');
    phoneInput = this.getElementByDataTestId('telephone');
    emailInput = this.getElementByDataTestId('email');
    confirmEmailInput = this.getElementByDataTestId('confirmEmail');
    confirmAgeTrueRadio = this.getElementByDataTestId('confirmAgeRadiotrue');
    confirmAgeFalseRadio = this.getElementByDataTestId('confirmAgeRadiofalse');
    addressLine1Input = this.getElementByDataTestId('addressLine1');
    addressLine2Input = this.getElementByDataTestId('addressLine2');
    addressLine3Input = this.getElementByDataTestId('addressLine3');
    postcodeInput = this.getElementByDataTestId('postcode');
    enquirerTypesRadios = this.getAllElementsByModel('vm.formData.enquirerTypeId');
    studentRadio = this.getElementByDataTestId('enquirerTypestudent');
    staffRadio = this.getElementByDataTestId('enquirerTypestaff');
    otherRadio = this.getElementByDataTestId('enquirerTypeother');
    tribunalTrueRadio = this.getElementByDataTestId('tribunaltrue');
    tribunalFalseRadio = this.getElementByDataTestId('tribunalfalse');
    nextButton = this.getElementByDataTestId('next');

    // error messages
    nameRequiredError = this.getElementByDataTestId('nameRequiredError');
    emailRequiredError = this.getElementByDataTestId('emailRequiredError');
    emailInvalidError = this.getElementByDataTestId('emailInvalidError');
    confirmEmailInvalidError = this.getElementByDataTestId('confirmEmailInvalidError');
    enquirerTypeRequiredError = this.getElementByDataTestId('enquirerTypeRequiredError');
    tribunalRequiredError = this.getElementByDataTestId('tribunalRequiredError');
    confirmAgeRequiredError = this.getElementByDataTestId('confirmAgeRequiredError');

    enterName(name): void {
        this.nameInput.sendKeys(name);
    }

    enterPhoneNumber(phoneNumber): void {
        this.phoneInput.sendKeys(phoneNumber);
    }

    enterEmail(email): void {
        this.emailInput.clear();
        this.emailInput.sendKeys(email);
    }

    enterConfirmEmail(email): void {
        this.confirmEmailInput.clear();
        this.confirmEmailInput.sendKeys(email);
    }

    enterAddressLine1(addressLine): void {
        this.addressLine1Input.sendKeys(addressLine);
    }

    enterAddressLine2(addressLine): void {
        this.addressLine2Input.sendKeys(addressLine);
    }

    enterAddressLine3(addressLine): void {
        this.addressLine3Input.sendKeys(addressLine);
    }

    enterPostcode(postcode): void {
        this.postcodeInput.sendKeys(postcode);
    }

    selectStaff(): void {
        this.staffRadio.click();
    }

    selectStudent(): void {
        this.studentRadio.click();
    }

    selectOther(): void {
        this.otherRadio.click();
    }

    selectTribunalTrue(): void {
        this.tribunalTrueRadio.click();
    }

    selectTribunalFalse(): void {
        this.tribunalFalseRadio.click();
    }
    
    select18OrOver(): void {
        this.confirmAgeTrueRadio.click();
    }

     selectUnder18(): void {
         this.confirmAgeFalseRadio.click();
    }


    clickNext(): void {
        this.nextButton.click();
    }

    completeMandatoryText(name, email): void {
        this.enterName(name);
        this.enterEmail(email);
        this.enterConfirmEmail(email);
    }
}
module.exports = new YourDetailsPage;