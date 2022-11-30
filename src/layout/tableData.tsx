import { ReactNode } from "react";
import { Column } from "react-table";

export const allApplicationColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Applicant ID",
    accessor: "applicant_id",
  },
  {
    Header: "Program",
    accessor: "program",
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Phone No",
    accessor: "phone_number",
  },
  {
    Header: "",
    accessor: "action",
  },
];
export const ShortListColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Applicant ID",
    accessor: "applicant_id",
  },
  {
    Header: "Program",
    accessor: "program",
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Phone No",
    accessor: "phone_number",
  },
  {
    Header: "",
    accessor: "action",
  },
];
export const passedColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Applicant ID",
    accessor: "applicant_id",
  },
  {
    Header: "Program",
    accessor: "program",
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Phone No",
    accessor: "phone_number",
  },
  {
    Header: "",
    accessor: "action",
  },
];
export const failedColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Applicant ID",
    accessor: "applicant_id",
  },
  {
    Header: "Program",
    accessor: "program",
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Phone No",
    accessor: "phone_number",
  },
  {
    Header: "",
    accessor: "action",
  },
];
export const interviewColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Applicant ID",
    accessor: "applicant_id",
  },
  {
    Header: "Program",
    accessor: "program",
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Phone No",
    accessor: "phone_number",
  },
  {
    Header: "",
    accessor: "action",
  },
];
export const hiredColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Applicant ID",
    accessor: "applicant_id",
  },
  {
    Header: "Program",
    accessor: "program",
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Phone No",
    accessor: "phone_number",
  },
];
export const rejectedColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Applicant ID",
    accessor: "applicant_id",
  },
  {
    Header: "Program",
    accessor: "program",
  },
  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Phone No",
    accessor: "phone_number",
  },
];

// application_end_date
// : 
// "2022-12-21T12:53:23+01:00"
// application_start_date
// : 
// "2022-11-28T12:53:23+01:00"
// courses
// : 
// (2) [{…}, {…}]
// end_date
// : 
// "2023-06-30"
// name
// : 
// "ATS 2.0"
// number_of_courses
// : 
// 2
// start_date
// : 
// "2023-01-05"
// url
// : 
// "https://aptbk.afexats.com/api/jobs/cohort/1"

export const cohortColumn = [
  {
    Header: "Cohort Name",
    accessor: "name",
  },
  {
    Header: "Available Courses",
    accessor: "number_of_courses",
  },
  {
    Header: "Cohort Start Date",
    accessor: "start_date",
  },
  {
    Header: "Cohort End Date",
    accessor: "end_date",
  },
  {
    Header: "Application Start Date",
    accessor: "application_start_date",
  },
  {
    Header: "Application End Date",
    accessor: "application_end_date",
  },
  {
    Header: "",
    accessor: "edit",
  },
  {
    Header: "",
    accessor: "delete",
  },
];
export const contentColumn = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Categories",
    accessor: "categories",
  },
  {
    Header: "Author",
    accessor: "post",
  },
  {
    Header: "Date posted",
    accessor: "date",
  },
  {
    Header: "",
    accessor: "edit",
  },
  {
    Header: "",
    accessor: "delete",
  },
];
export const blogColumn = [
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Author",
    accessor: "post",
  },
  {
    Header: "Comments",
    accessor: "comment",
  },
  {
    Header: "Total Views",
    accessor: "view",
  },
  {
    Header: "Total Likes",
    accessor: "like",
  },
  ,
  {
    Header: "Date posted",
    accessor: "date",
  },
  {
    Header: "",
    accessor: "edit",
  },
  {
    Header: "",
    accessor: "delete",
  },
];
export const atsMemberColumn = [
  {
    Header: "",
    accessor: "image",
  },
  {
    Header: "Name",
    accessor: "full_name",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Course",
    accessor: "course",
  },
  {
    Header: "Cohorts",
    accessor: "cohort",
  },
  {
    Header: "Email",
    accessor: "official_email",
  },
  {
    Header: "Phone No",
    accessor: "phone_number",
  },
  {
    Header: "",
    accessor: "action",
  },
];

export const categoryColumn: Array<Column<{
  "name": string;
  "question": number;
  "time": string;
  "id": number;
"edit": ReactNode;
"delete": ReactNode;
}>> = [
  {
    Header: "Category Name",
    accessor: "name",
  },
  {
    Header: "Questions",
    accessor: "question",
  },
  {
    Header: "Time",
    accessor: "time",
  },
  {
    Header: "",
    accessor: "edit",
  },
  {
    Header: "",
    accessor: "delete",
  },
];

export const atsTestimonialColumn = [
  {
    Header: "",
    accessor: "image",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Cohorts",
    accessor: "cohort",
  },
  {
    Header: "Course",
    accessor: "course",
  },
  {
    Header: "",
    accessor: "action",
  },
];

export const atsAttendanceColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Check in time",
    accessor: "intime",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Check out time",
    accessor: "outtime",
  },
  {
    Header: "Date",
    accessor: "date",
  },
];

export const questionList = [
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Questions",
    accessor: "question",
  },
  {
    Header: "Time",
    accessor: "time",
  },
  {
    Header: "",
    accessor: "edit",
  },
  {
    Header: "",
    accessor: "delete",
  },
];
export const showCategoryList = [
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Questions",
    accessor: "question",
  },
  {
    Header: "Time",
    accessor: "time",
  },
  //   {
  //     Header: "",
  //     accessor: "edit",
  //   },
  //   {
  //     Header: "",
  //     accessor: "delete",
  //   },
];

export const emailColumn = [
  {
    Header: "Type",
    accessor: "type",
  },
  {
    Header: "Created on",
    accessor: "created_on",
  },
  {
    Header: "Last Modified",
    accessor: "last_modified",
  },
  {
    Header: "",
    accessor: "action",
  },
];

export const viewAssessmentColumn = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Applicant ID",
    accessor: "applicant_id",
  },
  {
    Header: "Program",
    accessor: "program",
  },

  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Applicant Result",
    accessor: "applicant_result",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "",
    accessor: "action",
  },
];
