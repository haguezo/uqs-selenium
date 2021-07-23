export class BasePage {

    pageTitle = this.getElementByDataTestId('pageTitle');
    progressBar = this.getElementByDataTestId('progressBar');

    getElementByDataTestId(id: string) {
        return element(by.css('[data-test-id="' + id + '"]'));
    }

    getAllElementsByModel(model: string) {
        return element.all(by.model(model));
    }
}