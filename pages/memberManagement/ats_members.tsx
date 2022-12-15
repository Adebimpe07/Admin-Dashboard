import dynamic from "next/dynamic";
import React, { useState } from "react";
import Header from "../../src/components/header";

const MemberSubHeader = dynamic(
  () => import("../../src/components/main/body/memberPage/memberSubHeader"),
  {
    ssr: false,
  }
);
const MemberTable = dynamic(
  () => import("../../src/components/main/body/memberPage/memberTable"),
  {
    ssr: false,
  }
);

const Index = () => {
  return (
    <div className="flex-1 bg-[#E5E5E5] flex flex-col overflow-auto  gap-8 pb-4 h-full">
      <Header name=" Member Management" />
      <MemberSubHeader route={0} />
      <MemberTable />
    </div>
  );
};

export default Index;
