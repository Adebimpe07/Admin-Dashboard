import React from "react";
import { NotificationDrop } from "../../../../../pages/assessments/categories";
import Profile from "../../notification_ProfilePicture";

const Header = () => {
  return (
    <header className="flex justify-between border-b border-[#DBD9D9] px-4">
      <h1 className="text-2xl font-semibold text-[#4A4C58] pb-[1.41rem]">
        Assessments
      </h1>
      <div className="flex gap-2 items-center">
        <NotificationDrop />
        <img width="40" src={Profile.adminProfilePicture.src} alt="" />
      </div>
    </header>
  );
};

export default Header;
