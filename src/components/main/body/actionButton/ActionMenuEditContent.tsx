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

const ActionMenuEdit = () => {
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
      title="Edit News"
      size="xl"
      classNames={{
        modal: "!w-[50rem]",
      }}
    >
      <Text className="flex gap-6 w-[100%]">
        <div className="flex w-[85%] flex-col gap-4">
          <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
            News Details
          </h1>
          <TextInput size="sm" className="focus:border-inherit" label="Title" />
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
        </div>
        <div className="flex flex-col  gap-4">
          <p>Featured image</p>
          <FileInput
            placeholder="Browse and chose the files you want to upload from your computer"
            icon={<img src={Cloud.src} className="w-6" />}
            accept="image/png,image/jpeg"
            className="bg-[#EBFAF3]"
          />
          <p>Add to category</p>
          <div className="flex gap-[10px]">
            <button className="bg-[#DCFCE7] px-2 text-[8px] font-medium text-[#14532D] flex gap-2 items-center py-2 rounded-3xl">
              <img src={Elipse.src} className="w-1" />
              NEWS
            </button>
            <button className="bg-[#DCFCE7] px-2 text-[8px] font-medium text-[#14532D] flex gap-2 items-center py-2 rounded-3xl">
              <img src={Elipse.src} className="w-1" />
              GENERAL
            </button>
            <button className="bg-[#DCFCE7] px-2 text-[8px] font-medium text-[#14532D] flex gap-2 items-center py-2 rounded-3xl">
              <img src={Elipse.src} className="w-1" />
              POLITICS
            </button>
            <button className="bg-[#DCFCE7] px-2 text-[8px] font-medium text-[#14532D] flex gap-2 items-center py-2 rounded-3xl">
              <img src={Elipse.src} className="w-1" />
              TECH
            </button>
          </div>
          <Select
            label="Author"
            data={[
              { value: "single", label: "Single" },
              { value: "married", label: "Married" },
            ]}
          />
          <div className="mt-auto self-center">
            <button className="bg-greenButton text-[white] py-2 px-7 rounded-lg">
              Save Changes
            </button>
          </div>
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

export default ActionMenuEdit;
