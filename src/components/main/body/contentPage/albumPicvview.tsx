import React from "react";
import AlbumPicviewList from "./albumPicviewList";
function AlbumPicvview() {
    return (
        <div className='overflow-auto bg-[#FFFFFF] mx-6 px-6 mb-4 h-full flex flex-col gap-11 pt-7'>
            <AlbumPicviewList images={undefined} />
        </div>
    );
}
export default AlbumPicvview;