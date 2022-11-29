import { Button, Modal, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useRouter } from "next/router";
import React, { useState } from "react";

const checkEmail = ({ oopened, setOopened, setOpened }) => {
  return (
    <div className="self-center">
      <Button
        className="bg-greenButton hover:bg-greenButton w-[10rem] text-sm mx-auto"
        onClick={() => setOopened(true)}
      >
        Submit
      </Button>
      <Modal
        opened={oopened}
        onClose={() => setOopened(false)}
        classNames={{
          root: "m-auto",
          header: "!mb-0",
        }}
        centered
      >
        <div className="flex flex-col">
          <p>
            A link has been sent to your email, click the link to reset your
            password.
          </p>
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

export default checkEmail;
