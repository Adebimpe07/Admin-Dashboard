import React, { useEffect, useState } from "react";
import AutorHeader from "./authorHeader";
import AuthorList from "./authorList";
import axios from "axios";
import CryptoJS from "crypto-js";
import AuthorHeader from "./authorHeader";
import { authorData } from "@/src/layout/authorData";

const Author = () => {
  const [opened, setOpened] = useState(false);
  const [authorData, setAuthorData] = useState([]);

  var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
  var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

  const decrypt = (element: any) => {
    return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
      CryptoJS.enc.Utf8
    );
  };

  const setAuthor = () => {
    axios({
      baseURL: "https://atsbk.afexats.com/api/v1/author",
      method: "get",
      headers: {
        // Authorization: `Bearer ${token.access}`
        "api-key":
          "7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
        "hash-key":
          "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
        "request-ts": "1669397556",
      },
    })
      .then((response) => setAuthorData(response.data.data.results))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setAuthor();
  }, []);

  return (
    <div className="overflow-auto bg-[#FFFFFF] mx-6 px-6 mb-4 h-full flex flex-col gap-11 pt-7">
      <AuthorHeader authorData={authorData} />
      <div className="grid grid-cols-4 gap-x-2 gap-y-4">
        {authorData.map(
          (
            {
              first_name,
              last_name,
              profile_pics,
              twitter_link,
              facebook_link,
              instagram_link,
              bio,
              email,
            }: any,
            idx: number
          ) => (
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
          )
        )}
      </div>
    </div>
  );
};

export default Author;
