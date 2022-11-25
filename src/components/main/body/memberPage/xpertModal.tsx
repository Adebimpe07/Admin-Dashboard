import {
  Button,
  Checkbox,
  FileInput,
  MultiSelect,
  Select,
  TextInput,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

export const XpertModal = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="">
      <form className="text-[#514747] bg-white  mx-auto ">
        <h2 className=" text-base font-semibold">Create Weekly Xpert</h2>
        <p className="py-4">Xpert Views</p>
        <RichTextEditor
          id="rte"
          controls={[
            ["bold", "italic", "underline"],
            ["unorderedList", "h1", "h2"],
            ["sup", "sub"],
            ["alignLeft", "alignCenter", "alignRight"],
          ]}
        />{" "}
        <div className="flex justify-center gap-8 pt-10 pb-4">
          <button className="text-[#4A4C58] px-8 border-[1px] rounded">
            Cancel
          </button>
          <button className="bg-[#38CB89] text-white px-8 rounded py-1">
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};
