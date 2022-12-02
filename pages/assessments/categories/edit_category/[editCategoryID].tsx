import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EditAssessmentPage from "../../../../src/components/main/assessment/assessment/editAssessment";
import EditCategoryPage from "../../../../src/components/main/assessment/assessment/editCategory";

const edit_category = () => {
  const router = useRouter();
  const [Id, setId] = useState(null);
  useEffect(() => {
    if (router.query.editCategoryID) {
      setId(router.query.editCategoryID);
    }
  }, [router.query.editCategoryID]);
  return Id ? <EditCategoryPage id={Id} /> : null;
};

export default edit_category;
