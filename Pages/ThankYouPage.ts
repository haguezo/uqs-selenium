export class ThankYouPage {

    pageTitle = this.getElementByDataTestId('pageTitle');
    acknowledgementRef = this.getElementByDataTestId('acknowledgementRef');

    private getElementByDataTestId(id: string) {
        return element(by.css('[data-test-id="' + id + '"]'));
    }
}
module.exports = new ThankYouPage;