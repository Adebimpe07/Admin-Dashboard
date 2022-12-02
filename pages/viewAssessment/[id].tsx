import React, { useEffect, useState } from "react";
import ViewResult from "../../src/components/main/assessment/assessment/viewAssessment/viewResult";
import { useRouter } from "next/router"
import axios from "axios";

const Result = () => {
    const router = useRouter();
    const { id } = router.query
    const [result, setResult] = useState({})

    useEffect(() => {
        if (!id) {
            return;
        }
        console.log(id)
        const getResult = async () => {
            const config = {
                method: "get",
                url: `https://assessbk.afexats.com/api/result/${id}`,
                headers: {
                    "Content-Type": "application/json",
                    'api-key': '1F87LiFSIfulRCdxFWAPkXNoLuu8j-UkRs6QSYWm4sY',
                    'request-ts': '23445567',
                    'hash-key': '68fdd26d64f3374506ba0d2e30ed5e096cab6d4a1f4396c80713204609d3216e',
                },
            };
            try {
                const request = await axios(config)
                setResult(request.data)
            } catch (error) {
                console.log("request_error=> ", error?.response?.data)
                return error.message
            }
        }
        getResult()

    }, [id])


    return <ViewResult result={result} />;
};

export default Result;