import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AuthorViewList from "../../../src/components/main/body/contentPage/authorViewList";
import AuthorSubheader from "../../../src/components/main/body/contentPage/authorSubheader";
import ContentHeader from "../../../src/components/main/body/contentPage/contentHeader";
import { albumData } from "../../../src/layout/albumData";

const ContentAuthor = dynamic(
    () => import("../../../src/components/main/body/contentPage/contentAuthor"),
    { ssr: false }
);


const author = () => {

    const router = useRouter()
    const [author, setAuthor] = useState([])

    const getauthor = (id) => {
        axios({
            baseURL: `https://atsbk.afexats.com/api/v1/author/${id}`,
            method: "get",
            headers: {
                "api-key": "7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
                "hash-key": "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
                "request-ts": "1669397556",
            }
        })
            .then((response) => {
                console.log(response.data)
                setAuthor(response.data)
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        if (router.query.authorID) {
            getauthor(router.query.authorID)
        }
    }, [router.query.authorID])
    return (
        <div className="flex-1 bg-mainBg flex flex-col overflow-auto  h-full">
            <ContentHeader />
            <AuthorSubheader />
            <AuthorViewList authors={author} />
        </div>
    );
};

export default author;