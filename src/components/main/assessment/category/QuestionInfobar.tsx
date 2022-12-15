import { Modal, Select } from "@mantine/core";
import { Add } from "iconsax-react";
import { Router, useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import FormContext from "../../../../context/store";
import { SelectQuestionData } from "../../../../layout/assessmentData";
import QuestionTypeCards from "./questionTypeCards";

const AddQuestionModal = ({ opened, setOpened }) => {
    const { questionsForm, categoryID, essayForm, setQuestionType } =
        useContext(FormContext);
    const router = useRouter();

    useEffect(() => {
        essayForm.values.question_category =
            questionsForm.values.question_category;
    }, [questionsForm.values.question_category]);

    return (
        <Modal opened={opened} onClose={() => setOpened(false)}>
            <div className="flex flex-col gap-[20px]">
                <Select
                    {...questionsForm.getInputProps("question_category")}
                    label="Select Question Category"
                    data={[
                        { label: "Real", value: "Real" },
                        { label: "Dummy", value: "Dummy" },
                    ]}
                />
                <div className="grid grid-cols-4 gap-2 items-center">
                    {SelectQuestionData.map(
                        ({ icon, title, href, pointerEvent }, index) => {
                            return (
                                <div
                                    onClick={() => {
                                        if (title === "Essay") {
                                            setQuestionType("Open-ended");
                                            essayForm.values.question_type =
                                                "Open-ended";
                                        } else if (
                                            title === "Multiple Choice"
                                        ) {
                                            setQuestionType("Multi-choice");
                                            questionsForm.values.question_type =
                                                "Multi-choice";
                                        }
                                        if (
                                            questionsForm.values
                                                .question_category === ""
                                        ) {
                                            alert(
                                                "You need to select a category to continue"
                                            );
                                        } else {
                                            router.push(href);
                                            console.log(essayForm.values);
                                        }
                                    }}
                                    key={index}
                                    className={
                                        pointerEvent
                                            ? `pointer-events-none`
                                            : "cursor-pointer"
                                    }>
                                    <div className="bg-[#38CB891A] rounded-lg p-2 flex flex-col items-center">
                                        <span>{icon}</span>
                                        <span className="text-[#4A4C58] whitespace-nowrap">
                                            {title}
                                        </span>
                                    </div>
                                </div>
                            );
                        }
                    )}
                </div>
            </div>
        </Modal>
    );
};

const MockQuestionInfoBar = ({ title }) => {
    const [opened, setOpened] = useState(false);

    return (
        <div className=" px-[80px] py-[10px] bg-[#352929] flex justify-between items-center">
            <div className="flex gap-[8px] items-center">
                <p className="text-[18px] text-[white] font-medium leading-[140%]">
                    Category
                </p>
                <hr className="h-[25px] border-white opacity-50 border border-solid w-[1px]" />
                <p className="text-[#fff] font-light text-[14px]">{title}</p>
            </div>
            <div className="flex gap-[10px]">
                <div className="bg-[#fff] cursor-pointer flex items-center gap-[4px] px-[10px] py-[5px] rounded-lg">
                    <p className="text-[16px] leading-[33.6px] font-medium">
                        <span>Edit</span>
                    </p>
                </div>
                <div
                    onClick={() => setOpened(true)}
                    className="bg-[#38CB89] cursor-pointer text-[white] flex items-center gap-[4px] px-[10px] py-[5px] rounded-lg">
                    <Add size="25" variant="Outline" />
                    <p className="text-[16px] leading-[33.6px] font-medium">
                        <span>Add Question</span>
                    </p>
                </div>
            </div>
            <AddQuestionModal opened={opened} setOpened={setOpened} />
        </div>
    );
};

export default MockQuestionInfoBar;
