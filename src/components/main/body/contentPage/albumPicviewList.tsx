import React from "react";
import AlbumPic from "../contentPage/assets/albumPic.png";
function AlbumPicviewList() {
    return (
        <div>
            <div className='grid grid-cols-5 grid-flow-row gap-4'>
                <img
                    className='w-48 h-48'
                    src={AlbumPic.src}
                />
                <img
                    className='w-48 h-48'
                    src={AlbumPic.src}
                />
                <img
                    className='w-48 h-48'
                    src={AlbumPic.src}
                />
                <img
                    className='w-48 h-48'
                    src={AlbumPic.src}
                />
                <img
                    className='w-48 h-48'
                    src={AlbumPic.src}
                />
                <img
                    className='w-48 h-48'
                    src={AlbumPic.src}
                />
                <img
                    className='w-48 h-48'
                    src={AlbumPic.src}
                />
            </div>
        </div>
    );
}
export default AlbumPicviewList;