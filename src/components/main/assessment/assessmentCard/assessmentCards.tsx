import React from "react";
import AssessmentCard from "../assessmentCard/assessmentCardStyle";
import { AssessmentCardData } from "../../../../layout/assessmentCardData";
import Header from "../categoryCreate/header";
import { Button } from "@mantine/core";
import { Add } from "iconsax-react";
import Link from "next/link";

const AssessmentCards = () => {
  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
      <Header />
      <main className="flex flex-col">
        <div className="items-center px-4 gap-1 py-4 flex justify-between">
          <h3>Total Assessments (9)</h3>

          <Link href="/assessments/assessment/create_assessment">
            <Button
              className="bg-greenButton hover:bg-greenButton w-[14rem] text-base"
              leftIcon={<Add size="17" variant="Outline" />}
              onClick={() => {}}
            >
              Create Assessment
            </Button>
          </Link>
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
