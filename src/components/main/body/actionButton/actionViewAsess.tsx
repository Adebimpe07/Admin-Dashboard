import { Menu } from "@mantine/core";
import Link from "next/link";
import React, { useEffect } from "react";

const ActionMenuPass = ({ rowdetail }) => {
    return (
        <Menu
            classNames={{
                item: "!text-[black] !p-0",
            }}>
            <Menu.Target>
                <button className="">Actions</button>
            </Menu.Target>
            <Menu.Dropdown>
                <Link href={`/viewAssessment/${rowdetail.id}`}>
                    <Menu.Item>result details</Menu.Item>
                </Link>
            </Menu.Dropdown>
        </Menu>
    );
};

export default ActionMenuPass;
