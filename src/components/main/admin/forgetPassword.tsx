import { Button, Modal, PasswordInput, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";

const forgetPassword = () => {
  const [visible, { toggle }] = useDisclosure(false);
  const [opened, setOpened] = useState(false);
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      classNames={{
        root: "w-[30rem] m-auto",
      }}
      centered
    >
      <Stack sx={{ maxWidth: 380 }} mx="auto">
        <h1>Password Reset</h1>
        <PasswordInput
          label="New Password"
          visible={visible}
          onVisibilityChange={toggle}
        />
        <PasswordInput
          label="Confirm password"
          visible={visible}
          onVisibilityChange={toggle}
        />
        <div className="flex">
          <Button
            className="bg-greenButton hover:bg-greenButton w-[10rem] h-8 text-sm mx-auto"
            onClick={() => {}}
          >
            Cancel
          </Button>
          <Button
            className="bg-greenButton hover:bg-greenButton w-[10rem] h-8 text-sm mx-auto"
            onClick={() => {}}
          >
            Submit
          </Button>
        </div>
      </Stack>
    </Modal>
  );
};

export default forgetPassword;
