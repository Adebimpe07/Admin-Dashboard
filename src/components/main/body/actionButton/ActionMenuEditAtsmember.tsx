import React from "react";
import { jobhead } from "../../../../layout/jobHead";
import Edit from "../../../../assets/edit_icon.png";
import Arr from "../../../../assets/La.png";
import { useState } from "react";
import { Button, Text, Modal, TextInput, FileInput } from "@mantine/core";
import { Add, Logout } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import Downloads from "../../../../assets/import.png";
import { MultiSelect } from "@mantine/core";
import Elipse from "../../../../assets/Ellipse 8.png";
import { RichTextEditor } from "@mantine/rte";
import Cloud from "../../../../assets/cloud.png";

const ActionMenuEditAtsMember = () => {
  const [opened, setOpened] = useState(false);

  const data = [
    { value: "pm", label: "Product Mnanagement" },
    { value: "ft", label: "Frontemd Development" },
    { value: "be", label: "Backend Development" },
    { value: "md", label: "Mobile App Development" },
    { value: "ud", label: "UI/UX Design" },
  ];

  const UploadJobModal = () => (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Edit Member"
      size="xl"
    >
      <Text className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
            Member Details
          </h1>

          <div className="flex gap-4">
            <Select
              className="flex-1"
              label="Cohort"
              data={[
                { value: "ATS 1.0", label: "ATS 1.0" },
                { value: "ATS 1.1", label: "ATS 1.1" },
                { value: "ATS 2.0", label: "ATS 2.0" },
                { value: "ATS 2.2", label: "ATS 2.2" },
              ]}
            />
            <Select
              className="flex-1"
              label="Course"
              data={[
                { value: "fulltime", label: "Front-end Management" },
                { value: "remote", label: "Back-end Management" },
                { value: "hybrid", label: "Project Management" },
                { value: "mobile", label: "Mobile App Development" },
                { value: "ui", label: "UI/UX" },
              ]}
            />
          </div>
          <TextInput size="sm" className="focus:border-inherit" label="Name" />
          <div className="flex gap-4">
            <TextInput
              size="sm"
              className="focus:border-inherit flex-1"
              label="Email"
            />
            <TextInput
              size="sm"
              className="focus:border-inherit flex-1"
              label="Phone No"
            />
          </div>
        </div>
        <div className="flex flex-col  gap-4">
          <p>Featured image</p>
          <FileInput
            placeholder="Browse and chose the files you want to upload from your computer"
            icon={<img src={Cloud.src} className="w-6" />}
            accept="image/png,image/jpeg"
            className="bg-[#EBFAF3]"
          />
          <button className="bg-greenButton text-[white] w-full py-2 rounded">
            Save Changes
          </button>
        </div>
      </Text>
    </Modal>
  );

  return (
    <div className="">
      <button
        className=" text-sm text-[#514747]"
        onClick={() => setOpened(true)}
      >
        <img src={Edit.src} className="w-[17px]" />
        <UploadJobModal />
      </button>
    </div>
  );
};

export default ActionMenuEditAtsMember;
