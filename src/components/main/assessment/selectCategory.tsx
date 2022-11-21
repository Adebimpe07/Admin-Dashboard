import { ArrowLeft2 } from "iconsax-react";
import React from "react";
import {
  AssessmentBarData,
  SelectQuestionData,
} from "../../../layout/assessmentData";
import { NotificationDrop } from "./firstPage";
import Link from "next/link";
import HeaderData from "../notification_ProfilePicture";

type createPageProp = {
  setActive: React.Dispatch<React.SetStateAction<number>>;
};

const createPage = ({ setActive }: createPageProp) => {
  return (
    <>
      <header className="flex justify-between border-b border-[#DBD9D9] px-4">
        <h1 className="text-2xl font-semibold text-[#4A4C58] pb-[1.41rem]">
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
            <Link href="/assessment">
              <h1 className="cursor-pointer">Back to Assessments</h1>
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
            <div className="mt-4">
              <h1 className="py-2">Select Question</h1>
              <div className="grid grid-cols-3 gap-2 items-center">
                {SelectQuestionData.map(({ icon, title }, index) => {
                  return (
                    <div
                      onClick={() => setActive(index + 1)}
                      className="cursor-pointer"
                    >
                      <div className="bg-[#38CB891A] rounded-lg p-2 flex flex-col items-center">
                        <span>{icon}</span>
                        <span className="text-[#4A4C58]">{title}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default createPage;
