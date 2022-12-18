import { useRouter } from "next/router";
import { useState } from "react";
import ArrowLeft from "./assets/arrow-left.png";
import ArrowRight from "./assets/arrow-right.png";

const MockQuestionFooter = ({
    setQuestionNumber,
    questionNumber,
    totalQuestions,
}) => {
    const router = useRouter();
    const reQuestionNumber = () => {
        setQuestionNumber((prev) => prev - 1);
    };
    const inQuestionNumber = () => {
        setQuestionNumber((prev) => prev + 1);
    };

    return (
        <div className="flex justify-between items-center">
            {questionNumber > 0 ? (
                <button
                    className="rounded-[8px] flex text-[14px] px-[10px] py-[12px] font-medium items-center gap-[4px] bg-light-light-silver"
                    onClick={() => {
                        questionNumber > 0 && reQuestionNumber();
                    }}>
                    <img src={ArrowLeft.src} alt="" />
                    Back
                </button>
            ) : (
                <span></span>
            )}
            {totalQuestions > questionNumber + 1 ? (
                <button
                    className="rounded-[8px] flex text-[14px] px-[10px] py-[12px] font-medium items-center gap-[4px] bg-light-light-silver"
                    onClick={inQuestionNumber}>
                    Next
                    <img src={ArrowRight.src} alt="" />
                </button>
            ) : (
                <button
                    className="rounded-[8px] flex text-[14px] px-[10px] py-[12px] font-medium items-center gap-[4px] bg-light-light-silver"
                    onClick={() => {
                        router.push("/assessments/categories");
                    }}>
                    Back to assessment
                </button>
            )}
        </div>
    );
};

export default MockQuestionFooter;
