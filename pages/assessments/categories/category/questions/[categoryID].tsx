import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MockQuestionFooter from "../../../../../src/components/main/assessment/category/QuestionFooter";
import MockQuestionHeader from "../../../../../src/components/main/assessment/category/QuestionHeader";
import MockQuestionInfoBar from "../../../../../src/components/main/assessment/category/QuestionInfobar";
import QuestionNumbers from "../../../../../src/components/main/assessment/category/QuestionNumbers";
import axios from "axios";
import CryptoJS, { SHA256 } from "crypto-js";

const MockTestQuestions = dynamic(
    () =>
        import(
            "../../../../../src/components/main/assessment/category/TestQuestions"
        ),
    { ssr: false }
);

const index = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const key = CryptoJS.enc.Base64.parse(
        "wjqy62fB+dwz2gyz4sMePe9u2RsMVIyuaA6wPgUeXjw="
    );
    const iv = CryptoJS.enc.Base64.parse("gNyBAsNdWQEwHvbAm8g5Jg==");
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [categoryQuestions, setCategoryQuestions] = useState([]);

    useEffect(() => {
        console.log(router.query.title);
        console.log(router.query.categoryID);
        if (router.query.categoryID) {
            let requestTs = String(Date.now());
            setLoading(true);
            let config = {
                url:
                    process.env.NEXT_PUBLIC_BASE_URL_2 +
                    `/api/categories/${router.query.categoryID}/questionslist`,
                headers: {
                    "api-key": process.env.NEXT_PUBLIC_API_KEY_2,
                    "request-ts": requestTs,
                    "hash-key": SHA256(
                        process.env.NEXT_PUBLIC_API_KEY_2 +
                            process.env.NEXT_PUBLIC_SECRET_KEY_2 +
                            requestTs
                    ).toString(CryptoJS.enc.Hex),
                },
            };
            axios(config)
                .then((response) => {
                    let decrypted_data = JSON.parse(
                        CryptoJS.AES.decrypt(response.data.data, key, {
                            iv: iv,
                        }).toString(CryptoJS.enc.Utf8)
                    );
                    console.log(decrypted_data.results);
                    setCategoryQuestions(decrypted_data.results);
                    setTotalQuestions(decrypted_data.results.length);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [router.query.categoryID]);

    return (
        <div className="grid bg-[#F5F5F6] flex-1 grid-rows-[auto_auto_1fr] h-full">
            <MockQuestionHeader />
            <MockQuestionInfoBar title={router.query.title} />
            <div className="grid grid-rows-[auto_1fr_auto] gap-[15px] bg-[#F5F5F6] px-[80px] py-[15px]">
                <QuestionNumbers
                    setQuestionNumber={setQuestionNumber}
                    categoryQuestions={categoryQuestions}
                />
                <MockTestQuestions
                    questionNumber={questionNumber}
                    categoryQuestions={categoryQuestions}
                />
                <MockQuestionFooter
                    totalQuestions={totalQuestions}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                />
            </div>
        </div>
    );
};

export default index;
