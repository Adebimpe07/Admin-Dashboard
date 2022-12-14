import React, { useEffect, useState } from "react";
import AlbumHeader from "./albumHeader";
import AlbumList from "./albumList";
import axios from "axios";
import CryptoJS from "crypto-js";

const Album = () => {
  const [opened, setOpened] = useState(false);
  const [albumData, setALbumData] = useState([])

  var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
  var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

  const setAlbum = () => {
    axios({
      baseURL: "https://atsbk.afexats.com/api/v1/album",
      method: "get",
      headers: {
        // Authorization: `Bearer ${token.access}`
        "api-key": "7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
        "hash-key": "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
        "request-ts": "1669397556",
      }
    })
      .then((response) => setALbumData(response.data.data.results))
      .catch((e) => console.log(e))

  }

  useEffect(() => {
    setAlbum()
  }, [])

  return (
    <div className="overflow-auto bg-[#FFFFFF] mx-6 px-6 mb-4 h-full flex flex-col gap-11 pt-7">
      <AlbumHeader albumData={albumData} />
      <div className='grid grid-cols-4 gap-x-2 gap-y-4'>
        {albumData.map(({ name, description, url }: any, idx: number) => (
          <AlbumList
            url={CryptoJS.AES.decrypt(url, key, { iv: iv }).toString(CryptoJS.enc.Utf8)}
            name={CryptoJS.AES.decrypt(name, key, { iv: iv }).toString(CryptoJS.enc.Utf8)}
            description={CryptoJS.AES.decrypt(description, key, { iv: iv }).toString(CryptoJS.enc.Utf8)}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Album;
