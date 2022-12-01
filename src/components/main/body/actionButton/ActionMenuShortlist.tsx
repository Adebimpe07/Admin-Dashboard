import { Menu, Modal } from "@mantine/core";
import React, { useState } from "react";
import { RejectModal } from "../applicationPage/rejectModal";
import { ShortlistModal } from "../applicationPage/shortlistModal";
import { AssesmentInvitationModal } from "../applicationPage/assesmentInvitationModal";


const ActionMenuShortlist = ({row}) => {

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
        component: <AssesmentInvitationModal setSubAdminModal={setSubAdminModal} rowdetail={row.original} />,
      });
    }
    const [subAdminDelModal, setSubAdminDelModal] = useState(initialValues);
    function handleDelete() {
      setSubAdminDelModal({
        opened: true,
        component: <RejectModal setSubAdminDelModal={setSubAdminDelModal} rowdetail={row.original} />,
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
      <Menu.Dropdown>
        <Menu.Item onClick={handleEdit}>Invite for Assesment</Menu.Item>
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

export default ActionMenuShortlist;
