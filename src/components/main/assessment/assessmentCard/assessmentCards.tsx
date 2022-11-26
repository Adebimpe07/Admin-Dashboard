import React from "react";
import AssessmentCard from "../assessmentCard/assessmentCardStyle";
import { AssessmentCardData } from "../../../../layout/assessmentCardData";
import Header from "../categoryCreate/header";
import { Button } from "@mantine/core";
import { Add } from "iconsax-react";
import Link from "next/link";

const AssessmentCards = ({ AssessmentCardData }) => {
    return (
        <div className="h-screen flex-1 py-6 flex flex-col  bg-[#e5e5e5]">
            <Header />
            <main className="flex flex-col">
                <div className="items-center px-4 gap-1 py-4 flex justify-between">
                    <h3>Total Assessments (9)</h3>

                    <Link href="/assessments/assessment/create_assessment">
                        <Button
                            className="bg-[#38CB89] hover:bg-[#38CB89] w-[14rem] text-base"
                            leftIcon={<Add size="17" variant="Outline" />}
                            onClick={() => {}}>
                            Create Assessment
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-3 gap-4 m-4">
                    {AssessmentCardData.map(
                        (
                            {
                                name,
                                assessment_info,
                                total_duration,
                                questions,
                            },
                            index
                        ) => {
                            return (
                                <AssessmentCard
                                    key={index}
                                    questions={"00"}
                                    title={name}
                                    paragraph={assessment_info
                                        ?.split("")
                                        .map((item, idx) => idx < 60 && item)}
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
