import { ArrowLeft2 } from "iconsax-react";
import React from "react";
import {
  AssessmentBarData,
  SelectQuestionData,
} from "../../../../layout/assessmentData";
import { NotificationDrop } from "../../../../../pages/assessments/categories";
import Link from "next/link";
import HeaderData from "../../notification_ProfilePicture";
import QuestionTable from "../categoryCreate/questionTable";
import { Button } from "@mantine/core";
import QuestionTypeCards from "./questionTypeCards";
type createPageProp = {
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const CategoryReview = () => {
  return (
    <div className="flex-1  bg-[#F9FAFB] flex flex-col">
      <header className="flex justify-between border-b border-[#DBD9D9] px-4">
        <h1 className="text-2xl font-semibold text-[#4A4C58] py-[1.45rem]">
          Assessments
        </h1>
        <div className="flex gap-2 items-center">
          <NotificationDrop />
          <img width="40" src={HeaderData.adminProfilePicture.src} alt="" />
        </div>
      </header>
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center pl-4 gap-1 py-4">
            <ArrowLeft2 size="17" color="#000" />
            <Link href="/assessments/categories/create_essay">
              <h1 className="cursor-pointer">Back</h1>
            </Link>
          </div>
          <div className="grid grid-cols-3 px-4 gap-3">
            {AssessmentBarData.map((item, index) => {
              return (
                <div className=" flex flex-col gap-2">
                  <div className="bg-[#30AD74] h-1 rounded-lg"></div>
                  <span className="pl-2">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center flex-1 mt-16">
          <div className="bg-[#fff] p-10 rounded-lg flex flex-col gap-1">
            <h1 className="font-semibold text-lg pb-4">Add Questions</h1>
            <label className="pb-4">Category Name</label>
            <div className="border border-[#ced4da] rounded-lg w-full py-1">
              <input type="text" className="p-1 focus:outline-none w-full" />
            </div>
            <div className="mt-4 flex flex-col gap-3">
              <h1 className="py-2">Select Question</h1>
              <QuestionTypeCards />
              <h3> Question List </h3>
              <QuestionTable />
              <Button className="bg-[#38CB89] hover:bg-[#38CB89] w-[11rem] text-base mx-auto">
                Upload
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryReview;
