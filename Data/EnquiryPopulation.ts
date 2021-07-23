import workFlowHelperModule = require('../Helpers/WorkFlowHelper');

module EnquiryPopulation {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../Helpers/WorkFlowHelper.js');
    var enquiryData = require('../Data/EnquiryData.js');

    workFlowHelper.using(enquiryData.students, function (data, description) {

        describe('Populating enquiry for ' + description, function () {

            it('should create an enquiry and end on the "Thank you" page', function () {
                workFlowHelper.goToApplication();
                workFlowHelper.completeYourDetails_Student(data.name, data.email);
                workFlowHelper.completeStudentDetails(data.searchTerm, data.orgId,
                    data.title, data.startDate, data.endDate);
                workFlowHelper.completeConcern(data.concern, data.desiredResolution, data.information);
                workFlowHelper.chooseFileToUpload();
                workFlowHelper.completeUpload();
                workFlowHelper.submitConcern();
                workFlowHelper.waitForUrlToContain(workFlowHelper.testData.thankYou.url);
                expect(browser.getCurrentUrl()).toContain(workFlowHelper.testData.thankYou.url);
            });
        });
    });

    workFlowHelper.using(enquiryData.staff, function (data, description) {

        describe('Populating enquiry for ' + description, function () {

            it('should create an enquiry and end on the "Thank you" page', function () {
                workFlowHelper.goToApplication();
                workFlowHelper.completeYourDetails_Staff(data.name, data.email);
                workFlowHelper.completeEmployeeDetails(data.searchTerm, data.orgId,
                    data.title, data.startDate);
                workFlowHelper.completeConcern(data.concern, data.desiredResolution, data.information);
                workFlowHelper.chooseFileToUpload();
                workFlowHelper.completeUpload();
                workFlowHelper.submitConcern();
                workFlowHelper.waitForUrlToContain(workFlowHelper.testData.thankYou.url);
                expect(browser.getCurrentUrl()).toContain(workFlowHelper.testData.thankYou.url);
            });
        });
    });

    workFlowHelper.using(enquiryData.other, function (data, description) {

        describe('Populating enquiry for ' + description, function () {

            it('should create an enquiry and end on the "Thank you" page', function () {
                workFlowHelper.goToApplication();
                workFlowHelper.completeYourDetails_Other(data.name, data.email);
                workFlowHelper.completeOtherDetails(data.searchTerm, data.orgId,
                    data.relationship);
                workFlowHelper.completeConcern(data.concern, data.desiredResolution, data.information);
                workFlowHelper.chooseFileToUpload();
                workFlowHelper.completeUpload();
                workFlowHelper.submitConcern();
                workFlowHelper.waitForUrlToContain(workFlowHelper.testData.thankYou.url);
                expect(browser.getCurrentUrl()).toContain(workFlowHelper.testData.thankYou.url);
            });
        });
    });
}