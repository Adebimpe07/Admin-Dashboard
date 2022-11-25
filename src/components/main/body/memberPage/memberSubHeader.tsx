import {
  Button,
  FileInput,
  Menu,
  Modal,
  MultiSelect,
  Select,
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
    "Attendance"
  ];

  const [opened, setOpened] = useState(false);

  const UploadJobModal = ({ selected }) =>
    selected === 0 ? (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create New Tech Star"
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
            <TextInput
              size="sm"
              className="focus:border-inherit"
              label="Name"
            />
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
              <button className="bg-[#38CB89] text-[white] w-full py-2 rounded">
                Add
              </button>

          </div>
        </Text>
      </Modal>
    ) : selected === 1 ? (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Testimonial"
        size="xl"
      >
        <Text className="">
          <div className="flex flex-col gap-4">
            <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
              Testimonial Details
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
            <TextInput
              size="sm"
              className="focus:border-inherit"
              label="ATS Member"
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

          <div className="mt-4">
            <button className="bg-[#38CB89] text-[white] py-2 w-full rounded">
              Upload
            </button>
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
    <div className="flex justify-between  px-5">
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
