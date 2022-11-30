import React from "react";
import ViewResultHeader from "./viewResultHeader";
import ApplicantDetails from "./applicantDetails";
import AssessmentInformation from "./assessmentInformation";
import Feedback from "./feedback";
import CategoryInformation from "./categoryInformation";

const viewResult = () => {
  return (
    <div>
      <ViewResultHeader />
      <ApplicantDetails />
      <div>
        <div>
          <AssessmentInformation />
          <Feedback />
        </div>
        <CategoryInformation />
      </div>
    </div>
  );
};

export default viewResult;
