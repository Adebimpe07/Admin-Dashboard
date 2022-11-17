import React, { useState } from "react";
import { NotificationDrop } from "./assessmentPage";
import ProfilePicture from "../../../assets/PM_Tosin.png";
import { StaticImageData } from "next/image";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import dynamic from "next/dynamic";
// import Editor from "./editor";
import Options from "./options";

const Editor = dynamic(() => import("./editor"), { ssr: false });

const createQuestions = () => {
  type headerprops = {
    notificationCount: string;
    adminProfilePicture: StaticImageData;
  };

  const HeaderData: headerprops = {
    notificationCount: "2",
    adminProfilePicture: ProfilePicture,
  };

  return (
    <>
      <header className="flex justify-between border-b border-[#DBD9D9] px-4">
        <h1 className="text-2xl font-semibold text-[#4A4C58] pb-[1.41rem]">
          Assessments
        </h1>
        <div className="flex gap-2 items-center">
          <NotificationDrop />
          <img width="40" src={HeaderData.adminProfilePicture.src} alt="" />
        </div>
      </header>
      <div className="flex-1 flex flex-col">
        <div className="flex items-center pl-4 gap-1 py-4">
          <ArrowLeft2 size="17" color="#000" />
          <Link href="/assessment">
            <h1 className="cursor-pointer">Back to Assessments</h1>
          </Link>
        </div>
        <div className="flex h-screen mx-10 p-6 gap-9 bg-white">
          <div className="flex flex-col gap-6 flex-1">
            <p>Question</p>
            <Editor />
          </div>
          <Options />
        </div>
      </div>
    </>
  );
};

export default createQuestions;
