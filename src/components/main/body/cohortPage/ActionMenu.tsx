import { Menu, Modal } from "@mantine/core";
import React, { useState } from "react";
import ActionMenuDelete from "../actionButton/ActionMenuDelete";
import ActionMenuEdit from "../actionButton/ActionMenuEdit";

const ActionMenu = ({ rowDetails }) => {
  const [opened, setOpened] = useState(false);

  const initialValues: { opened: boolean; component: React.ReactNode } = {
    opened: false,
    component: null,
  };
  const [subAdminModal, setSubAdminModal] = useState(initialValues);

  function handleEdit() {
    setSubAdminModal({
      opened: true,
      component: <ActionMenuEdit rowDetails={rowDetails} />,
    });
  }
  const [subAdminDelModal, setSubAdminDelModal] = useState(initialValues);
  function handleDelete() {
    setSubAdminDelModal({
      opened: true,
      component: <ActionMenuDelete rowDetails={rowDetails} />,
    });
  }

  return (
    <div>
      <Menu>
        <Menu.Target>
          <button className=" ">Actions</button>
        </Menu.Target>
        <Menu.Dropdown>
          {/* <ActionMenuEdit />
          <ActionMenuDelete /> */}
          <Menu.Item onClick={handleEdit}>Edit</Menu.Item>
          <Menu.Item onClick={handleDelete}>Delete</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Modal
        opened={subAdminModal.opened}
        onClose={() => setSubAdminModal(initialValues)}
      >
        {subAdminModal.component}
      </Modal>
      <Modal
        opened={subAdminDelModal.opened}
        onClose={() => setSubAdminDelModal(initialValues)}
      >
        {subAdminDelModal.component}
      </Modal>
    </div>
  );
};

export default ActionMenu;
