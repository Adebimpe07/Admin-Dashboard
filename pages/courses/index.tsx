import React, { useContext, useEffect, useState } from "react";
import { NotificationDrop } from "../assessments/categories";
import Courses from "../../src/components/main/courses/courses";
import Courses_newPage from "../../src/components/main/courses/courses_newPage";
import HeaderData from "../../src/components/main/notification_ProfilePicture";
import { CoursesData } from "../../src/layout/coursesData";
import axios, { AxiosRequestConfig } from "axios";
import Loading from "../../src/components/loading";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";
import FormContext from "../../src/context/store";

const courses = () => {
  const { coursesCard, setCoursesCard } = useContext(FormContext);
  const [loading, setLoading] = useState(false);
  var key = CryptoJS.enc.Base64.parse(
    "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
  );
  var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");
  const fetchCourses = () => {
    const requestTs = String(Date.now());
    setLoading(true);
    var config: AxiosRequestConfig = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      url: `/api/jobs/courses`,
      headers: {
        "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
        "request-ts": requestTs,
        "hash-key": sha256(
          process.env.NEXT_PUBLIC_APP_API_KEY +
            process.env.NEXT_PUBLIC_SECRET_KEY +
            requestTs
        ).toString(CryptoJS.enc.Hex),
      },
    };

    axios(config)
      .then(function (response) {
        // setCoursesCard;
        setCoursesCard(
          JSON.parse(
            CryptoJS.AES.decrypt(response.data.data, key, {
              iv: iv,
            }).toString(CryptoJS.enc.Utf8)
          ).results
        );
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        console.log("error");
        setLoading(false);
      });
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="flex flex-col flex-1 bg-[#E5E5E5]">
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
