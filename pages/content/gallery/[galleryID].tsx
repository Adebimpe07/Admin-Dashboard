import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Album from "../../../src/components/main/body/contentPage/album";
import AlbumPicviewList from "../../../src/components/main/body/contentPage/albumPicviewList";
import ContentHeader from "../../../src/components/main/body/contentPage/contentHeader";
import GallerySubheader from "../../../src/components/main/body/contentPage/gallerySubheader";
import { albumData } from "../../../src/layout/albumData";

const ContentGallery = dynamic(
    () => import("../../../src/components/main/body/contentPage/contentGallery"),
    { ssr: false }
);


const gallery = () => {

    const router = useRouter()
    const [images, setImages] = useState([])

    const getphotos = (id) => {
        axios({
            baseURL: `https://atsbk.afexats.com/api/v1/album/${id}`,
            method: "get",
            headers: {
                "api-key": "7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
                "hash-key": "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
                "request-ts": "1669397556",
            }
        })
            .then((response) => {
                console.log(response.data.data.active_images)
                setImages(response.data.data.active_images)
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        if (router.query.galleryID) {
            getphotos(router.query.galleryID)
        }
    }, [router.query.galleryID])
    return (
        <div className="flex-1 bg-mainBg flex flex-col overflow-auto  h-full">
            <ContentHeader />
            <GallerySubheader />
            <AlbumPicviewList images={images} />
        </div>
    );
};

export default gallery;
