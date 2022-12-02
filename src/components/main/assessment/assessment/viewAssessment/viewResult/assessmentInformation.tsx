import React from "react";

const assessmentInformation = ({ result }) => {

  return (
    <section className="container bg-white ml-6 w-auto p-4 my-6 flex flex-col  gap-2 ">
      <h1 className="font-bold text-lg pb-4" >Assessment Information</h1>
      <h1 className="text-gray-500 font-semibold">Assessment Name: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.assessment?.name}</span></h1>
      <h1 className="text-gray-500 font-semibold">Application Type: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.assessment?.application_type?.title}</span></h1>
      <h1 className="text-gray-500 font-semibold">Date Created: <span className="text-gray-700 font-base capitalize p-4">{new Date(`${result?.data?.assessment?.date_created}`).toString()}</span></h1>
      <h1 className="text-gray-500 font-semibold">Total Duration of Assessment: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.assessment?.total_duration} Hours</span></h1>
      <h1 className="text-gray-500 font-semibold">Benchmark of Assessment: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.assessment?.benchmark}%</span></h1>
      <h1 className="text-gray-500 font-semibold">Status of Assessment: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.assessment?.is_delete ?
        "Insctive" : "Active"
      }</span></h1>
      <h1 className="text-gray-500 font-semibold">Number of Categories: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.assessment_category_count}</span></h1>

    </section>
  );
};

export default assessmentInformation;
