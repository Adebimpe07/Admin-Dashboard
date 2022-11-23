import { ClassNames } from "@emotion/react";
import React from "react";
import { Notification } from "iconsax-react";
import { StaticImageData } from "next/image";
import ProfilePicture from "../../../../assets/PM_Tosin.png";
import {SideData} from "../../../../layout/sideData";
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

const EmailTemplateHeader = () => {
  return (
    <div className="py-[19.4px] px-5 border-b-[1px] border-b-[#DBD9D9]">
      <div className="flex justify-between ">
        <div>
          <h1 className="text-2xl font-semibold text-[#4A4C58]">
          Application Email Management
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
    </div>
  );
};
export default EmailTemplateHeader;
