import React from "react";
import Header from "../categoryCreate/header";
import CreatedAssessBody from "./createdAssessBody";

const createdAssessmentList = () => {
  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
      <Header />
      <CreatedAssessBody />
    </div>
  );
};

export default createdAssessmentList;
