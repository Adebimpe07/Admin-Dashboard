import { Menu, Modal, TextInput, FileInput, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Search from "../../../../assets/search.png";
import Cross from "../../../../assets/Icon.png";
import Elipse from "../../../../assets/Ellipse 8.png";
import Cloud from "../../../../assets/cloud.png";
import { RichTextEditor } from "@mantine/rte";
import { EditSubAdminModal } from "../../admin/editAdminModal";
import { DeleteSubAdminModal } from "../../admin/deleteAdmin";
import { ShortlistModal } from "../applicationPage/shortlistModal";
import { RejectModal } from "../applicationPage/rejectModal";
import ViewModal from "../applicationPage/viewModal";


const ActionMenuApplication = ({row}) => {


  const logRows = () => {
    console.log(row.original)
  }
 
  const [opened, setOpened] = useState(false);

    const initialValues: { opened: boolean; component: React.ReactNode } = {
      opened: false,
      component: null,
    };
    const [subAdminModal, setSubAdminModal] = useState(initialValues);
  
    function handleEdit() {
      setSubAdminModal({
        opened: true,
        component: <ShortlistModal setSubAdminModal={setSubAdminModal} rowdetail={row.original} />,
      });
    }
    const [subAdminDelModal, setSubAdminDelModal] = useState(initialValues);
    function handleDelete() {
      setSubAdminDelModal({
        opened: true,
        component: <RejectModal setSubAdminDelModal={setSubAdminDelModal} rowdetail={row.original} />,
      });
    }

    const [subAdminViewModal, setSubAdminViewModal] = useState(initialValues);
    function handleView() {
      setSubAdminViewModal({
        opened: true,
        component: <ViewModal setSubAdminViewModal={setSubAdminViewModal} rowdetail={row.original} />
      })
    }


    return (
      <div>
      <Menu
        classNames={{
          item: "!text-[black]",
        }}
      >
        <Menu.Target>
          <button onClick={logRows} className=" ">Actions</button>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item onClick={handleView} >View Details</Menu.Item>
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
    <Modal
    opened={subAdminViewModal.opened}
    onClose={() => setSubAdminViewModal(initialValues)}
    >
    {subAdminViewModal.component}
    </Modal>
    </div>
    );


  
};

export default ActionMenuApplication;
