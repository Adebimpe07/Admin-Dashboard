import { Menu } from "@mantine/core";
import React from "react";
import ActionMenuDelete from "../actionButton/ActionMenuDelete";
import ActionMenuEdit from "../actionButton/ActionMenuEdit";

const ActionMenu = () => {
  return (
    <div>
      <Menu>
        <Menu.Target>
          <button className=" ">Actions</button>
        </Menu.Target>
        <Menu.Dropdown>
          <ActionMenuEdit />
          <ActionMenuDelete />
        </Menu.Dropdown>
      </Menu>
    </div>
  );
};

export default ActionMenu;
