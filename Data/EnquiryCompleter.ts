import workFlowHelperModule = require('../Helpers/WorkFlowHelper');

module EnquiryCompleter {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../Helpers/WorkFlowHelper.js');
    var enquiryData = require('../Data/EnquiryData.js');
    var completeAs = browser.params.complete.as;
    var completeToPage = browser.params.complete.pages;
    
    describe('The enquiry completer for a user of type "' + completeAs + "' up to " + completeToPage, function () {

        it('should populate an enquiry with test data up to ' + completeToPage, function () {
            workFlowHelper.goToApplication();

            if (completeAs == "student") {

                if (completeToPage == 1) {
                    workFlowHelper.completeYourDetails_Student();

                }
                else if (completeToPage == 2) {
                    workFlowHelper.completeYourDetails_Student();
                    workFlowHelper.completeStudentDetails();
                }
                else if (completeToPage == 3) {
                    workFlowHelper.completeYourDetails_Student();
                    workFlowHelper.completeStudentDetails();
                    workFlowHelper.completeConcern();
                }
                else if (completeToPage == 4) {
                    workFlowHelper.completeYourDetails_Student();
                    workFlowHelper.completeStudentDetails();
                    workFlowHelper.completeConcern();
                    workFlowHelper.completeUpload();
                }
                else {
                    console.log("Invalid page number - choose from 1, 2, 3 or 4");
                }
            }

            else if (completeAs == "staff") {
                if (completeToPage == 1) {
                    workFlowHelper.completeYourDetails_Staff();
                }
                else if (completeToPage == 2) {
                    workFlowHelper.completeYourDetails_Staff();
                    workFlowHelper.completeEmployeeDetails();
                }
                else if (completeToPage == 3) {
                    workFlowHelper.completeYourDetails_Staff();
                    workFlowHelper.completeEmployeeDetails();
                    workFlowHelper.completeConcern();
                }
                else if (completeToPage == 4) {
                    workFlowHelper.completeYourDetails_Staff();
                    workFlowHelper.completeEmployeeDetails();
                    workFlowHelper.completeConcern();
                    workFlowHelper.completeUpload();
                }
                else {
                    console.log("Invalid page number - choose from 1, 2, 3 or 4");
                }

            }

            else if (completeAs == "other") {

                if (completeToPage == 1) {
                    workFlowHelper.completeYourDetails_Other();
                }
                else if (completeToPage == 2) {
                    workFlowHelper.completeYourDetails_Other();
                    workFlowHelper.completeOtherDetails();
                }
                else if (completeToPage == 3) {
                    workFlowHelper.completeYourDetails_Other();
                    workFlowHelper.completeOtherDetails();
                    workFlowHelper.completeConcern();
                }
                else if (completeToPage == 4) {
                    workFlowHelper.completeYourDetails_Other();
                    workFlowHelper.completeOtherDetails();
                    workFlowHelper.completeConcern();
                    workFlowHelper.completeUpload();
                }
                else {
                    console.log("Invalid page number - choose from 1, 2, 3 or 4");
                }
            }

            else {
                console.log("Invalid enquirer type - choose from 'staff', 'student' or 'other'");
            }

            browser.pause();
        });
    });
}