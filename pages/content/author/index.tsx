import axios from "axios";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Author from "../../../src/components/main/body/contentPage/author";
import AuthorSubheader from "../../../src/components/main/body/contentPage/authorSubheader";
import ContentHeader from "../../../src/components/main/body/contentPage/contentHeader";
// import { authorData } from "../../../src/layout/authorData";

const ContentAuthor = dynamic(
    () => import("../../../src/components/main/body/contentPage/contentAuthor"),
    { ssr: false }
);

const author = () => {
    const[authorData, setAuthorData] = useState([])

        const setAuthor = () => {
        axios({
            baseURL: "https://atsbk.afexats.com/api/v1/author",
            method: "get",
            headers: {
                // Authorization: `Bearer ${token.access}`
                "api-key": "7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
                "hash-key": "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
                "request-ts": "1669397556",
            }
        })
            .then((response) => setAuthorData(response.data.data.results))
            .catch((e) => console.log(e))

    }

    useEffect(() => {
        setAuthor()
    }, [])

    return (
        <div className="flex-1 bg-mainBg flex flex-col overflow-auto  h-full">
            <ContentHeader />
            <AuthorSubheader />
            {authorData.length > 0 ? <Author /> : <ContentAuthor />}
        </div>
    );
};

export default author;
