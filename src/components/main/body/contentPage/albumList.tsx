// import React from 'react'
// import Group from "../../../../assets/Group 2.png";


// type Props = {
//     title: string;
//     details:string;
//     date: string;
//   };

// const AlbumList = ({ title, details, date }: Props) => {
//   return (
//     <div className='flex flex-col gap-3 justify-center items-center py-4 border-[#F0F0F1] border-[1px] rounded-lg'>
//         <img src={Group.src} className="w-[65px]"  />
//         <p className='text-[#252735] text-sm font-semibold'>{title}</p>
//         <p className='text-[#252735] text-xs font-normal'>{details}</p>
//         <p className='text-[#8F9198] text-[10px] font-medium'>{date}</p>
//     </div>
//   )
// }

// export default AlbumList

import React from "react";
import Group from "../../../../assets/Group 2.png";
import Link from "next/link";

type Props = {
  name: string;
  description: string;
};

const AlbumPicturesList = [
  {
    href: "/content/gallery/AlbumPictures",
  },
];

const AlbumList = ({ name, description }: Props) => {
  return (
    <>
      {AlbumPicturesList.map((item, idx) => (
        <div className='flex flex-col gap-3 justify-center items-center py-4 border-[#F0F0F1] border-[1px] rounded-lg'>
          <img
            src={Group.src}
            className='w-[65px]'
          />
          <p className='text-[#252735] text-sm font-semibold'>{name}</p>
          <p className='text-[#252735] text-xs font-normal'>{description}</p>
          {/* <p className='text-[#8F9198] text-[10px] font-medium'>{date}</p> */}
        </div>
      ))}
    </>
  );
};

export default AlbumList;

