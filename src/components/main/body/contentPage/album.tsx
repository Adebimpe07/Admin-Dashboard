import React from "react";
import AlbumHeader from "./albumHeader";
import { albumData } from "../../../../layout/albumData";
import AlbumList from "./albumList";
import AlbumPictures from "./albumPictures";

const Album = () => {
  return (
    <div className="overflow-auto bg-[#FFFFFF] mx-6 px-6 mb-4 h-full flex flex-col gap-11 pt-7">
      <AlbumHeader />
      {/* <div className="grid grid-cols-4 gap-x-2 gap-y-4">
        {albumData.map((item, idx) => (
          <AlbumList
            title={item.title}
            details={item.details}
            date={item.date}
            key={idx}
          />
        ))}
      </div> */}
      <div className='grid grid-cols-4 gap-x-2 gap-y-4'>
        {albumData.map(({ name, description }: any, idx: number) => (
          <AlbumList
            name={name}
            description={description}
            key={idx}
          />

        ))}
      </div>
      <AlbumPictures />
    </div>
  );
};

export default Album;
