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

const ActionMenuDelete = () => {
  return (
    <div className="text-[#4A4C58] text-base">
      <p className="text-center text-sm">
        You are about to delete the selected cohort, kindly click the button
        below to confirm this acton.
      </p>
      <div className="flex justify-center">
        <button className="bg-[#A83C3D] py-2 w-full text-[white] rounded mt-8 text-base font-bold">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ActionMenuDelete;
