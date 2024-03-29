import React, { useState } from "react";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Options from "../options";
import Header from "./header";
import { Button } from "@mantine/core";
import { useContext } from "react";
import FormContext from "../../../../context/store";
import { useEffect } from "react";
import CryptoJS, { SHA256 } from "crypto-js";
import axios from "axios";
import { useRouter } from "next/router";
import Success from "../../../success";

const Editor = dynamic(() => import("../editor"), { ssr: false });
const key = CryptoJS.enc.Base64.parse(
    "wjqy62fB+dwz2gyz4sMePe9u2RsMVIyuaA6wPgUeXjw="
);
const iv = CryptoJS.enc.Base64.parse("gNyBAsNdWQEwHvbAm8g5Jg==");

const createQuestions = () => {
    const {
        categoryID,
        questionsForm,
        onChange,
        questionType,
        questionCategory,
    } = useContext(FormContext);
    const router = useRouter();
    const [opened, setOpened] = useState(false);
    const [message, setMessage] = useState("");

    const addNewQuestion = () => {
        let requestTs = String(Date.now());
        axios({
            url: `${process.env.NEXT_PUBLIC_BASE_URL_2}/api/categories/${categoryID}/questions`,
            method: "POST",
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
                data: CryptoJS.AES.encrypt(
                    JSON.stringify({
                        ...questionsForm.values,
                        question_type: questionType,
                        question_category: questionCategory,
                    }),
                    key,
                    {
                        iv: iv,
                    }
                ).toString(),
            },
        })
            .then(({ data }) => {
                setMessage("Success");
                setOpened(true);
                setTimeout(() => {
                    setOpened(false);
                }, 1000);
                console.log(data);
                questionsForm.reset();
                onChange("");
            })
            .catch((e) => {
                console.log(e);
                setMessage("Failed!!!, Please try again");
                setOpened(true);
                setTimeout(() => {
                    setOpened(false);
                }, 1000);
            });
    };

    return (
        <div className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
            <Header />
            <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center px-4">
                    <div
                        onClick={() => router.back()}
                        className="flex cursor-pointer items-center gap-1 py-4">
                        <ArrowLeft2 size="17" color="#000" />
                        <h1>Back</h1>
                    </div>
                    <div className="self-end flex gap-3">
                        <Button
                            onClick={addNewQuestion}
                            className="hover:bg-white w-[10rem] text-base bg-white text-[#000]">
                            Add question
                        </Button>
                        <Link href="/assessments/categories/review_upload">
                            <Button className="bg-greenButton hover:bg-greenButton w-[10rem] text-base">
                                Finish
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="flex mx-[5rem] h-full my-4 p-6 gap-9 bg-white">
                    <div className="flex flex-col gap-6 flex-1">
                        <p>Question</p>
                        <Editor form={questionsForm} />
                    </div>
                    <Options />
                </div>
            </div>
            <Success opened={opened} message={message} />
        </div>
    );
};

export default createQuestions;
