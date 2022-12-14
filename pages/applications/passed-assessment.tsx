import React from "react";
import PassedApplicationBody from "../../src/components/main/body/applicationPage/passedApplicationBody";
import Header from "../../src/components/header";

const Index = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <Header name="Application Management" />
      <PassedApplicationBody />
    </div>
  );
};

export default Index;
