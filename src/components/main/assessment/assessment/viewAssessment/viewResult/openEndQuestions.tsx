import { Button, Modal, Textarea } from "@mantine/core";
import React, { useState } from "react";

const openEndQuestions = ({ color }) => {
  const [opened, setOpened] = useState(false);
  return (
    <p onClick={() => setOpened(true)} className={` ${color}  font-semibold `}>
      <Modal opened={opened} onClose={() => setOpened(false)} fullScreen>
        <div className="flex">
          {" "}
          <div className="flex-1">
            <Textarea
              placeholder="1. DebugBear is a site speed testing and monitoring service."
              label="DebugBear is a site speed testing and monitoring service."
              withAsterisk
            />
          </div>
          <div className="flex w-[117px] flex-col">
            <Button className="bg-greenButton hover:bg-greenButton">
              Mark as correct
            </Button>
            <Button className="bg-[#E64D45] hover:bg-[#E64D45]">
              Mark as incorrect
            </Button>
          </div>
        </div>
        <div className="flex">
          <Button className="bg-g[#F0F0F1] hover:bg-[#F0F0F1] text-[#E1261C]">
            Cancel
          </Button>
          <Button className="bg-red hover:bg-red">Save</Button>
        </div>
      </Modal>
      view questions
    </p>
  );
};

export default openEndQuestions;
