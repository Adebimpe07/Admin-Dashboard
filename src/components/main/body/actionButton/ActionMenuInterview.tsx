import { Menu, Modal } from "@mantine/core";
import React, { useState } from "react";
import { HireInvitationModal } from "../applicationPage/hireInvitationModal";
import { InterviewInvitationModal } from "../applicationPage/interviewInvitationModal";
import { RejectModal } from "../applicationPage/rejectModal";


const ActionMenuInterview = ({row}) => {


  const [opened, setOpened] = useState(false);

  const initialValues: { opened: boolean; component: React.ReactNode } = {
    opened: false,
    component: null,
  };
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
        <button className="">
          Actions
        </button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item onClick={handleHire}>Hire Applicant</Menu.Item>
        <Menu.Item onClick={handleDelete}>Reject Applicant</Menu.Item>
      </Menu.Dropdown>
    </Menu>
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

export default ActionMenuInterview;
