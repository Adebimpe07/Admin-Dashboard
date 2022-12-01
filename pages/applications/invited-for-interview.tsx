import React, { useContext, useEffect, useState }  from 'react'
import HeaderApp from "../../src/components/main/body/applicationPage/headerApp";
import SubAppHeader from "../../src/components/main/body/applicationPage/subAppHeader";
import All from "../../src/components/main/body/jobPage/job";
import Body from "../../src/components/main/body/jobPage/body";
import TableHead from "../../src/components/main/body/applicationPage/tableHead";
import { ShortList } from "../../src/components/main/body/applicationPage/shortList";
import dynamic from "next/dynamic";
import FormContext from "../../src/context/store";
import ApplicationBody from '../../src/components/main/body/applicationPage/ApplicationBody';
import ShortlistApplicationBody from '../../src/components/main/body/applicationPage/shortlistApplicationBody';
import PassedApplicationBody from '../../src/components/main/body/applicationPage/passedApplicationBody';
import FailedApplicationBody from '../../src/components/main/body/applicationPage/failedApplicationBody';
import InterviewApplicationBody from '../../src/components/main/body/applicationPage/interviewApplicationBody';


const Index = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <HeaderApp />
      <InterviewApplicationBody />
    </div>
  );
};


export default Index