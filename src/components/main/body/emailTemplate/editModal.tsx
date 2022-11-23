import {
  Button,
  Checkbox,
  FileInput,
  MultiSelect,
  Select,
  TextInput,
} from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import { IconUpload } from "@tabler/icons";
import { useState } from "react";

export const EditModal = () => {
  return (
    <div className="flex flex-col gap-4 ">
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
      <Button
        fullWidth
        className="bg-[#38CB89] hover:bg-[#38CB89] h-10 mx-auto text-lg my-4"
      >
        Save Changes
      </Button>
    </div>
  );
};
