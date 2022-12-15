import React, { useState } from "react";
import AlbumHeader from "./albumHeader";
import { albumData } from "../../../../layout/albumData";
import AlbumList from "./albumList";
import AlbumPictures from "./albumPictures";

const Album = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="overflow-auto bg-[#FFFFFF] mx-6 px-6 mb-4 h-full flex flex-col gap-11 pt-7">
      <AlbumHeader />
      {!opened ?
        <div className='grid grid-cols-4 gap-x-2 gap-y-4'>
          {albumData.map(({ name, description }: any, idx: number) => (
            <button onClick={() => setOpened(true)}>
              <AlbumList
                name={name}
                description={description}
                key={idx}
              />

            </button>
          ))}
        </div>
        :
        <AlbumPictures setOpened={setOpened} />
      }
    </div>
  );
};

export default Album;
