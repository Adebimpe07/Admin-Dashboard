import { Button } from "@mantine/core";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import React from "react";
import Header from "../../categoryCreate/header";
import ViewAssessmentTable from "./viewAssessmentTable";

const viewAssessment = () => {
  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-[#e5e5e5]">
      <Header />
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center gap-1 ">
            <ArrowLeft2 size="17" color="#000" />
            <Link href="/assessments/categories/create_category">
              <h1 className="cursor-pointer">Back</h1>
            </Link>
          </div>
          <div className="">
            <Button className="bg-[#38CB89] hover:bg-[#38CB89] w-[12rem] text-base">
              Invite for interview
            </Button>
          </div>
        </div>
        <ViewAssessmentTable />
      </div>
    </div>
  );
};

export default viewAssessment;
