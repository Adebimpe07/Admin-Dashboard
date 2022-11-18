import { Menu } from "@mantine/core";
import React from "react";


const ActionMenuShortlist = () => {
  return (
    <Menu
      classNames={{
        item: "!text-[black]",
      }}
    >
      <Menu.Target>
        <button className="">
          Actions
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Invite for Assesment</Menu.Item>
        <Menu.Item>Reject Applicant</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionMenuShortlist;
