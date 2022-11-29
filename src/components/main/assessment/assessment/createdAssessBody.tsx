import React, { useState } from "react";
import AssessmentCategoryTable from "../assessmentTable/selectedAssessmentTable";
import CreatedAssessSubHeader from "./createdAssessSubHeader";

const CreatedAssessBody = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);

  return (
    <>
      <CreatedAssessSubHeader selectedCategory={selectedCategory} />
      <AssessmentCategoryTable setSelectedCategory={setSelectedCategory} />
    </>
  );
};

export default CreatedAssessBody;
