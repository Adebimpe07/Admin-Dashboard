import { Menu } from "@mantine/core";
import React from "react";

const ActionMenuPass = ({ }) => {
  return (
    <Menu
      classNames={{
        item: "!text-[black] !p-0",
      }}
    >
      <Menu.Target>
        <button className="">Actions</button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>result details</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionMenuPass;
