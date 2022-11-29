import React from "react";
import OpenEndQuestions from "./openEndQuestions";

const categoryInformation = ({ result }) => {
  const category = result?.data?.category_info
  console.log(1, category)
  return (
    <section className="container bg-white mr-6 ml-1 w-auto p-4 my-6 h-full ">
      <h1 className="font-bold text-lg pb-4">Category Information</h1>
      <div>
        {category && category?.map((element: any, index: any) => {
          <div key={index}>
            <p className="text-gray-500 font-semibold">Category name:
              <span className="text-gray-700 font-base capitalize p-4">{element?.category?.category_info}</span></p>
            <p className="text-gray-500 font-semibold">Course Applied: <span className="text-gray-700 font-base capitalize p-4">{ }</span></p>
            <p className="text-gray-500 font-semibold">Applicant ID: <span className="text-gray-700 font-base capitalize p-4">{result?.data?.applicant_info?.applicantId}</span></p>

            <div>
              <OpenEndQuestions />
              <p>Open ended questions:</p>
            </div>

            <p>Percentage score:</p>
          </div>
        })
        }
      </div>
    </section>
  );
};

export default categoryInformation;
