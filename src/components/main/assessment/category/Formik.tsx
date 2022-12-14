import { Radio } from "@mantine/core";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Option1 from "./assets/option-1.png";
import Option2 from "./assets/option-2.png";
import Option3 from "./assets/option-3.png";
import Option4 from "./assets/option-4.png";
// import { usePersistStore } from "../../../store";
// import { useForm } from "@mantine/form";
// import { data } from "../../../layout/questionsData";
// import ThemeContext from "../../../context/ThemeContext";
import RichTextEditor from "@mantine/rte";
import { useRouter } from "next/router";

function Formik({ questionNumber, categoryQuestions }) {
    return (
        <form>
            {categoryQuestions?.map(({ question_type, choices, id }, idx) => {
                return question_type === "Multi-choice" &&
                    questionNumber === idx ? (
                    <Fragment key={idx}>
                        <Radio.Group
                            classNames={{
                                root: "w-full",
                            }}
                            orientation="vertical"
                            key={idx}>
                            {choices.map((choice, idx) => (
                                <div
                                    key={idx}
                                    className="flex gap-[20px] items-center py-[3px] px-[14px] border bg-[#fff] text-[black] border-solid bg-light-Lotion border-[#8F9198] rounded-[16px]">
                                    <img
                                        className="w-[40px] h-[40px]"
                                        src={
                                            idx === 0
                                                ? Option1.src
                                                : idx === 1
                                                ? Option2.src
                                                : idx === 2
                                                ? Option3.src
                                                : Option4.src
                                        }
                                        alt=""
                                    />
                                    <Radio
                                        classNames={{
                                            root: "w-full",
                                            body: "flex ",
                                            inner: "self-center",
                                            labelWrapper: "flex-1 ",
                                            label: "w-full font-medium text-[16px] text-black leading-[150%] flex cursor-pointer py-[16px]",
                                        }}
                                        // onClick={() => {}}
                                        labelPosition="left"
                                        value={choice.choice_text.toLocaleLowerCase()}
                                        label={choice.choice_text}
                                    />
                                </div>
                            ))}
                        </Radio.Group>
                    </Fragment>
                ) : (
                    questionNumber === idx && (
                        <Fragment key={idx}>
                            <RichTextEditor
                                classNames={{
                                    root: "h-full",
                                }}
                                controls={[
                                    ["bold", "italic", "underline"],
                                    ["unorderedList", "h1", "h2", "h3"],
                                    ["sup", "sub", "codeBlock"],
                                    ["alignLeft", "alignCenter", "alignRight"],
                                ]}
                            />
                        </Fragment>
                    )
                );
            })}
        </form>
    );
}

export default Formik;
