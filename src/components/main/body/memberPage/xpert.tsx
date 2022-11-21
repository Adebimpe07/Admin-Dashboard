import React, { useState } from "react";
import Group from "../../../../assets/Group 2.png";
import Cross from "../../../../assets/Icon.png";
import Gallery from "../../../../assets/gallery.png";
import {
  Button,
  FileInput,
  Modal,
  MultiSelect,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import Elipse from "../../../../assets/Ellipse 8.png";
import Cloud from "../../../../assets/cloud.png";

const Xpert = () => {
  return (
    <div className="">
      <form className="text-[#514747] bg-white w-[90%] mx-auto py-5 px-10 rounded">
        <h2 className=" text-base font-semibold">Create Weekly Xpert</h2>
        <TextInput placeholder="Xpert name" label="Name" />
        <div className="grid grid-cols-3 gap-6">
          <Select
            className=""
            label="Cohort"
            placeholder="Pick one"
            data={[
              { value: "one", label: "1.0" },
              { value: "two", label: "1.1" },
              { value: "three", label: "2.0" },
              { value: "four", label: "2.1" },
            ]}
          />
          <Select
            className=""
            label="Course"
            placeholder="Pick one"
            data={[
              { value: "pm", label: "Product Mangement" },
              { value: "fd", label: "Frontend Development" },
              { value: "bd", label: "Baclend Development" },
              { value: "md", label: "MobileApp Development" },
            ]}
          />
          <FileInput label="Xpert Picture" placeholder="Upload image" accept="image/png,image/jpeg" />
        </div>
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

export default Xpert;
