'use strict';

module.exports = {
    enquirerTypes: ["student", "staff", "other"],
    uploadDeniedFileTypes: ["tr5 test.tr5", "jpg.jpg", "gif.gif", "Macro enabled workbook test.xlsm"],
    uploadAcceptedFileTypes: ["Doc test.doc", "Docx test.docx", "Odt test.odt", "Ods test.ods", "xls test.xls", "xlsx test.xlsx", "test10.txt"],
    yourDetails: {
        representative: "If you are representing another person or need assistance completing this form please call 0117 ******* or email uqs@*****.ac.uk.",
        url: "#/form/yourdetails",
        pageTitle: "Your details",
        progress: "Page 1 of 5",
        name: "Zoe h",
        email: "z.h@*****.ac.uk"
    },
    courseDetails: {
        url: "#/form/coursedetails",
        pageTitle: "Your course",
        progress: "Page 2 of 5",
        searchTerm: "bath",
        orgId: 47,
        name: "Bath Spa University",
        title: "Law and stuff",
        courseStartDate: "Sept 2014",
        courseEndDate: "not sure",
        earlyEndDate: "n/a"
    },
    employeeDetails: {
        url: "#/form/employeedetails",
        pageTitle: "The institution/HE provider",
        progress: "Page 2 of 5",
        searchTerm: "bath",
        orgId: 47,
        name: "Bath Spa University",
        title: "Lecturer",
        employmentStartDate: "1/2/2001",
        employmentEndDate: "n/a"
    },
    otherDetails: {
        url: "#/form/otherdetails",
        pageTitle: "The institution/HE provider",
        progress: "Page 2 of 5",
        searchTerm: "bath",
        orgId: 47,
        name: "Bath Spa University",
        relationship: "I know this institution because..."    
    },
    yourConcern: {
        url: "#/form/yourconcern",
        pageTitle: "What is the issue you are concerned about?",
        progress: "Page 3 of 5",
        descriptionLabel: "Briefly describe the issue and how you became aware of it",
        desiredResolutionLabel: "What would you like to happen as a result of this process?",
        internalComplaintLabel: "Have you exhausted the formal internal complaints process at the provider?",
        internalComplaintOutcomeLabel: "Briefly describe the outcome of your internal complaint or tell us why you were unable to make an internal complaint. If the internal complaint process is complete, please include your outcome letter as part of your evidence.",
        informationLabel_Student: "Have you raised the issue with the Office of the Independent Adjudicator or any other external body?",
        informationLabel_NotStudent: "Have you raised the issue with any other body/organisation?",
        informationYesLabel: "If yes, please provide the following information ",
        description: "Short piece of text (less than 200 chars) should not show 'More..' link.",
        desiredResolution: "Equal piece of text (exactly 200 chars) should not show 'More..' link. Increasing impression interested expression he my. Respect invited request charmed me warrant to. Expect no pretty as do thought.",
        internalComplaintOutcome: "Long piece of text (more than 200 chars) should show 'More..' link.  At as in understood an remarkably solicitude. Mean them very seen she she. Use totally written the observe pressed justice. Instantly cordially far intention recommend estimable yet her his. Ladies stairs enough esteem add fat all enable.",
        information: "Short piece of text (less than 200 chars) should not show 'More..' link."
    },
    upload: {
        url: "#/form/uploaddocuments",
        pageTitle: "Upload supporting documents",
        progress: "Page 4 of 5",
        fileName: "test9.txt",
        description: "My 9MB file",
        exactFileName: "test10.txt",
        exactDescription: "My 10MB file",
        bigFileName: "test11.txt",
        bigDescription: "My 11MB file",
        genericValidationDescription: "My not valid file type file",
    },
    checkYourAnswers: {
        url: "#/form/checkyouranswers",
        pageTitle: "Check your details before submitting",
        progress: "Page 5 of 5",
    },
    thankYou: {
        url: "#/form/thankyou",
        pageTitle: "Thank you for submitting your concern",
    },
    providerSearch: {
        placeholder: "Please select an institution.",
        searchTerm: "bath",
        orgId: 47,
        name: "Bath Spa University",
        pages: [ "Course details", "Employee details" ]
    }
};