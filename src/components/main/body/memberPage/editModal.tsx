import { Button, Checkbox, FileInput, MultiSelect, Select, Text, TextInput } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import { IconUpload } from "@tabler/icons";
import { useState } from "react";

export const EditModal = () => {
 
    const [checked, setChecked] = useState(false);

  return (
    <div>
        <Text className="">
          <div className="flex flex-col gap-4">
            <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
              Edit Testimonial 
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
              Save Changes
            </button>
          </div>
        </Text>
      </div>
    
  );
};
