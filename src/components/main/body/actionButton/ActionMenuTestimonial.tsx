import { Menu } from "@mantine/core";
import React from "react";


const ActionMenuTestimonial = () => {
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
      <Menu.Dropdown >
        <Menu.Item className="text-center">View Testimonial</Menu.Item>
        <Menu.Item className="text-center">Edit</Menu.Item>
        <Menu.Item className="text-center">delete</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionMenuTestimonial;
