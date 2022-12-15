import React, { useContext, useEffect, useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import HeaderApp from "../../src/components/main/body/applicationPage/headerApp";
>>>>>>> b118dcf (updates to applications page)
=======
import HeaderApp from "../../src/components/main/body/applicationPage/headerApp";
=======
>>>>>>> 0a2171a (new header)
>>>>>>> b786d1e (new changes)
import SubAppHeader from "../../src/components/main/body/applicationPage/subAppHeader";
import All from "../../src/components/main/body/jobPage/job";
import Body from "../../src/components/main/body/jobPage/body";
import TableHead from "../../src/components/main/body/applicationPage/tableHead";
<<<<<<< HEAD
<<<<<<< HEAD
=======
// import { ShortList } from "../../src/components/main/body/applicationPage/shortList";
>>>>>>> b118dcf (updates to applications page)
=======
// import { ShortList } from "../../src/components/main/body/applicationPage/shortList";
=======
>>>>>>> 0a2171a (new header)
>>>>>>> b786d1e (new changes)
import dynamic from "next/dynamic";
import FormContext from "../../src/context/store";
import ApplicationBody from "../../src/components/main/body/applicationPage/ApplicationBody";
import ShortlistApplicationBody from "../../src/components/main/body/applicationPage/shortlistApplicationBody";
import PassedApplicationBody from "../../src/components/main/body/applicationPage/passedApplicationBody";
import FailedApplicationBody from "../../src/components/main/body/applicationPage/failedApplicationBody";
import InterviewApplicationBody from "../../src/components/main/body/applicationPage/interviewApplicationBody";
import HiredApplicationBody from "../../src/components/main/body/applicationPage/hiredApplicationBody";
import RejectedApplicationBody from "../../src/components/main/body/applicationPage/rejectedApplicationBody";
<<<<<<< HEAD
<<<<<<< HEAD
import Header from "../../src/components/header";

const Index = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <Header name="Application Management" />
      <RejectedApplicationBody />
    </div>
  );
=======
=======
>>>>>>> b786d1e (new changes)

const Index = () => {
    return (
        <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
            <HeaderApp />
            <RejectedApplicationBody />
        </div>
    );
<<<<<<< HEAD
>>>>>>> b118dcf (updates to applications page)
=======
=======
import Header from "../../src/components/header";

const Index = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <Header name="Application Management" />
      <RejectedApplicationBody />
    </div>
  );
>>>>>>> 0a2171a (new header)
>>>>>>> b786d1e (new changes)
};

export default Index;
