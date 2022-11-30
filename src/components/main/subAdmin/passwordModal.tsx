import { Button, Modal, PasswordInput, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import PasswordResetSuccess from "./passwordResetSuccess";
const passwordModal = ({ opened, setOpened, setOopened, oopened }) => {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        classNames={{
          root: "w-[30rem] m-auto",
        }}
        centered
      >
        <Stack sx={{ maxWidth: 380 }} mx="auto">
          <PasswordInput
            label="Old Password"
            visible={visible}
            onVisibilityChange={toggle}
          />
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
          <PasswordResetSuccess
            setOpened={setOpened}
            oopened={oopened}
            setOopened={setOopened}
          />
        </Stack>
      </Modal>
    </div>
  );
};

export default passwordModal;
