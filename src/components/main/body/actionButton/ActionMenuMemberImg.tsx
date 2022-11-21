import { StaticImageData } from 'next/image';
import React from 'react';
import ProfilePicture from "../../../../assets/PM_Tosin.png";



type headerprops = {
    adminProfilePicture: StaticImageData;
  };
  
  const HeaderData: headerprops = {
    adminProfilePicture: ProfilePicture,
  };



const ActionMenuMemberImg = () => {


  return (
    <div>
          <img width="30" src={HeaderData.adminProfilePicture.src} alt="" />
    </div>
  )
}

export default ActionMenuMemberImg