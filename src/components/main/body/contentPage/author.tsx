import React, { useEffect, useState } from "react";
import AutorHeader from "./authorHeader";
import AuthorList from "./authorList";
import axios from "axios";
import CryptoJS from "crypto-js";
import AuthorHeader from "./authorHeader";

const Author = ({ authorData }) => {
    const [opened, setOpened] = useState(false);

    var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
    var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

    const decrypt = (element: any) => {
        return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
            CryptoJS.enc.Utf8
        )
            ;
    };

    return (
        <div className="overflow-auto bg-[#FFFFFF] mx-6 px-6 mb-4 h-full flex flex-col gap-11 pt-7">
            <AuthorHeader />
            <div className='grid grid-cols-4 gap-x-2 gap-y-4'>
                {authorData.map(({ first_name, last_name, profile_pics, twitter_link, facebook_link, instagram_link, bio, email }: any, idx: number) => (
                    <AuthorList
                        firstName={decrypt(first_name)}
                        lastName={decrypt(last_name)}
                        profile_pic={decrypt(profile_pics)}
                        key={idx}
                        twitter_link={decrypt(twitter_link)}
                        facebook_link={decrypt(facebook_link)}
                        instagram_link={decrypt(instagram_link)}
                        bio={decrypt(bio)}
                        email={decrypt(email)}
                        // url= {decrypt(url)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Author;
