import React from "react";
import { Edit2 } from "iconsax-react";
import Link from "next/link";
import { IconUpload } from "@tabler/icons";
import { useState } from "react";
import { Button, FileInput, Modal, Textarea, TextInput } from "@mantine/core";

const editCourse = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div>
      <Edit2
        size="17"
        color="#38CB89"
        variant="Bulk"
        onClick={() => setOpened(true)}
      />
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <div className="flex flex-col items-center flex-1 ">
          <div className="bg-white px-10 rounded-lg flex flex-col gap-1 w-[40rem]">
            <h1 className="font-semibold text-2xl">Edit Course</h1>
            <TextInput label="Course Name" />
            <TextInput label="Title" />

            <Textarea
              label="Description"
              classNames={{
                label: "!text-base",
              }}
              placeholder="Course Description"
              autosize
              minRows={2}
              maxRows={4}
            />

            <div className="flex items-center justify-center mt-8 mb-6">
              <FileInput
                label=""
                placeholder="Upload picture"
                icon={<IconUpload size={14} />}
                classNames={{
                  label: "text-align:center",
                }}
              />
            </div>

            <Link href="/courses">
              <Button className="bg-greenButton hover:bg-greenButton w-full mx-auto text-base mt-6">
                Edit
              </Button>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default editCourse;
