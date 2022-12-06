import React from "react";
import AlbumHeader from "./albumHeader";
import AlbumPicturesHeader from "./albumPicturesHeader";
import AlbumPicvview from "./albumPicvview";
function AlbumPictures({ setOpened }) {
    return (
        <div>
            <AlbumPicturesHeader setOpenedPics={setOpened} />
            <AlbumPicvview />
        </div>
    );
}



export default AlbumPictures;