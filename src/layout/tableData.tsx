import { ReactNode } from "react";
import { Column } from "react-table";

export const allApplicationColumn = [
  {
    Header: "Name",
    accessor: "applicant_name",
  },
  {
    Header: "Applicant ID",
    accessor: "application_id",
  },
  {
    Header: "Program",
    accessor: "course",
  },
  {
    Header: "Email Address",
    accessor: "applicant_email",
  },
  {
    Header: "Phone No",
    accessor: "applicant_phone",
  },
  {
    Header: "",
    accessor: "action",
  },
];

export interface ShortListColumnType {
  applicant_name: string;
  application_id: number;
  course: string;
  applicant_email: string;
  applicant_phone: string;
  action: ReactNode;
}

export const ShortListColumn: Array<Column<ShortListColumnType>> = [
  {
    Header: "Name",
    accessor: "applicant_name",
  },
  {
    Header: "Applicant ID",
    accessor: "application_id",
  },
  {
    Header: "Program",
    accessor: "course",
  },
  {
    Header: "Email Address",
    accessor: "applicant_email",
  },
  {
    Header: "Phone No",
    accessor: "applicant_phone",
  },
  {
    Header: "",
    accessor: "action",
  },
];

export const passedColumn = [
  {
    Header: "Name",
    accessor: "applicant_name",
  },
  {
    Header: "Applicant ID",
    accessor: "application_id",
  },
  {
    Header: "Program",
    accessor: "course",
  },
  {
    Header: "Email Address",
    accessor: "applicant_email",
  },
  {
    Header: "Phone No",
    accessor: "applicant_phone",
  },
  {
    Header: "",
    accessor: "action",
  },
];

export const failedColumn = [
  {
    Header: "Name",
    accessor: "applicant_name",
  },
  {
    Header: "Applicant ID",
    accessor: "application_id",
  },
  {
    Header: "Program",
    accessor: "course",
  },
  {
    Header: "Email Address",
    accessor: "applicant_email",
  },
  {
    Header: "Phone No",
    accessor: "applicant_phone",
  },
  {
    Header: "",
    accessor: "action",
  },
];

export const interviewColumn = [
  {
    Header: "Name",
    accessor: "applicant_name",
  },
  {
    Header: "Applicant ID",
    accessor: "application_id",
  },
  {
    Header: "Program",
    accessor: "course",
  },
  {
    Header: "Email Address",
    accessor: "applicant_email",
  },
  {
    Header: "Phone No",
    accessor: "applicant_phone",
  },
  {
    Header: "",
    accessor: "action",
  },
];

export const hiredColumn = [
  {
    Header: "Name",
    accessor: "applicant_name",
  },
  {
    Header: "Applicant ID",
    accessor: "application_id",
  },
  {
    Header: "Program",
    accessor: "course",
  },
  {
    Header: "Email Address",
    accessor: "applicant_email",
  },
  {
    Header: "Phone No",
    accessor: "applicant_phone",
  },
];

export const rejectedColumn = [
  {
    Header: "Name",
    accessor: "applicant_name",
  },
  {
    Header: "Applicant ID",
    accessor: "application_id",
  },
  {
    Header: "Program",
    accessor: "course",
  },
  {
    Header: "Email Address",
    accessor: "applicant_email",
  },
  {
    Header: "Phone No",
    accessor: "applicant_phone",
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
//`${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/cohort/1`

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
  // {
  //   Header: " ",
  //   accessor: "edit",
  // },
  // {
  //   Header: "",
  //   accessor: "delete",
  // },
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

export const categoryColumn: Array<
  Column<{
    name: string;
    question: number;
    time: string;
    id: number;
    edit: ReactNode;
    delete: ReactNode;
  }>
> = [
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
    accessor: "tech_star_full_name",
  },
  {
    Header: "Cohorts",
    accessor: "tech_star_cohort",
  },
  {
    Header: "Course",
    accessor: "tech_star_course",
  },
  {
    Header: "",
    accessor: "action",
  },
];

export const atsAttendanceColumn = [
  {
    Header: "Name",
    accessor: "full_name",
  },
  {
    Header: "Email",
    accessor: "official_email",
  },
  {
    Header: "Check in time",
    accessor: "check-in",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Check out time",
    accessor: "check-out",
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

export const dejiColumn = [
  {
    Header: "Name",
    accessor: "full_name",
  },
  {
    Header: "Email address",
    accessor: "email",
  },
  {
    Header: "Subject",
    accessor: "subject",
  },
  {
    Header: "Message",
    accessor: "short_message",
  },
  {
    Header: "",
    accessor: "view",
  },
];

export const newsLetterColumn = [
  {
    Header: "Subject",
    accessor: "subject",
  },
  {
    Header: "Title",
    accessor: "title",
  },
  {
    Header: "Message",
    accessor: "trunc_content",
  },
];
