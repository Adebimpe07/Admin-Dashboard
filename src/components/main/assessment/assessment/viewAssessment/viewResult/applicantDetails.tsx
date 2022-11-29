import { ArrowLeft2, ArrowRight2, PlayCircle } from "iconsax-react";
import React from "react";
import Image from "next/image";

const applicantDetails = ({ result }) => {
  // console.log(1, result.data.applicant_info)
  return (
    <section className="container bg-white ml-6 w-auto p-4 mt-6 flex flex-col  gap-2 ">
      <h1 className="font-bold text-lg pb-4">Applicant details</h1>
      <div className="grid">
        <div className="relative">
          {/* <Image
            src=""
            width={100}
            height={100}
            className="rounded-full"
            alt=""
          /> */}
          <div className="flex flex-col gap-6">
            <p className="text-gray-500 font-semibold">Applicant name: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.applicant_info?.name}</span></p>
            <p className="text-gray-500 font-semibold">Course Applied: <span className="text-gray-700 font-base capitalize p-4">{ }</span></p>
            <p className="text-gray-500 font-semibold">Applicant ID: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.applicant_info?.applicantId}</span></p>
            <p className="text-gray-500 font-semibold">Email: <span className="text-gray-700 font-base  p-4">{result?.data?.applicant_info?.email}</span></p>
          </div>
        </div>

        {/* <div className="flex flex-col gap-4">
          <p className="text-gray-500 font-semibold">Device used: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.applicant_info?.name}</span></p>
          <p className="text-gray-500 font-semibold">Location: <span className="text-gray-700 font-base capitalize p-4">{ }</span></p>
          <p className="text-gray-500 font-semibold">Webcam:  <span className="text-gray-700 font-base capitalize p-4">{result?.data?.applicant_info?.applicantId}</span></p>
          <p className="text-gray-500 font-semibold">Time Started: <span className="text-gray-700 font-base  p-4">{result?.data?.applicant_info?.email}</span></p>
          <p className="text-gray-500 font-semibold">Change Device Time: <span className="text-gray-700 font-base  p-4">{result?.data?.applicant_info?.email}</span></p>

          <div>
            <h3>Camera test:</h3>
            <div>
              <ArrowLeft2 size="32" color="#FF8A65" />
              <img src="" alt="" />
              <ArrowRight2 size="32" color="#FF8A65" />
            </div>
          </div>
        </div> */}
        {/* <div className="flex flex-col gap-4">
          <p className="text-gray-500 font-semibold">Browser used:: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.applicant_info?.name}</span></p>
          <p className="text-gray-500 font-semibold">Fullscreen:: <span className="text-gray-700 font-base capitalize p-4">{ }</span></p>
          <p className="text-gray-500 font-semibold">Time Ended::  <span className="text-gray-700 font-base capitalize p-4">{result?.data?.applicant_info?.applicantId}</span></p>

          <div className="flex flex-col gap-4">
            <h3 className="text-gray-500 font-semibold">Audio test:</h3>
            <PlayCircle size="32" color="#FF8A65" />
            <audio>
              <source src="" type=""></source>
            </audio>
          </div>
        </div> */}

      </div>
    </section>
  );
};

export default applicantDetails;
