export class ProviderSearchDropDown {

    providerSearch = this.getElementByDataTestId('providerSearch');
    providerSearchInput = this.providerSearch.element(by.css('.ui-select-search'));
    minLengthMessage = this.getElementByDataTestId('lengthNotMet');
    noProviderMessage = this.getElementByDataTestId('noProviderFound');
    selectedProvider = this.getElementByDataTestId('selectedProvider');

    enterProviderSearchText(searchText): void {
        this.providerSearch.click();
        this.providerSearchInput.clear();
        this.providerSearchInput.sendKeys(searchText);
    }

    selectProvider(providerId): void {
        var providerToSelect = this.getElementByDataTestId('provider' + providerId);
        providerToSelect.isDisplayed().then(function (isDisplayed) {
            providerToSelect.click();
        });
    }

    private getElementByDataTestId(id: string) {
        return element(by.css('[data-test-id="' + id + '"]'));
    }
}

module.exports = new ProviderSearchDropDown;