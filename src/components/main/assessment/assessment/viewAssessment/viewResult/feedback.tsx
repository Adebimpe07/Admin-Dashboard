import { Icon } from "@iconify/react";
import { Textarea } from "@mantine/core";
import React from "react";

const feedback = () => {
  return (
    <div>
      <div>
        <Icon icon="bi:emoji-smile" color="black" width="20" />
        <p>Not Satisfied</p>
      </div>
      <div>
        <Icon icon="bi:emoji-smile" color="black" width="20" />
        <p>Bad</p>
      </div>
      <div>
        <Icon icon="bi:emoji-smile" color="black" width="20" />
        <p>OK</p>
      </div>
      <div>
        <Icon icon="bi:emoji-smile" color="black" width="20" />
        <p>Just OK</p>
      </div>
      <div>
        <Icon icon="bi:emoji-smile" color="black" width="20" />
        <p>Very Satisfied</p>
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
