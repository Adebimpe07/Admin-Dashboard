import { Button, Modal } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";
import CreateCourses from "./createCourses";

const sucessModal = ({ opened, setOpened, coursesForm }) => {
  const router = useRouter();
  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      classNames={{
        root: "m-auto",
        header: "!mb-0",
      }}
      centered
    >
      <div className="flex flex-col">
        <p>Success! A new course was sucessfully created.</p>
        <Button
          className="bg-greenButton hover:bg-greenButton w-[10rem] text-sm mx-auto my-4 self-center"
          onClick={() => {
            setOpened(false);
            coursesForm.reset();
            router.push("/courses");
          }}
        >
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default sucessModal;
