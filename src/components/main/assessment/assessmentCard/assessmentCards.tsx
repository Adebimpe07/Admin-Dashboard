import React from "react";
import AssessmentCard from "./assessmentCardStyle";
import { AssessmentCardData } from "../../../../layout/assessmentCardData";
import Header from "../categoryCreate/header";
import { Button } from "@mantine/core";
import { Add } from "iconsax-react";
import Link from "next/link";

const AssessmentCards = ({ AssessmentCardData }) => {
    return (
        <div className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
            <Header />
            <main className="flex flex-col  overflow-auto">
                <div className="items-center px-4 gap-1 py-4 flex justify-between sticky top-0 bg-mainBg z-10">
                    <h3>Total Assessments ({AssessmentCardData.length})</h3>

                    <Link href="/assessments/assessment/create_assessment">
                        <Button
                            className="bg-greenButton hover:bg-greenButton w-[14rem] text-base"
                            leftIcon={<Add size="17" variant="Outline" />}
                            onClick={() => {}}>
                            Create Assessment
                        </Button>
                    </Link>
                </div>
                <div className="gap-4 flex-1 overflow-auto mx-4 mb-2 grid grid-cols-3">
                    {AssessmentCardData.map(
                        (
                            {
                                name,
                                id,
                                assessment_info,
                                total_duration,
                                number_of_questions_in_assessment,
                            },
                            index
                        ) => {
                            return (
                                <AssessmentCard
                                    id={id}
                                    key={index}
                                    questions={
                                        number_of_questions_in_assessment
                                    }
                                    title={name}
                                    paragraph={assessment_info}
                                    timestamp={total_duration}
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
