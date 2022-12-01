import React, { useEffect, useContext, useState } from "react";
import { usePersistStore } from "../../../store";
import AfexLogo from "./assets/Afex_logo.png";
import ThemeContext from "../../../context/ThemeContext";
import { clsx } from "@mantine/core";
import Formik from "../Formik";
import { useRouter } from "next/router";
import axios from "axios";
import { useForm } from "@mantine/form";
import ArrowLeft from "./assets/arrow-left.png";
import ArrowRight from "./assets/arrow-right.png";

const questions = () => {
    const { totalCategories, allCategories } = useContext(ThemeContext);
    const sectionNumber = usePersistStore((state) => state.sectionNumber);
    const { form, categoryQuestions } = useContext(ThemeContext);
    const setQuestionNumber = usePersistStore(
        (state) => state.setQuestionNumber
    );
    const questionNumber = usePersistStore((state) => state.questionNumber);
    const router = useRouter();

    const {
        form,
        totalQuestions,
        seconds,
        assessmentID,
        currentCategoryID,
        minutes,
        totalCategories,
        restart,
        setCategoryQuestions,
        setTotalQuestions,
        candidateId,
        device,
        detected,
        location,
        session_id,
        setSession_id,
    } = useContext(ThemeContext);

    const questionNumber = usePersistStore((state) => state.questionNumber);
    const setQuestionNumber = usePersistStore(
        (state) => state.setQuestionNumber
    );
    const sectionNumber = usePersistStore((state) => state.sectionNumber);
    const inQuestionNumber = usePersistStore((state) => state.inQuestionNumber);
    const reQuestionNumber = usePersistStore((state) => state.reQuestionNumber);
    const inSectionNumber = usePersistStore((state) => state.inSectionNumber);
    const resetSectionNumber = usePersistStore(
        (state) => state.resetSectionNumber
    );

    const fetchNextCategoryQuestion = () => {
        // console.log(currentCategoryID);
        let data = JSON.stringify({
            candidate_id: candidateId,
            device: device,
            browser: detected,
            location: location,
            enable_webcam: true,
            full_screen_active: true,
        });
        let config = {
            method: "post",
            url: `https://assessbk.afexats.com/api/assessment/${assessmentID}/categories/${currentCategoryID}/questions`,
            headers: {
                "Content-Type": "application/json",
            },
            data: data,
        };

        axios(config)
            .then(function (response) {
                // console.log(response.data);
                if (response.data.data.answers) {
                    let choiceQuestionMap = Object.fromEntries(
                        response.data.data.answers.map(
                            ({ question, choice }) => [question, choice]
                        )
                    );
                    let questions = response.data.data.questions.map(
                        (item) => ({
                            ...item,
                            choice: item.choices.find(
                                ({ id }) => id === choiceQuestionMap[item.id]
                            ),
                        })
                    );
                    setCategoryQuestions(questions);
                    setTotalQuestions(questions.length - 1);
                    console.log(response.data.data.session_id);
                    setSession_id(response.data.data.session_id);
                    form.values.session = response.data.data.session_id;
                } else {
                    setCategoryQuestions(response.data.data.questions);
                    setTotalQuestions(response.data.data.questions.length - 1);
                    console.log(response.data.data.session_id);
                    setSession_id(response.data.data.session_id);
                    form.values.session = response.data.data.session_id;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const [fetch, setFetch] = useState(false);

    useEffect(() => {
        if (fetch) {
            fetchNextCategoryQuestion();
        }
    }, [fetch]);

    useEffect(() => {
        if (+seconds === 0 && +minutes === 0) {
            proceedNextSection();
        }
    }, [seconds, minutes]);

    const proceedNextSection = () => {
        if (document.fullscreenElement) {
            inSectionNumber();
            axios({
                method: "post",
                url: `https://assessbk.afexats.com/api/result/save_answer`,
                headers: {
                    "Content-Type": "application/json",
                },
                data: form.values,
            }).then(async (res) => {
                // console.log(res.data);
                setQuestionNumber(0);
                try {
                    const response = await axios({
                        method: "post",
                        url: `https://assessbk.afexats.com/api/result/save_session`,
                        headers: {
                            "Content-Type": "application/json",
                        },
                        data: JSON.stringify({ session_id: session_id }),
                    });
                    const data = await response.data;
                    setFetch(true);
                } catch (error) {
                    console.error(error);
                }
            });
        } else alert("you have exited full screen");
        const time = new Date();
        time.setSeconds(time.getSeconds() + 600);
        restart(time);
    };
    const handleNextQuestion = () => {
        if (document.fullscreenElement) {
            axios({
                method: "post",
                url: `https://assessbk.afexats.com/api/result/save_answer`,
                headers: {
                    "Content-Type": "application/json",
                },
                data: form.values,
            })
                .then((res) => {
                    // console.log(res.data);
                    totalQuestions > questionNumber && inQuestionNumber();
                })
                .catch(() => {
                    alert("Please choose an option");
                });
        } else alert("you have exited full screen");
    };

    // const handleClick = () => {
    //     // console.log(form.values);
    //     console.log(questionNumber, totalQuestions);
    //     if (totalCategories - 1 > sectionNumber) {
    //         setQuestionNumber(0);
    //         proceedNextSection();
    //     } else {
    //         router.push("/feedback");
    //         sessionStorage.removeItem("detected");
    //         sessionStorage.removeItem("all_categories");
    //         sessionStorage.removeItem("assessment_id");
    //         sessionStorage.removeItem("current_category_id");
    //         sessionStorage.removeItem("total_categories");
    //         localStorage.removeItem("undefined");
    //         setQuestionNumber(0);
    //     }
    // };

    const submitTest = async () => {
        const response = await axios({
            method: "post",
            url: `https://assessbk.afexats.com/api/result/save_session`,
            headers: {
                "Content-Type": "application/json",
            },
            data: JSON.stringify({ session_id: session_id }),
        });
        const data = await response.data;
        console.log(data);
        router.push("/feedback");
        sessionStorage.removeItem("detected");
        sessionStorage.removeItem("all_categories");
        sessionStorage.removeItem("assessment_id");
        sessionStorage.removeItem("current_category_id");
        sessionStorage.removeItem("total_categories");
        localStorage.removeItem("undefined");
        setQuestionNumber(0);
    };

    return (
        <div>
            <div className="bg-white px-[80px">
                <img src={AfexLogo.src} alt="" />
            </div>
            <div className="px-[80px] py-[10px] bg-dark-black-coffee flex justify-between items-center">
                <div className="flex gap-[8px] items-center">
                    <p className="text-[18px] text-white font-medium leading[140%]">
                        Section {sectionNumber + 1}/{totalCategories}
                    </p>
                    <hr className="h-[25px] border-white opacity-50 border border-solid w-[1px]" />
                    <p className="text-white font-light text-[14px]">
                        {allCategories?.map((item: any, id: number) =>
                            id === sectionNumber ? item.name : null
                        )}
                    </p>
                </div>
                <div className="dark: bg-[blackcoffee] grid grid-rows-[auto_1fr_auto] gap-[15px] bg-[ghostwhite] px-[80px] py-[15px]">
                    <ul className="flex gap-[10px]">
                        {categoryQuestions?.map((item, idx) => (
                            <li
                                onClick={() => setQuestionNumber(idx)}
                                Key={idx}
                                className={
                                    !item.choice
                                        ? "border border-solid border-light-isabelline dark:border-dark-quartz bg-light-isabelline cursor-pointer text-light-black dark:text-light-white dark:bg-dark-quartz px-3 py-1 rounded-xl"
                                        : "border bg-[white] cursor-pointer text-light-black dark:text-light-white dark:bg-dark-charleston-green border-solid px-3 py-1 rounded-xl border-dark-medium-sea-green"
                                }>
                                {idx + 1}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr] flex-1 dark:bg-light-charleston-green bg-light-white gap-[10px]">
                    <div className="flex flex-col gap-[15px]">
                        {categoryQuestions?.map(
                            ({ question_text }, idx) =>
                                questionNumber === idx && (
                                    <div
                                        key={idx}
                                        className="dark:text-light-white dangerously-set"
                                        dangerouslySetInnerHTML={{
                                            __html: question_text,
                                        }}></div>
                                )
                        )}
                    </div>
                    <hr className="h-full border-dark-argent opacity-50 border w-[1px] border-solid" />
                    <Formik />
                </div>
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
                    {totalQuestions > questionNumber ? (
                        <button
                            className="rounded-[8px] flex text-[14px] px-[10px] py-[12px] font-medium items-center gap-[4px] bg-light-light-silver"
                            onClick={handleNextQuestion}>
                            Next
                            <img src={ArrowRight.src} alt="" />
                        </button>
                    ) : totalCategories - 1 > sectionNumber ? (
                        <button
                            className="rounded-[8px] flex text-[14px] px-[10px] py-[12px] font-medium items-center gap-[4px] bg-light-light-silver"
                            onClick={proceedNextSection}>
                            Proceed to next section
                        </button>
                    ) : (
                        <button
                            className="rounded-[8px] flex text-[14px] px-[10px] py-[12px] font-medium items-center gap-[4px] bg-light-light-silver"
                            onClick={submitTest}>
                            Submit test
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default questions;
