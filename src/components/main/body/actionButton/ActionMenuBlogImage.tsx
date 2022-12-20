import { StaticImageData } from "next/image";
import React from "react";
import ProfilePicture from "../../../../assets/PM_Tosin.png";

type headerprops = {
  adminProfilePicture: StaticImageData;
};

const HeaderData: headerprops = {
  adminProfilePicture: ProfilePicture,
};

const ActionMenuBlogImg = ({ authorImage }) => {
  return (
    <div>
      <img
        width="30"
        className="w-[40px] h-[40px] object-cover rounded-[100%]"
        src={authorImage}
        alt=""
      />
    </div>
  );
};

export default ActionMenuBlogImg;
