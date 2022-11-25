import { Menu, Modal } from "@mantine/core";
import React, { useState } from "react";
import { DeleteMemberModal } from "../memberPage/deleteMemberModal";
import { DeleteModal } from "../memberPage/deleteModal";
import { EditMemberModal } from "../memberPage/editMemberModal";
import { EditModal } from "../memberPage/editModal";
import { XpertModal } from "../memberPage/xpertModal";


const ActionMenuMember = () => {

  const [opened, setOpened] = useState(false);

  const initialValues: { opened: boolean; component: React.ReactNode } = {
    opened: false,
    component: null,
  };
  const [subAdminModal, setSubAdminModal] = useState(initialValues);

  function handleEdit() {
    setSubAdminModal({
      opened: true,
      component: <EditMemberModal />,
    });
  }
  const [subAdminDelModal, setSubAdminDelModal] = useState(initialValues);
  function handleDelete() {
    setSubAdminDelModal({
      opened: true,
      component: <DeleteMemberModal />,
    });
  }

  const [subAdminXpertModal, setSubAdminXpertModal] = useState(initialValues);
  function handleXpert() {
    setSubAdminXpertModal({
      opened: true,
      component: <XpertModal />,
    });
  }


  return (
    <div>
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
        <Menu.Item className="text-center" onClick={handleEdit}>Edit</Menu.Item>
        <Menu.Item className="text-center" onClick={handleDelete}>delete</Menu.Item>
        <Menu.Item className="text-center" onClick={handleXpert}>Make Xpert of the week</Menu.Item>
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
    <Modal
      opened={subAdminXpertModal.opened}
      onClose={() => setSubAdminXpertModal(initialValues)}
    >
      {subAdminXpertModal.component}
    </Modal>
    </div>
  );
};

export default ActionMenuMember;
