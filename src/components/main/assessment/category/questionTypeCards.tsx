import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useContext } from "react";
import FormContext from "../../../../context/store";
import { SelectQuestionData } from "../../../../layout/assessmentData";
import axios from "axios";

const QuestionTypeCards = () => {
  const router = useRouter();
  const {
    questionsForm,
    setCategoryID,
    setQuestionType,
    questionType,
    categoryForm,
  } = useContext(FormContext);
  return (
    <div className="grid grid-cols-4 gap-2 items-center">
      {SelectQuestionData.map(({ icon, title, href }, index) => {
        return (
          <div key={index}>
            <div
              onClick={() => {
                var postBody = JSON.stringify(categoryForm.values);

                var config = {
                  method: "post",
                  url: "http://assessbk.afexats.com/api/categories/create-list-category",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  data: postBody,
                };

                axios(config)
                  .then(function (response) {
                    console.log(response.data);
                    setCategoryID(response.data.data.id);
                    if (title === "Essay") {
                      setQuestionType("Open-ended");
                      questionsForm.values.question_type = "Open-ended";
                    } else if (title === "Multiple Choice") {
                      setQuestionType("Multi-choice");
                      questionsForm.values.question_type = "Multi-choice";
                    }
                    router.push(href);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });

                // if (title === "Multiple Response") questionsForm.values.question_type = 'Multi-response'
              }}
              className="bg-[#38CB891A] cursor-pointer rounded-lg p-2 flex flex-col items-center"
            >
              <span>{icon}</span>
              <span className="text-[#4A4C58]">{title}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionTypeCards;
