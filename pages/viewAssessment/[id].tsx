import React, { useEffect, useState } from "react";
import ViewResult from "../../src/components/main/assessment/assessment/viewAssessment/viewResult";
import { useRouter } from "next/router";
import axios from "axios";
import CryptoJS, { SHA256 } from "crypto-js";
import Loading from "@/src/components/loading";

const Result = () => {
    const router = useRouter();
    const { id } = router.query;
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);
    const key = CryptoJS.enc.Base64.parse(
        "wjqy62fB+dwz2gyz4sMePe9u2RsMVIyuaA6wPgUeXjw="
    );
    const iv = CryptoJS.enc.Base64.parse("gNyBAsNdWQEwHvbAm8g5Jg==");

    useEffect(() => {
        setLoading(true);
        if (!id) {
            return;
        }
        console.log(id);
        const getResult = async () => {
            let requestTs = String(Date.now());
            const config = {
                method: "get",
                url: process.env.NEXT_PUBLIC_BASE_URL_2 + `/api/result/${id}`,
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
            try {
                const request = await axios(config);
                let decrypted_data = JSON.parse(
                    CryptoJS.AES.decrypt(request.data.data, key, {
                        iv: iv,
                    }).toString(CryptoJS.enc.Utf8)
                );
                setResult({ data: decrypted_data });
                setLoading(false);
            } catch (error) {
                console.log("request_error=> ", error?.response?.data);
                setLoading(false);
                return error.message;
            }
        };
        getResult();
    }, [id]);

    return (
        <>
            <ViewResult result={result} />;
            <Loading loading={loading} />
        </>
    );
};

export default Result;
