import React from "react";
import { Button, Modal, PasswordInput, Stack, TextInput } from "@mantine/core";

const passwordResetSuccess = ({ oopened, setOopened, setOpened }) => {
  return (
    <div className="self-center">
      <Button
        className="bg-greenButton hover:bg-greenButton w-[10rem] text-sm mx-auto"
        onClick={() => setOopened(true)}
      >
        Save password
      </Button>
      <Modal
        opened={oopened}
        onClose={() => setOopened(false)}
        classNames={{
          root: "m-auto w-[30rem] ",
          header: "!mb-0",
        }}
        centered
      >
        <div className="flex flex-col">
          <p>Password successfully changed.</p>
          <Button
            className="bg-greenButton hover:bg-greenButton w-[10rem] text-sm mx-auto my-4 self-center"
            onClick={() => {
              setOopened(false);
              setOpened(false);
            }}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default passwordResetSuccess;
