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
      <Text>
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
          <div className="mt-auto self-center">
            <button className="bg-[#38CB89] text-[white] py-2 px-7 rounded-lg">
              Publish article
            </button>
          </div>
        </div>
      </Text>
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
          <button>Shortlist Applicant <UploadJobModal/></button>
        </Menu.Item>
        <Menu.Item>Reject Applicant</Menu.Item>
      </Menu.Dropdown>
    </Menu>
    
  );
};

export default ActionMenuApplication;
