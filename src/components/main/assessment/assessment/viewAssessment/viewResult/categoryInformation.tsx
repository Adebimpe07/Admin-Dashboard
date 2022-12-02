import React, { useEffect, useState } from "react";
import OpenEndQuestions from "./openEndQuestions";
import Link from "next/link";

const categoryInformation = ({ result }) => {
  const [category, setCategory] = useState([])

  useEffect(() => {
    if (result?.data?.category_info) {
      // setCategory(result?.data?.category)
      setCategory(result.data?.category_info);

    }
  }, [result?.data?.category_info])
  const categor = result?.data?.category_info
  console.log(1, categor)
  return (
    <section className="container bg-white mr-6 ml-1 w-auto p-4 my-6 h-screen ">
      <h1 className="font-bold text-lg pb-4">Category Information.</h1>

      <div>
        {category?.map((element: any, index: any) => {
          return <div key={index}>
            <div className="text-gray-500 font-semibold">Category name:
              <span className="text-gray-700 font-base capitalize p-4">{element?.category?.name}</span></div>
            <div className="text-gray-500 font-semibold">Available Questions: <span className="text-gray-700 font-base capitalize p-4">{element?.no_of_questions}</span></div>
            <div className="text-gray-500 font-semibold">Status: <span className="text-gray-700 font-base capitalize p-4">{element?.status}</span></div>
            <div className="text-gray-500 font-semibold">Allocated Time: <span className="text-gray-700 font-base capitalize p-4">{element?.category?.test_duration}</span></div>
            <div className="text-gray-500 font-semibold">Score: <span className="text-gray-700 font-base capitalize p-4">{element?.score} </span></div>
            <div className="text-gray-500 font-semibold">Percentage Score: <span className="text-gray-700 font-base capitalize p-4">{element?.percentage_mark.toFixed(2)} %</span></div>
            <div>
              <h1 className="font-bold text-gray-600 text-lg pt-4">Session Details.</h1>
              <div className="text-gray-500 font-semibold">Browser: <span className="text-gray-700 font-base capitalize p-4">{element?.session?.browser} </span></div>
              <div className="text-gray-500 font-semibold">Device: <span className="text-gray-700 font-base capitalize p-4">{element?.session?.device} </span></div>
              <div className="text-gray-500 font-semibold">Time Started: <span className="text-gray-700 font-base capitalize p-4">{new Date(`${element?.session?.date_created}`).toString()} </span></div>
              <div className="text-gray-500 font-semibold">Location: <span className="text-gray-700 font-base capitalize p-4">{element?.session?.location} </span></div>
              <div className="text-gray-500 font-semibold">Full Screen Active: <span className="text-gray-700 font-base capitalize p-4">{element?.session?.full_screen_active} </span></div>
              <div className="text-gray-500 font-semibold">Enabled Webcam: <span className="text-gray-700 font-base capitalize p-4">{element?.session?.enable_webcam} </span></div>

            </div>
            <div className="flex  justify-between">
              <div className="text-gray-500 font-semibold">Open Ended Questions: <span className=" font-base capitalize p-4">{element?.open_ended_questions.length} </span></div>

              <button >
                {element?.open_ended_questions.length === 0 ?
                  < OpenEndQuestions color="text-red-500" /> :
                  < OpenEndQuestions color="text-green-500" questions={element.open_ended_questions} result={result.data.id} />
                }
              </button>
            </div>
            <div className="w-full my-4 h-[2px] rounded-md opacity-25 bg-black mx-auto"></div>
          </div>
        })
        }
      </div>
    </section>
  );
};

export default categoryInformation;
