import React from "react";

const deleteAdmin = () => {
  return <div>deleteAdmin</div>;
};

export default deleteAdmin;

import { Button, FileInput, MultiSelect, TextInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons";

export const DeleteSubAdminModal = () => {
  return (
    <form className="flex flex-col">
      <div className="flex flex-wrap gap-4">
        You are about to delete the selected Admin. Kindly click the delete
        button below to confirm this action
      </div>
      <div className="flex">
        <span className="bg-[#38CB89] hover:bg-[#38CB89]">Cancel</span>
        <span className="bg-[#38CB89] hover:bg-[#38CB89]">Delete</span>
      </div>
    </form>
  );
};
