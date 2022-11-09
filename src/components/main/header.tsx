import { ClassNames } from "@emotion/react";
import React from "react";
import { Notification } from "iconsax-react";
import { StaticImageData } from "next/image";
import ProfilePicture from "../../assets/PM_Tosin.png";
//  notification: <Notification size="32" color="#FF8A65" variant="Outline" />,
type headerprops = {
  adminName: string;
  notificationCount: string;
  adminProfilePicture: StaticImageData;
};

const HeaderData: headerprops = {
  adminName: "Alli",
  notificationCount: "2",
  adminProfilePicture: ProfilePicture,
};

const HeaderMain = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between ">
        <div>
          <h1 className="text-2xl font-semibold text-[#4A4C58]">
            Hello, {HeaderData.adminName}
          </h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="relative">
            <Notification size="17" variant="Outline" />
            <span className="absolute top-[-3px] left-2 text-[8px] px-[2px] text-[#fff] rounded-full bg-[#65110D]">
              {HeaderData.notificationCount}
            </span>
          </div>
          <img width="40" src={HeaderData.adminProfilePicture.src} alt="" />
        </div>
      </div>
      <p className="text-[#948E8E]">Take a look at today's activities</p>
    </div>
  );
};
export default HeaderMain;
