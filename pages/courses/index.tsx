import React, { useEffect, useState } from "react";
import { NotificationDrop } from "../assessments/categories";
import Courses from "../../src/components/main/courses/courses";
import Courses_newPage from "../../src/components/main/courses/courses_newPage";
import HeaderData from "../../src/components/main/notification_ProfilePicture";
import { CoursesData } from "../../src/layout/coursesData";
import axios from "axios";
import Loading from "../../src/components/loading";

const courses = () => {
  const [coursesCard, setCoursesCard] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchCourses = () => {
    setLoading(true);
    var data = "";
    var config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/courses`,
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
        "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
        "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setCoursesCard(response.data.data.results);
        console.log(response.data.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchCourses();
  }, []);

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
      {coursesCard?.length > 0 ? (
        <Courses coursesCard={coursesCard} />
      ) : (
        <Courses_newPage />
      )}
      <Loading loading={loading} />
    </div>
  );
};

export default courses;
