import { Menu } from "@mantine/core";
import React from "react";


const ActionMenuCourses = () => {
  return (
    <Menu
      classNames={{
        item: "!text-[black]",
      }}
    >
      <Menu.Target>
        <button className=" bg-[#38CB89] ml-10 px-2 rounded-md">
          4
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>Backend Developer</Menu.Item>
        <Menu.Item>Frontend Developer</Menu.Item>
        <Menu.Item>Product Management</Menu.Item>
        <Menu.Item>UI/UX Designer</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionMenuCourses;
