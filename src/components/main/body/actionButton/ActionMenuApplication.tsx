import { Menu, Modal, TextInput, FileInput, Text } from "@mantine/core";
import React, { useState } from "react";
import Search from "../../../../assets/search.png";
import Cross from "../../../../assets/Icon.png";
import Elipse from "../../../../assets/Ellipse 8.png";
import Cloud from "../../../../assets/cloud.png";
import { RichTextEditor } from "@mantine/rte";

const ActionMenuApplication = () => {
  const [opened, setOpened] = useState(false);

  const UploadJobModal = () => (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create News"
      size="xl"
    >
      <Text></Text>
    </Modal>
  );

  return (
    <Menu
      classNames={{
        item: "!text-[black]",
      }}
    >
      <Menu.Target>
        <button className=" ">Actions</button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item>View Details</Menu.Item>
        <Menu.Item>
          <button onClick={() => setOpened(true)}>
            Shortlist Applicant <UploadJobModal />
          </button>
        </Menu.Item>
        <Menu.Item>Reject Applicant</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default ActionMenuApplication;
