import { Button } from "@mantine/core";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import React from "react";
import Header from "../categoryCreate/header";
import AssessmentCategoryTable from "./assessmentTable";
import { useRouter } from "next/router";

const createdAssessmentList = () => {
  const router = useRouter();
  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-[#e5e5e5]">
      <Header />
      <div className="flex justify-between p-4 ">
        <div className="flex items-center gap-1">
          <ArrowLeft2 size="17" color="#000" />
          <Link href="/assessments/assessment/create_assessment">
            <h1 className="cursor-pointer">Back</h1>
          </Link>
        </div>
        <Button
          onClick={() => {
            router.push("/assessments/assessment");
          }}
          className="bg-[#38CB89] hover:bg-[#38CB89] text-base"
        >
          Submit
        </Button>
      </div>
      <AssessmentCategoryTable />
    </div>
  );
};

export default createdAssessmentList;
