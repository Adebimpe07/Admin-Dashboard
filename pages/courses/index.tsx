import React from "react";
import { NotificationDrop } from "../../src/components/main/assessment/firstPage";
import Courses from "../../src/components/main/courses/courses";
import Courses_newPage from "../../src/components/main/courses/courses_newPage";
import HeaderData from "../../src/components/main/notification_ProfilePicture";
import { CoursesData } from "../../src/layout/coursesData";

const courses = () => {
  return (
    <div className="flex flex-col flex-1 bg-[#F9FAFB]">
      <header className="flex justify-between border-b border-[#DBD9D9] px-5 py-[1.21rem]">
        <h1 className="text-2xl font-semibold text-[#4A4C58]">
          Course Management
        </h1>
        <div className="flex gap-2 items-center">
          <NotificationDrop />
          <img width="40" src={HeaderData.adminProfilePicture.src} alt="" />
        </div>
      </header>
      {CoursesData.length > 0 ? <Courses /> : <Courses_newPage />}
    </div>
  );
};

export default courses;
