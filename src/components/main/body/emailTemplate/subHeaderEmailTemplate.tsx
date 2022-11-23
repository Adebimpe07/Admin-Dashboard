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

const SubHeaderEmailTemplate = () => {
  const [opened, setOpened] = useState(false);

  const UploadJobModal = () => (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create Email"
    >
      <Text className="flex flex-col gap-4 " size="sm">
        <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
          Mail Description
        </h1>
        <Select
          label="Type"
          placeholder="Select type"
          data={[
            { value: "submit", label: "Submitted Application" },
            { value: "Assesment", label: "Invited for Assesment" },
            { value: "interview", label: "Invited for Interview" },
            { value: "accepted", label: "Accepted" },
            { value: "rejected", label: "Rejected" },
          ]}
        />
        <TextInput label="Subject" className="" />
        <p>Content</p>
        <RichTextEditor
          id="rte"
          controls={[
            ["bold", "italic", "underline"],
            ["unorderedList", "h1", "h2"],
            ["sup", "sub"],
            ["alignLeft", "alignCenter", "alignRight"],
          ]}
        />
      </Text>
      <Button
        fullWidth
        className="bg-[#38CB89] hover:bg-[#38CB89] h-10 mx-auto text-lg my-4"
      >
        Create
      </Button>
    </Modal>
  );

  return (
    <div className="flex flex-col justify-end items-end my-5 mr-5">
      <Button
        className="bg-[#38CB89] hover:bg-[#38CB89] w-[141px] h-[34px] text-[13px]"
        leftIcon={<img src={Cross.src} className="w-4" />}
        onClick={() => setOpened(true)}
      >
        <p>Create Email</p>
        <UploadJobModal />
      </Button>
    </div>
  );
};

export default SubHeaderEmailTemplate;
