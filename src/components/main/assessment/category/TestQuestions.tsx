import { useState } from "react";
import Formik from "./Formik";

const MockTestQuestions = ({ categoryQuestions, questionNumber }) => {
    return (
        <div className="grid grid-cols-[1fr_auto_1fr] flex-1 px-10 py-5 bg-[#fff] gap-[50px]">
            <div className="flex flex-col gap-[15px]">
                {categoryQuestions?.map(
                    ({ question_text }, idx) =>
                        questionNumber === idx && (
                            <div
                                key={idx}
                                className="text-light-black dangerously-set-black"
                                dangerouslySetInnerHTML={{
                                    __html: question_text,
                                }}></div>
                        )
                )}
            </div>
            <hr className="h-full border-[#C4C0C0] opacity-50 border w-[1px] border-solid" />
            <Formik
                categoryQuestions={categoryQuestions}
                questionNumber={questionNumber}
            />
        </div>
    );
};

export default MockTestQuestions;
