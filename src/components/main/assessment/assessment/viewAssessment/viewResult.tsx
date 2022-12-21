import React from "react";
import ApplicantDetails from "./viewResult/applicantDetails";
import Header from "../../categoryCreate/header";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { Button } from "@mantine/core";
import AssessmentInformation from "./viewResult/assessmentInformation";
import Feedback from "./viewResult/feedback";
import CategoryInformation from "./viewResult/categoryInformation";
import Images from "./viewResult/resultimages";

const viewResult = ({ result }) => {
    return (
        <div className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
            <Header name="Candidate Result" />
            <div className="flex-1 flex flex-col overflow-auto">
                <div className="flex justify-between items-center p-4">
                    <div className="flex items-center gap-1 ">
                        <ArrowLeft2 size="17" color="#000" />
                        <Link href="/viewAssessment">
                            <h1 className="cursor-pointer">Back</h1>
                        </Link>
                    </div>
                </div>

                <div className="flex w-full relative h-screen">
                    <div className=" flex flex-col w-1/2 mr-4 ">
                        <ApplicantDetails result={result} />
                        <AssessmentInformation result={result} />
                        <Feedback />
                        {/* <Images /> */}
                    </div>
                    <div className="w-1/2 ">
                        <CategoryInformation result={result} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default viewResult;
