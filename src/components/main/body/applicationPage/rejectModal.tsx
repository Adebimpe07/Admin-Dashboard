import { Button, Checkbox, FileInput, MultiSelect, TextInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import { useState } from "react";

export const RejectModal = () => {
 
  const [checked, setChecked] = useState(false);

  return (
    <form className="flex flex-col gap-6">
        <h1 className="text-base text-[#4A4C58] pb-2 border-b border-[#DBD9D9] ">
          Reject Applicant
        </h1>
      <p className="text-[#514747] text-sm text-center">You are about to reject the selected applicant, kindly click the button below to confirm this action</p>
      <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} label="Send Mail" size="xs" />
      <button  className="bg-[#A83C3D] py-2 rounded text-white hover:bg-[#A83C3D]">
        Confirm
      </button>
    </form>
  );
};
