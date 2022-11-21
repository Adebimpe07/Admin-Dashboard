import { ClassNames } from "@emotion/react";
import React from "react";
import { Notification } from "iconsax-react";
import HeaderData from "../../notification_ProfilePicture";

const HeaderCohort = () => {
  return (
    <div className="py-6 px-5">
      <div className="flex justify-between ">
        <div>
          <h1 className="text-2xl font-semibold text-[#4A4C58]">
            Cohort Management
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
export default HeaderCohort;
