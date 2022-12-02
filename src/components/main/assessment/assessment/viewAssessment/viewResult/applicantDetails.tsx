import { ArrowLeft2, ArrowRight2, PlayCircle } from "iconsax-react";
import React from "react";
import Image from "next/image";
import Passed from "../status/passed";
import Inconclusive from "../status/inconclusive";
import Failed from "../status/failed";


const applicantDetails = ({ result }) => {
  // console.log(1, result.data.applicant_info)
  return (
    <section className="container bg-white ml-6 w-auto p-4 mt-6 flex flex-col  gap-2 ">
      <h1 className="font-bold text-lg pb-4">Applicant details</h1>
      <div className="grid">
        <div className="relative flex gap-8">
          <div className="relative">
            <div className="flex flex-col gap-6">
              <h1 className="text-gray-500 font-semibold">Applicant name: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.applicant_info?.name}</span></h1>
              <h1 className="text-gray-500 font-semibold">Course Applied: <span className="text-gray-700 font-base capitalize p-4">{ }</span></h1>
              <h1 className="text-gray-500 font-semibold">Applicant ID: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.applicant_info?.applicantId}</span></h1>
              <h1 className="text-gray-500 font-semibold">Email: <span className="text-gray-700 font-base  p-4">{result?.data?.applicant_info?.email}</span></h1>
              {/* <div className="absolute inset-y-0  right-10 w-[1px] bg-black opacity-50"></div> */}
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-gray-500 font-semibold">Total Mark Obtained: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.percentage_total.toFixed(2)}%</span></h1>
            <h1 className="text-gray-500 font-semibold flex w-full items-center gap-2 ">Result Status: <span className="w-full">{
              result?.data?.result_status === 'Passed' ?
                <Passed /> :
                result?.data?.result_status === 'Failed' ?
                  <Failed />
                  : <Inconclusive />
            }
            </span></h1>
            <h1 className="text-gray-500 font-semibold">Attempted Category: <span className="text-gray-700 font-base capitalize p-4">  {result?.data?.category_info.length} /{result?.data?.assessment_category_count}</span></h1>

          </div>
        </div>


      </div>
    </section>
  );
};

export default applicantDetails;
