import { Button, Modal, PasswordInput, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import PasswordModal from "./passwordModal";

const changePassword = () => {
  const [opened, setOpened] = useState(false);
  const [oopened, setOopened] = useState(false);
  return (
    <div>
      <Button
        className="bg-[#1e1f1f] hover:bg-[#1e1f1f] w-[10rem] h-8 text-sm"
        onClick={() => setOpened(true)}
      >
        Change password
      </Button>
      <PasswordModal
        opened={opened}
        setOpened={setOpened}
        oopened={oopened}
        setOopened={setOopened}
      />
    </div>
  );
};

export default changePassword;
