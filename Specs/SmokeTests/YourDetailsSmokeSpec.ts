import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module YourDetailsSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.yourDetailsPage;
    var testData = workFlowHelper.testData.yourDetails;

    describe('The "Your Details" page', function () {

        beforeAll(function () {
            workFlowHelper.goToApplication();
        });

        it('should display the "Your Details" page', function () {
            workFlowHelper.waitForUrl(testData.url);
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
        });

        it('should display the title "' + testData.pageTitle + '" on the page', function () {
            expect(page.pageTitle.getText()).toEqual(testData.pageTitle);
        });

        it('should display the "Progress bar"', function () {
            expect(page.progressBar.isDisplayed()).toBeTruthy();
        });


        it('should display the message "' + testData.representative + '" on the page', function () {
            expect(page.representativeText.isDisplayed()).toBeTruthy();
            expect(page.representativeText.getText()).toEqual(testData.representative);
        });

        it('should display "' + testData.progress + '" on the "Progress bar"', function () {
            expect(page.progressBar.getText()).toEqual(testData.progress);
        });

        describe('Input controls', function () {

            it('should contain a text box to enter "Your full name"', function () {
                expect(page.nameInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "Contact phone number"', function () {
                expect(page.phoneInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "Email address"', function () {
                expect(page.emailInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "Confirm email address"', function () {
                expect(page.confirmEmailInput.isDisplayed()).toBeTruthy();
            });

             it('should contain a radio button for "18 or over"', function () {          
                expect(page.confirmAgeTrueRadio.isDisplayed()).toBeTruthy();
            });

             it('should contain a radio button for "Under 18"', function () {
                expect(page.confirmAgeFalseRadio.isDisplayed()).toBeTruthy();
            });



            it('should contain a text box to enter "Building and street"', function () {
                expect(page.addressLine1Input.isDisplayed()).toBeTruthy();
                expect(page.addressLine2Input.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "Town/city"', function () {
                expect(page.addressLine3Input.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "Postcode"', function () {
                expect(page.postcodeInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "A current, recent or prospective student" under "Are you"', function () {
                expect(page.studentRadio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "A member of staff" under "Are you"', function () {
                expect(page.staffRadio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "Other" under "Are you"', function () {
                expect(page.otherRadio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "Yes" under "Is the concern subject to any ongoing court or employment tribunal proceedings between you and the provider?"', function () {
                expect(page.tribunalTrueRadio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "False" under "Is the concern subject to any ongoing court or employment tribunal proceedings between you and the provider?"', function () {
                expect(page.tribunalFalseRadio.isDisplayed()).toBeTruthy();
            });

            it('should contain a Next button', function () {
                expect(page.nextButton.isDisplayed()).toBeTruthy();
            });
        });

        describe('Data entry', function () {

            it('should allow text to be entered for "Your full name"', function () {
                var name = "Zoe h";
                page.enterName(name);
                expect(page.nameInput.getAttribute('value')).toEqual(name);
            });

            it('should allow text to be entered for "Contact phone number"', function () {
                var phone = "12345678";
                expect(page.phoneInput.isDisplayed()).toBeTruthy();
                page.enterPhoneNumber(phone);
                expect(page.phoneInput.getAttribute('value')).toEqual(phone);
            });

            it('should allow text to be entered for "Email address"', function () {
                var email = 's.n@*****.ac.uk'
                page.enterEmail(email);
                expect(page.emailInput.getAttribute('value')).toEqual(email);
            });

            it('should allow text to be entered for "Confirm email address"', function () {
                var email = 's.n@*****.ac.uk'
                page.enterConfirmEmail(email);
                expect(page.confirmEmailInput.getAttribute('value')).toEqual(email);
            });

            it('should allow the radio button for "18 or over" to be selected', function () {
                page.select18OrOver();
                expect(page.confirmAgeTrueRadio.isSelected()).toBeTruthy();
                expect(page.confirmAgeFalseRadio.isSelected()).toBeFalsy();
            });

            it('should allow the radio button for "under 18" to be selected', function () {
                page.selectUnder18();
                expect(page.confirmAgeFalseRadio.isSelected()).toBeTruthy();
                expect(page.confirmAgeTrueRadio.isSelected()).toBeFalsy();
            });

            it('should allow text to be entered for "Building and street"', function () {
                var line1 = 'abc';
                var line2 = 'def';

                page.enterAddressLine1(line1);
                page.enterAddressLine2(line2);

                expect(page.addressLine1Input.getAttribute('value')).toEqual(line1);
                expect(page.addressLine2Input.getAttribute('value')).toEqual(line2);
            });

            it('should allow text to be entered for "Town/city"', function () {
                var city = 'Bristol'
                page.enterAddressLine3(city);
                expect(page.addressLine3Input.getAttribute('value')).toEqual(city);
            });

            it('should allow text to be entered for "Postcode"', function () {
                var postcode = 'acbdefg'
                page.enterPostcode(postcode);
                expect(page.postcodeInput.getAttribute('value')).toEqual(postcode);
            });




            it('should allow the radio button for "A current, recent or prospective student" to be selected', function () {
                page.selectStudent();
                expect(page.studentRadio.isSelected()).toBeTruthy();
                expect(page.staffRadio.isSelected()).toBeFalsy();
                expect(page.otherRadio.isSelected()).toBeFalsy();
            });

            it('should allow the radio button for "A member of staff" to be selected', function () {
                page.selectStaff();
                expect(page.studentRadio.isSelected()).toBeFalsy();
                expect(page.staffRadio.isSelected()).toBeTruthy();
                expect(page.otherRadio.isSelected()).toBeFalsy();
            });

            it('should allow the radio button for "Other" to be selected', function () {
                page.selectOther();
                expect(page.studentRadio.isSelected()).toBeFalsy();
                expect(page.staffRadio.isSelected()).toBeFalsy();
                expect(page.otherRadio.isSelected()).toBeTruthy();
            });

            it('should allow the radio button for "Yes" to be selected', function () {
                page.selectTribunalTrue();
                expect(page.tribunalFalseRadio.isSelected()).toBeFalsy();
                expect(page.tribunalTrueRadio.isSelected()).toBeTruthy();
            });

            it('should allow the radio button for "No" to be selected', function () {
                page.selectTribunalFalse();
                expect(page.tribunalFalseRadio.isSelected()).toBeTruthy();
                expect(page.tribunalTrueRadio.isSelected()).toBeFalsy();
            });
        });
    });
}