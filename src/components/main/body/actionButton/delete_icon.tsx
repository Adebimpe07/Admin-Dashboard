import React from "react";
import { useState } from "react";
import { Button, Modal } from "@mantine/core";
import { Trash } from "iconsax-react";

const DeleteIcon = () => {
  const [opened, setOpened] = useState(false);
  const DeleteModal = () => (
    <Modal opened={opened} onClose={() => setOpened(false)} title="Edit Cohort">
      <div className="flex flex-wrap gap-4 text-center leading-8">
        You are about to delete the selected Category. Kindly click the delete
        button below to confirm this action
      </div>
      <div className="flex justify-between py-6">
        <Button className="bg-[#38CB89] hover:bg-[#38CB89]">Cancel</Button>
        <Button className="bg-[red] hover:bg-[red]">Delete</Button>
      </div>
    </Modal>
  );

  return (
    <div className="">
      <button
        className=" text-sm text-[#514747]"
        onClick={() => setOpened(true)}
      >
        <Trash size="17" color="red" />
        <DeleteModal />
      </button>
    </div>
  );
};
export default DeleteIcon;
