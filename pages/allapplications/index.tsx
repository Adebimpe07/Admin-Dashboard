import React, { useContext, useEffect, useState }  from 'react'
import HeaderApp from "../../src/components/main/body/applicationPage/headerApp";
import SubAppHeader from "../../src/components/main/body/applicationPage/subAppHeader";
import All from "../../src/components/main/body/jobPage/job";
import Body from "../../src/components/main/body/jobPage/body";
import TableHead from "../../src/components/main/body/applicationPage/tableHead";
import { ShortList } from "../../src/components/main/body/applicationPage/shortList";
import dynamic from "next/dynamic";
import FormContext from "../../src/context/store";

const ApplicationPage = dynamic(
  
    import("../../src/components/main/body/applicationPage/applicationPage"),
  { ssr: false }
);

const Index = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <HeaderApp />
      <SubAppHeader />
      <TableHead />
      <ApplicationPage />
    </div>
  );
};


export default Index