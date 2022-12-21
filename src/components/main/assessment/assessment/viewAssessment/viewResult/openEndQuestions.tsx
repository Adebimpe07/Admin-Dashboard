import { Button, Modal, Textarea } from "@mantine/core";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Success from "@/src/components/success";
import CryptoJS, { SHA256 } from "crypto-js";

const openEndQuestions = ({
    open_ended,
    color,
    questions,
    result,
}: {
    color: any;
    open_ended: boolean;
    questions?: any;
    result?: Number;
}) => {
    const [marking, setMarking] = useState(false);

    const router = useRouter();

    const handleMarking = async (
        is_correct: Boolean,
        id: Number,
        cat_id: Number
    ) => {
        let requestTs = String(Date.now());
        const key = CryptoJS.enc.Base64.parse(
            "wjqy62fB+dwz2gyz4sMePe9u2RsMVIyuaA6wPgUeXjw="
        );
        const iv = CryptoJS.enc.Base64.parse("gNyBAsNdWQEwHvbAm8g5Jg==");
        const config = {
            method: "post",
            url: process.env.NEXT_PUBLIC_BASE_URL_2 + `/api/result/process_opa`,
            headers: {
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
                        opa_pk: id,
                        is_correct: is_correct,
                        result_id: result,
                        category: cat_id,
                    }),
                    key,
                    { iv: iv }
                ).toString(),
            },
        };
        try {
            const request = await axios(config);
            console.log("marked=>", request.data);
            router.reload();
            return;
        } catch (error) {
            console.log("request_error=> ", error?.response?.data);
            return error.message;
        }
    };

    // useEffect(handleMarking, []);

    const [opened, setOpened] = useState(false);
    const [alert, setAlert] = useState(false);
    return (
        <div
            onClick={() => {
                if (open_ended) {
                    setOpened(true);
                } else {
                    setAlert(true);
                    setTimeout(() => {
                        setAlert(false);
                    }, 1000);
                }
            }}
            className={` ${color}  font-semibold `}>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                fullScreen
                className=" ">
                <div className="flex flex-col gap-8">
                    {questions?.map((element: any, index: any) => {
                        return (
                            <div
                                key={index}
                                className="items-center gap-4 w-full flex flex-col">
                                <div className="flex w-full flex-col  gap-2">
                                    {"."}
                                    <div className="text-gray-500 font-semibold text-left ">
                                        Status:{" "}
                                        <span className="text-gray-700 font-base capitalize p-2">
                                            {element.is_marked &&
                                            element.is_correct
                                                ? "marked as correct"
                                                : element.is_marked &&
                                                  !element.is_correct
                                                ? "marked as incorrect"
                                                : "unmarked"}
                                        </span>
                                    </div>
                                    <div className="text-gray-500 font-semibold">
                                        Question:{" "}
                                        <span className="text-gray-700 font-base capitalize p-2">
                                            {element.question.question_text}
                                        </span>
                                    </div>
                                    <Textarea
                                        value={element.answer_text}
                                        className="w-full"
                                        variant="filled"
                                    />
                                </div>
                                <div className="flex gap-2 flex-row">
                                    <Button
                                        onClick={async () =>
                                            await handleMarking(
                                                true,
                                                element.id,
                                                element.category
                                            )
                                        }
                                        className="bg-greenButton hover:bg-greenButton">
                                        Mark as correct
                                    </Button>
                                    <Button
                                        onClick={async () =>
                                            await handleMarking(
                                                false,
                                                element.id,
                                                element.category
                                            )
                                        }
                                        className="bg-[#E64D45] hover:bg-[#E64D45]">
                                        Mark as incorrect
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* <div className="flex">
          <Button

            className="bg-g[#F0F0F1] hover:bg-[#F0F0F1] text-[#E1261C]">
            Cancel
          </Button>
          <Button className="bg-red hover:bg-red">Save</Button>
        </div> */}
            </Modal>
            view questions
            <Success
                message="No open ended questions in this category"
                opened={alert}
            />
        </div>
    );
};

export default openEndQuestions;
