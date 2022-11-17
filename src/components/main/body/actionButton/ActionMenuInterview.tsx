import { Menu } from "@mantine/core";
import React from "react";


const ActionMenuInterview = () => {
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
        <Menu.Item>Hire Applicant</Menu.Item>
        <Menu.Item>Reject Applicant</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionMenuInterview;
