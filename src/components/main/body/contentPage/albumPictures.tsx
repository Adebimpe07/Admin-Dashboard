import React from "react";

import AlbumHeader from "./albumHeader";

import AlbumPicturesHeader from "./albumPicturesHeader";

import AlbumPicvview from "./albumPicvview";

import ContentHeader from "./contentHeader";
function AlbumPictures() {
    return (
        <div>
            <ContentHeader />
            <AlbumPicturesHeader />
            <AlbumPicvview />
        </div>
    );
}



export default AlbumPictures;