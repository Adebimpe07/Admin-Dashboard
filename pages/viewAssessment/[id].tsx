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
                url: `http://localhost:8000/api/result/${id}`,
                headers: {
                    "Content-Type": "application/json",
                },
            };
            try {
                const request = await axios(config)
                setResult(request.data)
            } catch (error) {
                console.log("request_error=> ", error.response.data)
                return error.message
            }
        }
        getResult()

    }, [id])


    return <ViewResult result={result} />;
};

export default Result;