import {
  Button,
  Checkbox,
  FileInput,
  MultiSelect,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import { IconUpload } from "@tabler/icons";
import { useState } from "react";
import Cloud from "../../../../assets/cloud.png";

export const EditMemberModal = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Text className="">
        <div className="flex flex-col gap-4">
          <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
            Edit Tech Star Details
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
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
            </div>
          </div>{" "}
        </div>

        <div className="mt-4">
          <button className="bg-greenButton text-[white] py-2 w-full rounded">
            Save Changes
          </button>
        </div>
      </Text>
    </div>
  );
};
