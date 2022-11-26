import {
  Button,
  FileInput,
  Modal,
  MultiSelect,
  TextInput,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import { Add } from "iconsax-react";
import { useState } from "react";

const CreatesubadminModal = () => {
  const [opened, setOpened] = useState(false);

  const permissionLevel = [
    { value: "content_manager", label: "Content Manager" },
    { value: "membership_manager", label: "Membership Manager" },
    {
      value: "application_manager",
      label: "Application Manager",
    },
    { value: "assessment_manager", label: "Assessment Manager" },
  ];
  return (
    <>
      <Button
        className="bg-greenButton hover:bg-greenButton w-[10rem] h-10 text-base"
        leftIcon={<Add size="17" variant="Outline" />}
        onClick={() => setOpened(true)}
      >
        Add Admin
      </Button>
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <form className="flex flex-col">
          <div className="flex flex-wrap justify-between">
            <TextInput placeholder="name" label="Name" className="w-[17rem]" />
            <TextInput
              placeholder="password"
              label="Password"
              className="w-[17rem]"
            />
            <TextInput
              placeholder="email"
              label="Email"
              className="w-[17rem]"
            />
            <MultiSelect
              label="Permission Level"
              placeholder="Pick one"
              data={permissionLevel}
              className="w-[17em]"
            />
          </div>
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
          <Button py="sm" className="bg-greenButton hover:bg-greenButton">
            Add Sub admin
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default CreatesubadminModal;
