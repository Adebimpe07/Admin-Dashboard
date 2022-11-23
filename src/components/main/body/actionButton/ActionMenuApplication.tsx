import { Menu, Modal, TextInput, FileInput, Text } from "@mantine/core";
import React, { useState } from "react";
import Search from "../../../../assets/search.png";
import Cross from "../../../../assets/Icon.png";
import Elipse from "../../../../assets/Ellipse 8.png";
import Cloud from "../../../../assets/cloud.png";
import { RichTextEditor } from "@mantine/rte";
import { EditSubAdminModal } from "../../admin/editAdminModal";
import { DeleteSubAdminModal } from "../../admin/deleteAdmin";
import { ShortlistModal } from "../applicationPage/shortlistModal";
import { RejectModal } from "../applicationPage/rejectModal";


const ActionMenuApplication = () => {

  const [opened, setOpened] = useState(false);

    const initialValues: { opened: boolean; component: React.ReactNode } = {
      opened: false,
      component: null,
    };
    const [subAdminModal, setSubAdminModal] = useState(initialValues);
  
    function handleEdit() {
      setSubAdminModal({
        opened: true,
        component: <ShortlistModal />,
      });
    }
    const [subAdminDelModal, setSubAdminDelModal] = useState(initialValues);
    function handleDelete() {
      setSubAdminDelModal({
        opened: true,
        component: <RejectModal />,
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
          <button className=" ">Actions</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item >View Details</Menu.Item>
          <Menu.Item onClick={handleEdit}>
            Shortlist Applicant
          </Menu.Item>
          <Menu.Item onClick={handleDelete}>Reject Applicant</Menu.Item>
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

export default ActionMenuApplication;
