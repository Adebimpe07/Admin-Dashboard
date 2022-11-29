import React from "react";

const assessmentInformation = ({ result }) => {
  return (
    <section className="container bg-white ml-6 w-auto p-4 my-6 flex flex-col  gap-2 ">
      <h1 className="font-bold text-lg pb-4" >Assessment Information</h1>
      <p className="text-gray-500 font-semibold">Assessment Name: <span className="text-gray-700 font-base capitalize p-4">{ }</span></p>
      <p className="text-gray-500 font-semibold">Application Type: <span className="text-gray-700 font-base capitalize p-4">{ }</span></p>
      <p className="text-gray-500 font-semibold">Date Created: <span className="text-gray-700 font-base capitalize p-4">{ }</span></p>
      <p className="text-gray-500 font-semibold">Total Duration of Assessment: <span className="text-gray-700 font-base capitalize p-4">{ }</span></p>
      <p className="text-gray-500 font-semibold">Benchmark of Assessment: <span className="text-gray-700 font-base capitalize p-4">{ }</span></p>
      <p className="text-gray-500 font-semibold">Status of Assessment: <span className="text-gray-700 font-base capitalize p-4">{ }</span></p>

    </section>
  );
};

export default assessmentInformation;
