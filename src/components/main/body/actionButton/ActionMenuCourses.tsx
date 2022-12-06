import { Menu } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form"

const ActionMenuCourses = ({number_of_courses}) => {

 
  return (
    <Menu
      classNames={{
        item: "!text-[black]",
      }}
    >
      <Menu.Target>
        <button className=" bg-greenButton ml-10 px-2 rounded-md">{number_of_courses}</button>
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
