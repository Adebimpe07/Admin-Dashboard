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
      url: "https://aptbk.afexats.com/api/jobs/courses",
      headers: {
        "api-key":
          "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
        "request-ts": "1667549939702",
        "hash-key":
          "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
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
