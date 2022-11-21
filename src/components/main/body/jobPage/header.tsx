import React from "react";
import { jobhead } from "../../../../layout/jobHead";
import Cross from "../../../../assets/Icon.png";
import { useState } from "react";
import { Button, Text, Modal, TextInput } from "@mantine/core";
import { Add } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";

type props = {
  selected: Number;
  setSelected: Function;
};

const Header = ({ selected, setSelected }: props) => {
  const [opened, setOpened] = useState(false);

  const PostJobModal = () => (
    <Modal opened={opened} onClose={() => setOpened(false)} title="Upload Job">
      <Text className="flex flex-col gap-4 " size="sm">
        <p className="text-base text-[#948E8E] pb-2">
          Enter the details of the job
        </p>
        <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
          Job Description
        </h1>

        <div className="flex gap-4 text-[#4a4c58] w-full">
          <TextInput
            className="w-[50%]"
            label="Job"
            disabled
            placeholder="job will be auto-generated"
          />
          <Select
            className="flex-1"
            label="Course"
            data={[
              { value: "fulltime", label: "Front-end Management" },
              { value: "remote", label: "Back-end Management" },
              { value: "hybrid", label: "Project Management" },
              { value: "mobile", label: "Mobile App Development" },
              { value: "ui", label: "UI/UX" }
            ]}
          />
          
        </div>
        <div>
        <TextInput
            label="Cohorts"
          />
        </div>

        <Textarea
          className="focus:border-inherit"
          label="Job Requirements"
          autosize
          minRows={4}
          maxRows={4}
          size="xl"
        />
      </Text>
      <Button
        fullWidth
        className="bg-[#38CB89] hover:bg-[#38CB89] h-10 m-auto text-lg my-4"
      >
        Upload
      </Button>
    </Modal>
  );

  return (
    <div className="flex justify-between pt-6  px-8 ">
      <div className="flex gap-9 text-[#252735] text-sm font-semibold ">
        {jobhead.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(idx)}
            className="cursor-pointer"
          >
            <p>{item.heading}</p>
            <div
              className={
                selected === idx
                  ? "bg-[#30AD74] w-7 h-1 mx-auto border rounded-md mt-2.5"
                  : "w-7 h-1 mx-auto border rounded-md mt-2.5"
              }
            ></div>
          </div>
        ))}
      </div>
      <div>
        <Button
          className="bg-[#38CB89] hover:bg-[#38CB89] rounded-lg h-10 m-auto text-lg"
          leftIcon={<img src={Cross.src} className="w-3 h-3" />}
          onClick={() => setOpened(true)}
        >
          <p>Upload job</p>
          <PostJobModal />
        </Button>
      </div>

      {/* <div className="text-[#F9FAFB] bg-[#38CB89] py-2.5 border rounded-lg flex gap-4 items-center px-7">
            <img src={Cross.src} className="w-3 h-3"/>
            <p className="text-[#F9FAFB]">Post a job</p>
        </div> */}
    </div>
  );
};

export default Header;
