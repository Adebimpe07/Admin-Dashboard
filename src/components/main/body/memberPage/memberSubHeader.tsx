import {
  Button,
  FileInput,
  Menu,
  Modal,
  MultiSelect,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import Search from "../../../../assets/search.png";
import Cross from "../../../../assets/Icon.png";
import Elipse from "../../../../assets/Ellipse 8.png";
import Cloud from "../../../../assets/cloud.png";
import { RichTextEditor } from "@mantine/rte";

const MemberSubHeader = ({ selected, setSelected }) => {
  const contentData = [
    "ATS Member",
    "Testimonial",
    "Weekly Xperts",
    "Attendance",
  ];

  const [opened, setOpened] = useState(false);

  const UploadJobModal = ({ selected }) =>
    selected === 0 ? (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create News"
        size="xl"
      >
        <Text className="flex gap-6 ">
          <div className="flex w-[85%] flex-col gap-4">
            <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
              News Details
            </h1>
            <TextInput
              size="sm"
              className="focus:border-inherit"
              label="Title"
            />
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
    ) : selected === 1 ? (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Blog"
        size="xl"
      >
        <Text className="flex gap-6 ">
          <div className="flex w-[85%] flex-col gap-4">
            <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
              Blog Details
            </h1>
            <TextInput
              size="sm"
              className="focus:border-inherit"
              label="Title"
            />
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
            <div className="mt-auto self-center">
              <button className="bg-[#38CB89] text-[white] py-2 px-7 rounded-lg">
                Publish article
              </button>
            </div>
          </div>
        </Text>
      </Modal>
    ) : (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Cohorts"
      >
        <Text className="flex flex-col gap-4 " size="sm">
          <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
            Cohort Details
          </h1>

          <div className="flex gap-4 text-[#4a4c58] w-full">
            <TextInput className="w-[50%]" label="Cohort Name" />
          </div>
          <div className="flex gap-4">
            <Textarea
              size="sm"
              className="focus:border-inherit w-full"
              label="Cohort Start Date"
              autosize
              maxRows={4}
            />
            <Textarea
              className="focus:border-inherit w-full"
              label="Cohort End Date"
              autosize
              maxRows={4}
            />
          </div>
          <div className="flex gap-4">
            <Textarea
              size="sm"
              className="focus:border-inherit w-full"
              label="Application Start Date"
              autosize
              maxRows={4}
            />
            <Textarea
              className="focus:border-inherit w-full"
              label="Application End Date"
              autosize
              maxRows={4}
            />
          </div>
        </Text>
        <Button
          fullWidth
          className="bg-[#38CB89] hover:bg-[#38CB89] h-10 m-auto text-lg my-4"
        >
          Create
        </Button>
      </Modal>
    );

  return (
    <div className="flex justify-between pb-7 pt-6 px-5">
      <div className="flex gap-9">
        {contentData.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(idx)}
            className={
              selected === idx
                ? " text-[#4A4C58] cursor-pointer"
                : "text-[#948E8E] cursor-pointer"
            }
          >
            {item}

            <div
              className={
                selected === idx
                  ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2"
                  : "w-7 h-1 mx-auto border rounded-md mt-2.5"
              }
            ></div>
          </div>
        ))}
      </div>
      <div className="flex gap-4">
        {selected === 0 ? (
          <TextInput
            className="w-[180px]"
            placeholder="Search with Name"
            radius="md"
            rightSection={<img src={Search.src} className="w-[14px]" />}
          />
        ) : null}

        {selected == 0 ? (
          <Menu
            classNames={{
              item: "!text-[#4A4C58]",
            }}
          >
            <Menu.Target>
              <button className="border-[1px] border-[#DBD9D9] rounded w-28 !text-[#4A4C58]">
                Filter
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Backend Development</Menu.Item>
              <Menu.Item>Frontend Development</Menu.Item>
              <Menu.Item>MobileApp Development</Menu.Item>
              <Menu.Item>Product Management</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        )  : null}

        {selected == 0 ? (
          <Button
            className="bg-[#38CB89] hover:bg-[#38CB89] w-[141px] h-[34px] text-[13px]"
            leftIcon={<img src={Cross.src} className="w-4" />}
            onClick={() => setOpened(true)}
          >
            <p>New ATS</p>
            <UploadJobModal selected={selected} />
          </Button>
        ) : selected === 1 ? (
          <Button
            className="bg-[#38CB89] hover:bg-[#38CB89] w-[141px] h-[34px] text-[13px]"
            leftIcon={<img src={Cross.src} className="w-4" />}
            onClick={() => setOpened(true)}
          >
            <p>Upload</p>
            <UploadJobModal selected={selected} />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default MemberSubHeader;
