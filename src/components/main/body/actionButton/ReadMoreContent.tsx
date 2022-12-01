import {
  Button,
  Modal,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import React, { useState } from "react";
import Cross from "../../../../assets/Icon.png";

const ReadMoreContent = () => {
  const [opened, setOpened] = useState(false);

  const UploadJobModal = () => (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="View Message"
    >
      <Text className="flex flex-col gap-4 " size="sm">
        <h1 className="text-base text-[#948E8E] pb-2">
          View and reply customer’s message
        </h1>
        <Textarea label="Message" minRows={5} className="" />
         <Textarea label="Reply Message" minRows={5} className="" />
      </Text>
      <Button
        fullWidth
        className="bg-greenButton hover:bg-greenButton h-10 mx-auto text-lg my-4">
       Send
      </Button>
    </Modal>
  );

  return (
      <button
        onClick={() => setOpened(true)}>
        <p>View</p>
        <UploadJobModal />
      </button>
  );
};

export default ReadMoreContent;
