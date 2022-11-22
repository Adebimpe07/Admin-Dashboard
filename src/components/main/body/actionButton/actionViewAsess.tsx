import { Menu } from "@mantine/core";
import React from "react";

const ActionMenuPass = () => {
  return (
    <Menu
      classNames={{
        item: "!text-[black]",
      }}
    >
      <Menu.Target>
        <button className="">Actions</button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Invite for Interview</Menu.Item>
        <Menu.Item>Hire Applicant</Menu.Item>
        <Menu.Item>Reject Applicant</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionMenuPass;
