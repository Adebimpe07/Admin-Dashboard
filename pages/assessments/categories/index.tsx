import React, { useContext, useEffect, useState } from "react";
import { Notification } from "iconsax-react";
import { Menu } from "@mantine/core";
import Link from "next/link";
import HeaderData from "../../../src/components/main/notification_ProfilePicture";
import Notifications from "../../../src/components/main/dashboard/notifications";
import Tabs from "../../../src/layout/assessmentTabs";
import ListAssessment from "../../../src/components/main/assessment/listedAssessment";
import { CategoryCardData } from "../../../src/layout/assessmentCardData";
import CategoryCard from "../../../src/components/main/assessment/categoryCard/categoryCard";
import axios from "axios";
import Loading from "../../../src/components/loading";
import CryptoJS, { SHA256 } from "crypto-js";
import FormContext from "../../../src/context/store";

const key = CryptoJS.enc.Base64.parse(
    "wjqy62fB+dwz2gyz4sMePe9u2RsMVIyuaA6wPgUeXjw="
);
const iv = CryptoJS.enc.Base64.parse("gNyBAsNdWQEwHvbAm8g5Jg==");

export const NotificationDrop = () => {
    return (
        <Menu shadow="md" width={250}>
            <Menu.Target>
                <button className="relative">
                    <Notification size="17" variant="Outline" />
                    <span className="absolute top-[-3px] left-2 text-[8px] px-[2px] text-white rounded-full bg-[#65110D]">
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
    // const [categoryCard, setCategoryCard] = useState(null);
    const [loading, setLoading] = useState(false);
    const { categoryCard, setCategoryCard } = useContext(FormContext);

    const fetchCategories = () => {
        let requestTs = String(Date.now());
        setLoading(true);
        axios({
            url:
                process.env.NEXT_PUBLIC_BASE_URL_2 +
                `/api/categories/create-list-category`,
            headers: {
                "api-key": process.env.NEXT_PUBLIC_API_KEY_2,
                "request-ts": requestTs,
                "hash-key": SHA256(
                    process.env.NEXT_PUBLIC_API_KEY_2 +
                        process.env.NEXT_PUBLIC_SECRET_KEY_2 +
                        requestTs
                ).toString(CryptoJS.enc.Hex),
            },
        })
            .then(function (response) {
                let decrypted_data = JSON.parse(
                    CryptoJS.AES.decrypt(response.data.data, key, {
                        iv: iv,
                    }).toString(CryptoJS.enc.Utf8)
                );
                setCategoryCard(decrypted_data.results);
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return categoryCard?.length > 0 ? (
        <CategoryCard categoryCard={categoryCard} />
    ) : (
        <div className="py-6 h-screen flex-1 flex flex-col  bg-mainBg">
            <div className="flex justify-between border-b border-[#DBD9D9] px-4">
                <h1 className="text-2xl font-semibold text-[#4A4C58] pb-[1.41rem]">
                    Assessments
                </h1>
                <div className="flex gap-2 items-center">
                    <NotificationDrop />
                    <img
                        width="40"
                        src={HeaderData.adminProfilePicture.src}
                        alt=""
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col">
                <div className="flex gap-2 px-4 pt-4 font-semibold">
                    {Tabs.map((item, index) => (
                        <div key={index}>
                            <Link href={item.href}>
                                <div className="flex flex-col gap-1 cursor-pointer">
                                    <p>{item.name}</p>
                                    <span
                                        className={
                                            item.name === "Categories"
                                                ? "w-8 bg-[#30AD74] px-1 h-1 self-center rounded-lg"
                                                : "bg-white self-center"
                                        }></span>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <ListAssessment
                    link="/assessments/categories/create_category"
                    text="Create Category"
                />
                <Loading loading={loading} />
            </div>
        </div>
    );
};
export default HeaderMain;
