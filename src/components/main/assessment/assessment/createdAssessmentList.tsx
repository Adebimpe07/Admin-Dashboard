import React from "react";
import Header from "../../../header/index";
import CreatedAssessBody from "./createdAssessBody";

const createdAssessmentList = () => {
  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
      <Header name="Assessment" />
      <CreatedAssessBody />
    </div>
  );
};

export default createdAssessmentList;
