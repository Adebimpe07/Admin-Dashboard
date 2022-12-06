import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import EditAssessmentPage from "../../../../src/components/main/assessment/assessment/editAssessment";

const edit_assessment = () => {
  const router = useRouter();
  const [Id, setId] = useState(null);
  useEffect(() => {
    if (router.query.editAssessmentID) {
      setId(router.query.editAssessmentID);
    }
  }, [router.query.editAssessmentID]);
  return Id ? <EditAssessmentPage id={Id} /> : null;
};

export default edit_assessment;
