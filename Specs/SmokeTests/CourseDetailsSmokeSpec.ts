import workFlowHelperModule = require('../../Helpers/WorkFlowHelper');

module CourseDetailsSmokeSpec {

    var workFlowHelper: workFlowHelperModule.WorkFlowHelper = require('../../Helpers/WorkFlowHelper.js');
    var page = workFlowHelper.courseDetailsPage;
    var testData = workFlowHelper.testData.courseDetails;

    describe('The "Course Details" page', function () {

        beforeAll(function () {
            workFlowHelper.goToApplication();
            workFlowHelper.completeYourDetails_Student();
        });

        it('should display the "Your Course" page', function () {
            workFlowHelper.waitForUrl(testData.url);
            expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + testData.url);
       });

        it('should display the title "' + testData.pageTitle + '" on the page', function () {
            expect(page.pageTitle.getText()).toEqual(testData.pageTitle);
        });

        it('should display the "Progress bar"', function () {
            expect(page.progressBar.isDisplayed()).toBeTruthy();
        });

        it('should display "' + testData.progress + '" on the "Progress bar"', function () {
            expect(page.progressBar.getText()).toEqual(testData.progress);
        });

        describe('Input controls', function () {

            it('should contain a text box to enter "Institution"', function () {
                expect(page.providerInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "Title of your course"', function () {
                expect(page.courseTitleInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "PhD - level 8" under "Level of your course"', function () {
                expect(page.level8Radio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "Masters - level 7" under "Level of your course"', function () {
                expect(page.level7Radio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "Bachelor or PGCE - Level 6" under "Level of your course"', function () {
                expect(page.level6Radio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "Diploma, Foundation degree or HND - level 5" under "Level of your course"', function () {
                expect(page.level5Radio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "HNC or certificate - level 4" under "Level of your course"', function () {
                expect(page.level4Radio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "Not sure" under "Level of your course"', function () {
                expect(page.notSureRadio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "Full time" under "Full time or part time"', function () {
                expect(page.fullTimeRadio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "Part time" under "Full time or part time"', function () {
                expect(page.partTimeRadio.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "Start date of course"', function () {
                expect(page.courseStartDateInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "End date of course"', function () {
                expect(page.courseEndDateInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a text box to enter "Date left course (if early)"', function () {
                expect(page.withdrawDateInput.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "A Home/EU student" under "Are you"', function () {
                expect(page.euRadio.isDisplayed()).toBeTruthy();
            });

            it('should contain a radio button for "An international student" under "Are you"', function () {
                expect(page.itRadio.isDisplayed()).toBeTruthy();
            });

            it('should contain a Next button', function () {
                expect(page.nextButton.isDisplayed()).toBeTruthy();
            });
        });

        describe('Data entry', function () {

            it('should allow text to be entered for "Title of your course"', function () {
                var title = testData.title;
                page.enterCourseTitle(title);
                expect(page.courseTitleInput.getAttribute('value')).toEqual(title);
            });

            it('should allow the radio button for "Phd - level 8" to be selected', function () {
                page.selectCourseLevel8();
                expect(page.level8Radio.isSelected()).toBeTruthy();
                expect(page.level7Radio.isSelected()).toBeFalsy();
                expect(page.level6Radio.isSelected()).toBeFalsy();
                expect(page.level5Radio.isSelected()).toBeFalsy();
                expect(page.level4Radio.isSelected()).toBeFalsy();
                expect(page.notSureRadio.isSelected()).toBeFalsy();
            });

            it('should allow the radio button for "Masters - level 7" to be selected', function () {
                page.selectCourseLevel7();
                expect(page.level8Radio.isSelected()).toBeFalsy();
                expect(page.level7Radio.isSelected()).toBeTruthy();
                expect(page.level6Radio.isSelected()).toBeFalsy();
                expect(page.level5Radio.isSelected()).toBeFalsy();
                expect(page.level4Radio.isSelected()).toBeFalsy();
                expect(page.notSureRadio.isSelected()).toBeFalsy();
            });

            it('should allow the radio button for "Bachelor or PGCE - Level 6" to be selected', function () {
                page.selectCourseLevel6();
                expect(page.level8Radio.isSelected()).toBeFalsy();
                expect(page.level7Radio.isSelected()).toBeFalsy();
                expect(page.level6Radio.isSelected()).toBeTruthy();
                expect(page.level5Radio.isSelected()).toBeFalsy();
                expect(page.level4Radio.isSelected()).toBeFalsy();
                expect(page.notSureRadio.isSelected()).toBeFalsy();
            });

            it('should allow the radio button for "Diploma, Foundation degree or HND - level 5" to be selected', function () {
                page.selectCourseLevel5();
                expect(page.level8Radio.isSelected()).toBeFalsy();
                expect(page.level7Radio.isSelected()).toBeFalsy();
                expect(page.level6Radio.isSelected()).toBeFalsy();
                expect(page.level5Radio.isSelected()).toBeTruthy();
                expect(page.level4Radio.isSelected()).toBeFalsy();
                expect(page.notSureRadio.isSelected()).toBeFalsy();
            });

            it('should allow the radio button for "HNC or certificate - level 4" to be selected', function () {
                page.selectCourseLevel4();
                expect(page.level8Radio.isSelected()).toBeFalsy();
                expect(page.level7Radio.isSelected()).toBeFalsy();
                expect(page.level6Radio.isSelected()).toBeFalsy();
                expect(page.level5Radio.isSelected()).toBeFalsy();
                expect(page.level4Radio.isSelected()).toBeTruthy();
                expect(page.notSureRadio.isSelected()).toBeFalsy();
            });

            it('should allow the radio button for "Not sure" to be selected', function () {
                page.selectNotSure();
                expect(page.level8Radio.isSelected()).toBeFalsy();
                expect(page.level7Radio.isSelected()).toBeFalsy();
                expect(page.level6Radio.isSelected()).toBeFalsy();
                expect(page.level5Radio.isSelected()).toBeFalsy();
                expect(page.level4Radio.isSelected()).toBeFalsy();
                expect(page.notSureRadio.isSelected()).toBeTruthy();
            });

            it('should allow the radio button for "Full time" to be selected', function () {
                page.selectFullTime();
                expect(page.fullTimeRadio.isSelected()).toBeTruthy();
                expect(page.partTimeRadio.isSelected()).toBeFalsy();
            });

            it('should allow the radio button for "Part time" to be selected', function () {
                page.selectPartTime();
                expect(page.fullTimeRadio.isSelected()).toBeFalsy();
                expect(page.partTimeRadio.isSelected()).toBeTruthy();
            });

            it('should allow text to be entered for "Start date of course"', function () {
                var date = testData.courseStartDate;
                page.enterStartDate(date);
                expect(page.courseStartDateInput.getAttribute('value')).toEqual(date);
            });

            it('should allow text to be entered for "End date of course"', function () {
                var date = testData.courseEndDate;
                page.enterEndDate(date);
                expect(page.courseEndDateInput.getAttribute('value')).toEqual(date);
            });

            it('should allow text to be entered for "Date left course (if early)"', function () {
                var date = testData.earlyEndDate;
                page.enterWithdrawDate(date);
                expect(page.withdrawDateInput.getAttribute('value')).toEqual(date);
            });

            it('should allow the radio button for "A Home/EU student" to be selected', function () {
                page.selectEU();
                expect(page.euRadio.isSelected()).toBeTruthy();
                expect(page.itRadio.isSelected()).toBeFalsy();
            });

            it('should allow the radio button for "An international student" to be selected', function () {
                page.selectInternational();
                expect(page.euRadio.isSelected()).toBeFalsy();
                expect(page.itRadio.isSelected()).toBeTruthy();
            });
        });
    });
}