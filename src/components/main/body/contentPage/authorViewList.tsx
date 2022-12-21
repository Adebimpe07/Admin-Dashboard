import React, { useEffect } from "react";
import CryptoJS from "crypto-js";
import { ArrowLeft2 } from "iconsax-react";
import router, { useRouter } from "next/router";
import AuthorViewHeader from "./albumPictureviewHeader";


function AuthorViewList({ authors }) {
    const router = useRouter()

    var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
    var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
    return (
        <section className="px-6 flex flex-col flex-1 pb-3 gap-4 text-[#252735]">
            <article className="bg-white flex flex-col gap-3 p-3 flex-1">
                <button onClick={() => router.push('/content/author')} className="self-start flex items-center justify-center gap-2 text-[#252735] rounded-md p-3">
                    <ArrowLeft2
                        size="24"
                        color="#252735" />
                    back to the author
                </button>
                <div className="flex self-end pr-3">
                    <AuthorViewHeader />
                </div>
                <div className='grid grid-cols-5 object-cover bg-white p-3 flex-1 h-full w-full grid-flow-row gap-4'>
                    {/* {images.map((item) => (
                        <img
                            className='w-48 h-48'
                            src={CryptoJS.AES.decrypt(item.image, key, { iv: iv }).toString(CryptoJS.enc.Utf8)}
                        />
                    ))} */}
                </div>
            </article>
        </section>
    );
}
export default AuthorViewList;