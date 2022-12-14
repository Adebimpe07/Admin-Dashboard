import React, { useEffect } from "react";
import CryptoJS from "crypto-js";
import { ArrowLeft2 } from "iconsax-react";
import router, { useRouter } from "next/router";


function AlbumPicviewList({ images }) {
    const router = useRouter()

    var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
    var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
    return (
        <div className="px-6 flex flex-col gap-4">
            <button onClick={() => router.push('/content/gallery')} className="self-start flex items-center justify-center gap-2 text-white bg-[#38cb89] rounded-md p-3">
                <ArrowLeft2
                    size="24"
                    color="#FFF"
                />
                Go back to the album
            </button>
            <div className='grid grid-cols-5 object-cover grid-flow-row gap-4'>
                {images.map((item) => (

                    <img
                        className='w-48 h-48 object-cover'
                        src={CryptoJS.AES.decrypt(item.image, key, { iv: iv }).toString(CryptoJS.enc.Utf8)}
                    />
                ))}
            </div>
        </div>
    );
}
export default AlbumPicviewList;