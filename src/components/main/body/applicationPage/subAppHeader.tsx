import React from "react";
import { jobhead } from "../../../../layout/jobHead";
import Cross from "../../../assets/Icon.png";
import Arr from "../../../../assets/La.png";
import { useState } from "react";
import { Button, Text, Modal, TextInput } from "@mantine/core";
import { Add, Logout } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import Downloads from "../../../../assets/import.png";


const SubAppHeader = () => {
  return (
    <div className="flex justify-between pb-7 pt-6 px-5">
      <div className="flex gap-4 place-items-center">
        <img src={Arr.src} className="w-2" />
        <p className="text-[#252735] text-sm font-semibold">Back to Jobs</p>
      </div>
      <div className="flex gap-8">
        <TextInput placeholder="Search with name or id"  />
        <Button
          className="text-[#514747] hover:bg-[#E5E5E5] text-[13px] font-bold"
          leftIcon={<img src={Downloads.src} className="w-[18px]" />}
          classNames={{
            root: "border-[#DBD9D9] rounded-lg py-[9px] px-[70px]",
          }}
        >
          Export
        </Button>
      </div>
    </div>
  );
};

export default SubAppHeader;