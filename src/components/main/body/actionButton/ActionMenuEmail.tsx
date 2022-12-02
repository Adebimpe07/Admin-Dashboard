import { Menu, Modal } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
import { HireInvitationModal } from "../applicationPage/hireInvitationModal";
import { InterviewInvitationModal } from "../applicationPage/interviewInvitationModal";
import { RejectModal } from "../applicationPage/rejectModal";
import { DeleteModal } from "../emailTemplate/deleteModal";
import { EditModal } from "../emailTemplate/editModal";
import ViewEmailModal from "../emailTemplate/viewEmailModal";

const ActionMenuEmail = ({ row, id }) => {
  const logRows = () => {
    console.log(row.original);
  };
  const [opened, setOpened] = useState(false);

  const initialValues: { opened: boolean; component: React.ReactNode } = {
    opened: false,
    component: null,
  };
  const [subAdminDelModal, setSubAdminDelModal] = useState(initialValues);
  function handleDelete() {
    setSubAdminDelModal({
      opened: true,
      component: (
        <DeleteModal
          setSubAdminDelModal={setSubAdminDelModal}
          rowdetail={row.original}
          id={id}
        />
      ),
    });
  }
  const [subAdminEditModal, setSubAdminEditModal] = useState(initialValues);
  function handleEdit() {
    setSubAdminEditModal({
      opened: true,
      component: (
        <EditModal
          setSubAdminEditModal={setSubAdminEditModal}
          rowdetail={row.original}
        />
      ),
    });
  }

  const [subAdminViewModal, setSubAdminViewModal] = useState(initialValues);
  function handleView() {
    setSubAdminViewModal({
      opened: true,
      component: (
        <ViewEmailModal
          setSubAdminViewModal={setSubAdminViewModal}
          rowdetail={row.original}
        />
      ),
    });
  }

  // const populateInput = () => {

  //   var config = {
  //     method: "get",
  //     url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/applications/email-templates/${id}`,
  //     headers: {
  //       "api-key":
  //         "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
  //       "request-ts": "1667549939702",
  //       "hash-key":
  //         "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
  //     },
  //   };
  //   axios(config)
  //     .then(function (response) {
  //       form.values.type = response.data.data.type;
  //       form.values.subject = response.data.data.subject;
  //       form.values.body = response.data.data.body;

  //     })
  //     .catch(function (error) {
  //       console.log(error);

  //     });
  // };

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
          <Menu.Item onClick={handleView}>View Detail</Menu.Item>
          <Menu.Item onClick={handleEdit}>Edit</Menu.Item>
          <Menu.Item onClick={handleDelete}>Delete</Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <Modal
        opened={subAdminDelModal.opened}
        onClose={() => setSubAdminDelModal(initialValues)}
      >
        {subAdminDelModal.component}
      </Modal>
      <Modal
        opened={subAdminEditModal.opened}
        onClose={() => setSubAdminEditModal(initialValues)}
      >
        {subAdminEditModal.component}
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

export default ActionMenuEmail;
