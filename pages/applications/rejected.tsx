import React from "react";
import RejectedApplicationBody from "../../src/components/main/body/applicationPage/rejectedApplicationBody";
import Header from "../../src/components/header";

const Index = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <Header name="Application Management" />
      <RejectedApplicationBody />
    </div>
  );
};

export default Index;
