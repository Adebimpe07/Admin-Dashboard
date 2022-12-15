<<<<<<< HEAD
import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
=======
import HeaderApp from "../../src/components/main/body/applicationPage/headerApp";
>>>>>>> b118dcf (updates to applications page)
import SubAppHeader from "../../src/components/main/body/applicationPage/subAppHeader";
import All from "../../src/components/main/body/jobPage/job";
import Body from "../../src/components/main/body/jobPage/body";
import TableHead from "../../src/components/main/body/applicationPage/tableHead";
<<<<<<< HEAD
=======
// import { ShortList } from "../../src/components/main/body/applicationPage/shortList";
>>>>>>> b118dcf (updates to applications page)
import dynamic from "next/dynamic";
import FormContext from "../../src/context/store";
import ApplicationBody from "../../src/components/main/body/applicationPage/ApplicationBody";
import ShortlistApplicationBody from "../../src/components/main/body/applicationPage/shortlistApplicationBody";
import PassedApplicationBody from "../../src/components/main/body/applicationPage/passedApplicationBody";
import FailedApplicationBody from "../../src/components/main/body/applicationPage/failedApplicationBody";
import InterviewApplicationBody from "../../src/components/main/body/applicationPage/interviewApplicationBody";
import HiredApplicationBody from "../../src/components/main/body/applicationPage/hiredApplicationBody";
<<<<<<< HEAD
import Header from "../../src/components/header";

const Index = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <Header name="Application Management" />
      <HiredApplicationBody />
    </div>
  );
=======

const Index = () => {
    return (
        <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
            <HeaderApp />
            <HiredApplicationBody />
        </div>
    );
>>>>>>> b118dcf (updates to applications page)
=======
import React from "react";
import HiredApplicationBody from "../../src/components/main/body/applicationPage/hiredApplicationBody";
import Header from "../../src/components/header";

const Index = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <Header name="Application Management" />
      <HiredApplicationBody />
    </div>
  );
>>>>>>> b786d1e (new changes)
};

export default Index;
