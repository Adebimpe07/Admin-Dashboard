import { ArrowLeft2 } from "iconsax-react";
import Header from "./header";
import React from "react";
import { AssessmentBarData } from "../../../../layout/assessmentData";
import Link from "next/link";
import QuestionTypeCards from "../category/questionTypeCards";
import { NumberInput, Textarea, TextInput } from "@mantine/core";
import { useContext } from "react";
import FormContext from "../../../../context/store";

const createPage = () => {
  const { categoryForm } = useContext(FormContext);

  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
      <Header name="assessment" />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center pl-4 gap-1 py-4">
            <Link href="/assessments/categories">
              <div className="flex gap-2 items-center">
                <ArrowLeft2 size="17" color="#000" />
                <h1 className="cursor-pointer">Back to Assessments</h1>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-3 px-4 gap-3">
            {AssessmentBarData.map((item, index) => {
              return (
                <div key={index} className=" flex flex-col gap-2">
                  <div className="bg-[#30AD74] h-1 rounded-lg"></div>
                  <span className="pl-2">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center flex-1 mt-8">
          <form className="bg-white p-10 rounded-lg flex flex-col gap-1">
            <h1 className="font-semibold text-lg pb-2">Add Questions</h1>

            <TextInput
              label="Category Name"
              {...categoryForm.getInputProps(`name`)}
            />
            <div className="flex gap-5">
              <NumberInput
                {...categoryForm.getInputProps(`num_of_questions`)}
                label="Number of Questions"
                classNames={{
                  root: "w-[50%]",
                }}
              />
              <TextInput
                {...categoryForm.getInputProps(`test_duration`)}
                label="Time"
                classNames={{
                  root: "w-[50%]",
                }}
                placeholder="00:00:00"
              />
            </div>
            <Textarea
              {...categoryForm.getInputProps(`category_info`)}
              label="Description"
              placeholder="Category Description"
              autosize
              minRows={2}
              maxRows={4}
            />
            <div className="mt-4">
              <h1 className="py-2">Select Question</h1>
              <QuestionTypeCards />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default createPage;
