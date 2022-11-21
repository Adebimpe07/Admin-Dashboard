import React, { useState } from "react";
import { Notification } from "iconsax-react";
import { Menu } from "@mantine/core";
import ListAssessment from "./listedAssessment";
import Notifications from "../dashboard/notifications";
import HeaderData from "../notification_ProfilePicture";

export const NotificationDrop = () => {
  return (
    <Menu shadow="md" width={250}>
      <Menu.Target>
        <button className="relative">
          <Notification size="17" variant="Outline" />
          <span className="absolute top-[-3px] left-2 text-[8px] px-[2px] text-[#fff] rounded-full bg-[#65110D]">
            {HeaderData.notificationCount}
          </span>
        </button>
      </Menu.Target>

      <Menu.Dropdown className="">
        <Notifications />
      </Menu.Dropdown>
    </Menu>
  );
};

const HeaderMain = () => {
  const [selected, setSelected] = useState(0);

  const Tabs = ["Categories", "List of Assessment"];

  return (
    <div className="py-6 h-screen flex flex-col  bg-[#e5e5e5]">
      <div className="flex justify-between border-b border-[#DBD9D9] px-4">
        <h1 className="text-2xl font-semibold text-[#4A4C58] pb-[1.41rem]">
          Assessments
        </h1>
        <div className="flex gap-2 items-center">
          <NotificationDrop />
          <img width="40" src={HeaderData.adminProfilePicture.src} alt="" />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex gap-2 px-4 pt-4 font-semibold">
          {Tabs.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(index);
              }}
            >
              <div className="flex flex-col gap-1 cursor-pointer">
                <p>{item}</p>
                <span
                  className={
                    selected === index
                      ? "w-8 bg-[#30AD74] px-1 h-1 self-center rounded-lg"
                      : "bg-[#fff] self-center"
                  }
                ></span>
              </div>
            </div>
          ))}
        </div>
        {selected === 0 ? (
          <ListAssessment link="/createCategory" text="Create Category" />
        ) : (
          <ListAssessment link="/createAssessment" text="Create Assessment" />
        )}
      </div>
    </div>
  );
};
export default HeaderMain;
