import { Menu, Modal } from "@mantine/core";
import React, { useState } from "react";
import { RejectModal } from "../applicationPage/rejectModal";
import { InterviewInvitationModal } from "../applicationPage/interviewInvitationModal";
import { HireInvitationModal } from "../applicationPage/hireInvitationModal";


const ActionMenuPass = () => {


  const [opened, setOpened] = useState(false);

  const initialValues: { opened: boolean; component: React.ReactNode } = {
    opened: false,
    component: null,
  };
  const [subAdminModal, setSubAdminModal] = useState(initialValues);

  function handleEdit() {
    setSubAdminModal({
      opened: true,
      component: <InterviewInvitationModal />,
    });
  }
  const [subAdminDelModal, setSubAdminDelModal] = useState(initialValues);
  function handleDelete() {
    setSubAdminDelModal({
      opened: true,
      component: <RejectModal />,
    });
  }
  const [subAdminHireModal, setSubAdminHireModal] = useState(initialValues);
  function handleHire() {
    setSubAdminHireModal({
      opened: true,
      component: <HireInvitationModal />,
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
        <Menu.Item onClick={handleEdit}>Invite for Interview</Menu.Item>
        <Menu.Item onClick={handleHire}>Hire Applicant</Menu.Item>
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
    opened={subAdminHireModal.opened}
    onClose={() => setSubAdminHireModal(initialValues)}
  >
    {subAdminHireModal.component}
  </Modal>
    </div>
  );
};

export default ActionMenuPass;
