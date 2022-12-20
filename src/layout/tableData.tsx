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
    Header: "Author",
    accessor: "author_fullname",
  },
  {
    Header: "Author's Image",
    accessor: "author_image"
  },
  {
    Header: "Title",
    accessor: "title",
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
  
  {
    Header: "Created at",
    accessor: "created_at",
  },
  {
    Header: "Blog Details",
    accessor: "description"
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
    Header: "Course",
    accessor: "course",
  },
  {
    Header: "Cohort",
    accessor: "cohort",
  },
  {
    Header: "Tech Start Id",
    accessor: "tech_star_id"
  },
  {
    Header: "Email",
    accessor: "official_email",
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
    accessor: "tech_star_profile_picture",
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
    Header: "Testimonies",
    accessor: "testimonial",
  },
  {
    Header: "",
    accessor: "action",
  },
];

export const atsAttendanceColumn = [
  {
    Header: "Name",
    accessor: "tech_star",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  // {
  //   Header: "Email",
  //   accessor: "official_email",
  // },
  {
    Header: "Check in Time",
    accessor: "check_in",
  },

  {
    Header: "Check out Time",
    accessor: "check_out",
  },
  // {
  //   Header: "Date",
  //   accessor: "date",
  // },
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
