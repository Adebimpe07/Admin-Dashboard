import React from "react";
import { jobhead } from "../../../../layout/jobHead";
import Cross from "../../../../assets/Icon.png";
import Arr from "../../../../assets/La.png";
import { useState } from "react";
import { Button, Text, TextInput } from "@mantine/core";
import { Add, Logout } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import Downloads from "../../../../assets/import.png";
import { MultiSelect } from "@mantine/core";

const ActionMenuEdit = () => {
  const data = [
    { value: "pm", label: "Product Management" },
    { value: "ft", label: "Frontemd Development" },
    { value: "be", label: "Backend Development" },
    { value: "md", label: "Mobile App Development" },
    { value: "ud", label: "UI/UX Design" },
  ];

  return (
    <div className="">
      <div>
        <Text className="flex flex-col gap-4 " size="sm">
          <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
            Edit Cohort Details
          </h1>

          <div className="flex gap-4 text-[#4a4c58] w-full">
            <TextInput className="w-[50%]" label="Cohort Name" />
            <MultiSelect
              className="flex-1"
              data={data}
              label="Course(s)"
              placeholder="Add Courses"
            />
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
          className="bg-greenButton hover:bg-greenButton h-10 m-auto text-lg my-4"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default ActionMenuEdit;
