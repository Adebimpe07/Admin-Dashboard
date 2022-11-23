import React from "react";
import AssessmentCard from "../assessmentCard/assessmentCardStyle";
import { AssessmentCardData } from "../../../../layout/assessmentCardData";
import Header from "../categoryCreate/header";

const AssessmentCards = () => {
  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-[#e5e5e5]">
      <Header />
      <main className="flex flex-col">
        <div className="items-center px-4 gap-1 py-4">
          <h3>Total Courses (9)</h3>
          {/* <Button
            className="bg-[#38CB89] hover:bg-[#38CB89] w-[11rem] text-base"
            leftIcon={<Add size="17" variant="Outline" />}
            onClick={() => {}}
          >
            Create course
          </Button> */}
        </div>
        <div className="flex gap-4 m-4">
          {AssessmentCardData.map(
            ({ title, paragraph, timestamp, questions }, index) => {
              return (
                <AssessmentCard
                  key={index}
                  questions={questions}
                  title={title}
                  paragraph={paragraph}
                  timestamp={timestamp}
                />
              );
            }
          )}
        </div>
      </main>
    </div>
  );
};

export default AssessmentCards;
