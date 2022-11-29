import { Modal, Stack, TextInput } from "@mantine/core";
import React from "react";
import CheckEmail from "./checkEmail";

const Emailmodal = ({ opened, setOpened, setOopened, oopened }) => {
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        classNames={{
          root: "w-[30rem] m-auto !gap-0",
          header: "!mb-0",
        }}
        centered
      >
        <Stack sx={{ maxWidth: 380 }} mx="auto">
          <h1>Password Reset</h1>
          <TextInput
            label="Please enter your email"
            placeholder="email@gmail.com"
            classNames={{
              label: "!pt-0",
            }}
          />

          <CheckEmail
            oopened={oopened}
            setOopened={setOopened}
            setOpened={setOpened}
          />
        </Stack>
      </Modal>
    </div>
  );
};

export default Emailmodal;
