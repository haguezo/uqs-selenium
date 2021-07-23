import base = require('./BasePage');

export class CourseDetailsPage extends base.BasePage {

    // input controls
    providerInput = this.getElementByDataTestId('provider');
    courseTitleInput = this.getElementByDataTestId('courseTitle');
    level8Radio = this.getElementByDataTestId('courseLevel8');
    level7Radio = this.getElementByDataTestId('courseLevel7');
    level6Radio = this.getElementByDataTestId('courseLevel6');
    level5Radio = this.getElementByDataTestId('courseLevel5');
    level4Radio = this.getElementByDataTestId('courseLevel4');
    notSureRadio = this.getElementByDataTestId('courseLevel0');
    fullTimeRadio = this.getElementByDataTestId('attendanceTypeFT');
    partTimeRadio = this.getElementByDataTestId('attendanceTypePT');
    courseStartDateInput = this.getElementByDataTestId('courseStartDate');
    courseEndDateInput = this.getElementByDataTestId('courseEndDate');
    withdrawDateInput = this.getElementByDataTestId('withdrawDate');
    euRadio = this.getElementByDataTestId('studentTypeEU');
    itRadio = this.getElementByDataTestId('studentTypeIT');
    nextButton = this.getElementByDataTestId('next');
    previousButton = this.getElementByDataTestId('previous');

    // error messages
    providerRequiredError = this.getElementByDataTestId('providerRequired');
    courseTitleRequiredError = this.getElementByDataTestId('courseTitleRequired');
    courseLevelRequiredError = this.getElementByDataTestId('courseLevelRequired');
    attendanceRequiredError = this.getElementByDataTestId('attendanceRequired');
    startDateRequiredError = this.getElementByDataTestId('courseStartDateRequired');
    endDateRequiredError = this.getElementByDataTestId('courseEndDateRequired');
    studentTypeRequiredError = this.getElementByDataTestId('studentTypeRequired');

    enterCourseTitle(title): void {
        this.courseTitleInput.sendKeys(title);
    }

    selectCourseLevel8(): void {
        this.level8Radio.click();
    }

    selectCourseLevel7(): void {
        this.level7Radio.click();
    }

    selectCourseLevel6(): void {
        this.level6Radio.click();
    }

    selectCourseLevel5(): void {
        this.level5Radio.click();
    }

    selectCourseLevel4(): void {
        this.level4Radio.click();
    }

    selectNotSure(): void {
        this.notSureRadio.click();
    }

    selectFullTime(): void {
        this.fullTimeRadio.click();
    }

    selectPartTime(): void {
        this.partTimeRadio.click();
    }

    enterStartDate(date): void {
        this.courseStartDateInput.sendKeys(date);
    }

    enterEndDate(date): void {
        this.courseEndDateInput.sendKeys(date);
    }

    enterWithdrawDate(date): void {
        this.withdrawDateInput.sendKeys(date);
    }

    selectEU(): void {
        this.euRadio.click();
    }

    selectInternational(): void {
        this.itRadio.click();
    }

    clickNext(): void {
        this.nextButton.click();
    }

    clickPrevious(): void {
        this.previousButton.click();
    }
}
module.exports = new CourseDetailsPage;