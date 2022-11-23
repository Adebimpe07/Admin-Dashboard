import Link from "next/link";
import React from "react";
import { SelectQuestionData } from "../../../../layout/assessmentData";

const QuestionTypeCards = () => {
  return (
    <div className="grid grid-cols-4 gap-2 items-center">
      {SelectQuestionData.map(({ icon, title, href }, index) => {
        return (
          <div key={index}>
            <Link href={href}>
              <div className="bg-[#38CB891A] rounded-lg p-2 flex flex-col items-center">
                <span>{icon}</span>
                <span className="text-[#4A4C58]">{title}</span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionTypeCards;
