import { Menu, Modal } from "@mantine/core";
import React, { useState } from "react";
import { RejectModal } from "../applicationPage/rejectModal";
import { InterviewInvitationModal } from "../applicationPage/interviewInvitationModal";
import { HireInvitationModal } from "../applicationPage/hireInvitationModal";


const ActionMenuPass = ({row}) => {

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
      component: <InterviewInvitationModal setSubAdminModal={setSubAdminModal} rowdetail={row.original} />,
    });
  }
  const [subAdminDelModal, setSubAdminDelModal] = useState(initialValues);
  function handleDelete() {
    setSubAdminDelModal({
      opened: true,
      component: <RejectModal setSubAdminDelModal={setSubAdminDelModal} rowdetail={row.original} />,
    });
  }
  const [subAdminHireModal, setSubAdminHireModal] = useState(initialValues);
  function handleHire() {
    setSubAdminHireModal({
      opened: true,
      component: <HireInvitationModal setSubAdminHireModal={setSubAdminHireModal} rowdetail={row.original} />,
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
        <button onClick={logRows} className="">
          Actions
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={handleEdit}>Invite for Interview</Menu.Item>
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
    opened={subAdminHireModal.opened}
    onClose={() => setSubAdminHireModal(initialValues)}
  >
    {subAdminHireModal.component}
  </Modal>
    </div>
  );
};

export default ActionMenuPass;
