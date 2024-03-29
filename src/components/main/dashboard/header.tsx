import React, { useContext, useEffect, useState } from "react";
import { Filter, Notification } from "iconsax-react";
import { StaticImageData } from "next/image";
import ProfilePicture from "../../../assets/PM_Tosin.png";
import { Button, Radio } from "@mantine/core";
import { Menu } from "@mantine/core";
import Notifications from "./notifications";
import { useStore } from "../../../store";
import FormContext from "../../../context/store";

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
    const { admin } = useContext(FormContext);

    const MenuDrop = () => {
        return (
            <Menu shadow="md" width={150}>
                <Menu.Target>
                    <button className="rounded py-1 gap-2 border flex border-[#948E8E] bg-[#e5e7eb] hover:bg-mainBg px-3 my-1">
                        <Filter size="17" color="#5B6871" variant="Bold" />
                        <p className="text-[#252C32] text-sm">Filter Cohort</p>
                    </button>
                </Menu.Target>

                <Menu.Dropdown className="">
                    <Radio.Group spacing="xs" className="py-1 pl-2">
                        <Radio value="Cohort 1" label="ATS 1.0" />
                        <Radio value="Cohort 2" label="ATS 1.1" />
                        <Radio value="Cohort 3" label="ATS 2.0" />
                    </Radio.Group>

                    {/* <Menu.Divider /> */}
                </Menu.Dropdown>
            </Menu>
        );
    };
    const NotificationDrop = () => {
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

    useEffect(() => {
        console.log(admin);
    }, [admin]);

    return (
        <div className="px-6 pt-6 pb-4">
            <div className="flex justify-between ">
                <div>
                    <h1 className="text-2xl font-semibold text-[#4A4C58]">
                        Hello, {admin?.username}
                    </h1>
                </div>
                <div className="flex gap-2 items-center">
                    <NotificationDrop />
                    <img width="40" src={admin?.profile_picture} alt="" />
                </div>
            </div>
            <p className="text-[#948E8E]">Take a look at today's activities</p>
            <div className="flex items-center gap-2">
                <MenuDrop />
                <p className="text-[#252C32] text-sm">
                    -Displaying logs for Cohort 2
                </p>
            </div>
        </div>
    );
};
export default HeaderMain;
