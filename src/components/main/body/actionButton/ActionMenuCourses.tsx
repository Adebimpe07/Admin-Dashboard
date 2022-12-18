import { Menu, HoverCard, Button, Text, Group } from "@mantine/core";
import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useForm } from "@mantine/form";

const ActionMenuCourses = ({ number_of_courses, courses }) => {
  return (
    <div>
      <Group position="center">
        <HoverCard width={180} shadow="md">
          <HoverCard.Target>
            <button className="group  bg-greenButton px-3 py-0.5 rounded-md">
              {number_of_courses}
            </button>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            {courses.map((item, idx) => (
              <Text key={idx} size="sm">
                {item.title}
              </Text>
            ))}
          </HoverCard.Dropdown>
        </HoverCard>
      </Group>
      {/* <ul>
        <li className="group  bg-greenButton ml-10  rounded-md">
          {number_of_courses}
          {courses.map((item, idx) => (
            <ul key={idx} className="hidden group-hover:block">
              <li>{item.title}</li>
            </ul>
          ))}
        </li>
      </ul> */}
    </div>
    // <Menu
    //     classNames={{
    //       item: "!text-[black]",
    //     }}
    //   >
    //     <Menu.Target>
    //       <button className=" bg-greenButton ml-10 px-2 rounded-md">
    //         {number_of_courses}
    //       </button>
    //     </Menu.Target>
    //     <Menu.Dropdown>
    //       {courses.map((item, idx) => (
    //         <Fragment key={idx}>
    //           <Menu.Item className="hidden hover:block">{item.title}</Menu.Item>
    //         </Fragment>
    //       ))}
    //       {/* <Menu.Item>Frontend Developer</Menu.Item>
    //     <Menu.Item>Product Management</Menu.Item>
    //     <Menu.Item>UI/UX Designer</Menu.Item> */}
    //     </Menu.Dropdown>
    //   </Menu>
  );
};

export default ActionMenuCourses;
