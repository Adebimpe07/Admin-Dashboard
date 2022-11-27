import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import React from "react";
import Header from "../categoryCreate/header";
import AssessmentCategoryTable from "./assessmentTable";
import { useRouter } from "next/router";
import CreatedAssessSubHeader from "./createdAssessSubHeader";
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
