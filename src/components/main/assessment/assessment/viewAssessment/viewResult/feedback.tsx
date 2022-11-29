import { Icon } from "@iconify/react";
import { Textarea } from "@mantine/core";
import React from "react";

const feedback = () => {
  return (
    <div className="container bg-white ml-6 w-auto p-4   ">
      <div className="flex gap-2 w-full ">
        <div className="flex flex-col items-center">
          <Icon icon="bi:emoji-smile" className="bg-gray-600 rounded-full" color="white" width="20" />
          <p>Not Satisfied</p>
        </div>
        <div className="flex flex-col items-center">
          <Icon icon="bi:emoji-smile" color="black" width="20" />
          <p>Bad</p>
        </div>
        <div className="flex flex-col items-center">
          <Icon icon="bi:emoji-smile" color="black" width="20" />
          <p>OK</p>
        </div>
        <div className="flex flex-col items-center">
          <Icon icon="bi:emoji-smile" color="black" width="20" />
          <p>Just OK</p>
        </div>
        <div className="flex flex-col items-center">
          <Icon icon="bi:emoji-smile" color="black" width="20" />
          <p>Very Satisfied</p>
        </div>
      </div>
      <Textarea
        placeholder="Other details"
        label="Other details"
        withAsterisk
      />
    </div>
  );
};

export default feedback;
