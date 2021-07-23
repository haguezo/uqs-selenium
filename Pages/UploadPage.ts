import base = require('./BasePage');

export class UploadPage extends base.BasePage {

    // input controls
    chooseFileInput = this.getElementByDataTestId('choose');
    sendDocumentsByEmailCheckbox = this.getElementByDataTestId('sendDocumentsEmail');
    sendDocumentsByPostCheckbox = this.getElementByDataTestId('sendDocumentsPost');
    uploadInProgress = this.getElementByDataTestId('uploadInProgress');
    nextButton = this.getElementByDataTestId('next');
    previousButton = this.getElementByDataTestId('previous');

    chooseFile(filename): void {

        var path = require('path');
        var pathToFilename = path.resolve('./UploadFiles', filename);
        this.chooseFileInput.sendKeys(pathToFilename);
    }

    file(index): protractor.ElementFinder {
        return this.getElementByDataTestId('file' + index);
    }

    description(index): protractor.ElementFinder {
        return this.getElementByDataTestId('description' + index);
    }

    errorMessage(index): protractor.ElementFinder {
        return this.getElementByDataTestId('error' + index);
    }

    removeButton(index): protractor.ElementFinder {
        return this.getElementByDataTestId('remove' + index);
    }

    fileName(index): protractor.ElementFinder {
        return this.getElementByDataTestId('name' + index);
    }

    clickSendDocumentsByEmail(): void {
        this.sendDocumentsByEmailCheckbox.click();
    }

    clickSendDocumentsByPost(): void {
        this.sendDocumentsByPostCheckbox.click();
    }

    clickNext(): void {
        this.nextButton.click();
    }

    clickPrevious(): void {
        this.previousButton.click();
    }
}
module.exports = new UploadPage;