import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useContext } from "react";
import FormContext from "../../../../context/store";
import { SelectQuestionData } from "../../../../layout/assessmentData";
import axios from "axios";
import CryptoJS, { SHA256 } from "crypto-js";
import Loading from "../../../loading";

const QuestionTypeCards = () => {
    const router = useRouter();
    const {
        questionsForm,
        setCategoryID,
        setQuestionType,
        essayForm,
        questionType,
        categoryForm,
    } = useContext(FormContext);
    const [loading, setLoading] = useState(false);

    const key = CryptoJS.enc.Base64.parse(
        "wjqy62fB+dwz2gyz4sMePe9u2RsMVIyuaA6wPgUeXjw="
    );
    const iv = CryptoJS.enc.Base64.parse("gNyBAsNdWQEwHvbAm8g5Jg==");

    const handleSubmit = (title, href) => {
        var postBody = categoryForm.values;

        let requestTs = String(Date.now());
        setLoading(true);
        let config = {
            method: "post",
            url: `${process.env.NEXT_PUBLIC_BASE_URL_2}/api/categories/create-list-category`,
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.NEXT_PUBLIC_API_KEY_2,
                "request-ts": requestTs,
                "hash-key": SHA256(
                    process.env.NEXT_PUBLIC_API_KEY_2 +
                        process.env.NEXT_PUBLIC_SECRET_KEY_2 +
                        requestTs
                ).toString(CryptoJS.enc.Hex),
            },
            data: {
                data: CryptoJS.AES.encrypt(JSON.stringify(postBody), key, {
                    iv: iv,
                }).toString(),
            },
        };

        axios(config)
            .then(function (response) {
                let decrypted_data = JSON.parse(
                    CryptoJS.AES.decrypt(response.data.data, key, {
                        iv: iv,
                    }).toString(CryptoJS.enc.Utf8)
                );

                setCategoryID(decrypted_data.id);
                if (title === "Essay") {
                    setQuestionType("Open-ended");
                    essayForm.values.question_type = "Open-ended";
                    // TODO: ADD QUESTION CATEGORY DROPDOWN
                    // TODO: ADD QUESTION CATEGORY DROPDOWN
                } else if (title === "Multiple Choice") {
                    setQuestionType("Multi-choice");
                    questionsForm.values.question_type = "Multi-choice";
                }
                setLoading(false);
                router.push(href);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });

        // if (title === "Multiple Response") questionsForm.values.question_type = 'Multi-response'
    };

    return (
        <div className="grid grid-cols-4 gap-2 items-center">
            {SelectQuestionData.map(
                ({ icon, title, href, pointerEvent }, index) => {
                    return (
                        <div
                            key={index}
                            className={
                                pointerEvent
                                    ? `pointer-events-none`
                                    : "cursor-pointer"
                            }>
                            <div
                                onClick={() => handleSubmit(title, href)}
                                className="bg-[#38CB891A] rounded-lg p-2 flex flex-col items-center">
                                <span>{icon}</span>
                                <span className="text-[#4A4C58] whitespace-nowrap">
                                    {title}
                                </span>
                            </div>
                        </div>
                    );
                }
            )}
            <Loading loading={loading} />
        </div>
    );
};

export default QuestionTypeCards;
