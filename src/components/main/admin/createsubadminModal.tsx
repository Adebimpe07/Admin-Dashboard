import {
  Button,
  FileInput,
  Modal,
  MultiSelect,
  TextInput,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import { Add } from "iconsax-react";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import FormContext from "../../../context/store";
import axios from "axios";
import { PasswordInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Stack } from "@mantine/core";

const CreatesubadminModal = () => {
  const [opened, setOpened] = useState(false);
  const [visible, { toggle }] = useDisclosure(false);

  const { subadminForm } = useContext(FormContext);
  const router = useRouter();

  const handleAddSubadmin = () => {
    console.log(subadminForm.values);
    var config = {
      method: "post",
      url: "http://atsbk.afexats.com/api/v1/account/admin/register",
      data: { ...subadminForm.values },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
            <TextInput
              placeholder="First name"
              label="First name"
              {...subadminForm.getInputProps("first_name")}
              className="w-[17rem]"
            />
            <TextInput
              placeholder="Last name"
              label="Last name"
              {...subadminForm.getInputProps("last_name")}
              className="w-[17rem]"
              visible={visible}
              onVisibilityChange={toggle}
            />
            <PasswordInput
              placeholder="password"
              label="Password"
              className="w-[17rem]"
              {...subadminForm.getInputProps("password")}
              visible={visible}
              onVisibilityChange={toggle}
            />
            <PasswordInput
              placeholder="Confirm password"
              label="Password"
              className="w-[17rem]"
              {...subadminForm.getInputProps("confirm_password")}
            />
            <TextInput
              placeholder="email"
              label="Email"
              className="w-[17rem]"
              {...subadminForm.getInputProps("email")}
            />
            {/* <MultiSelect
              label="Permission Level"
              placeholder="Pick one"
              data={permissionLevel}
              className="w-[17em]"
              // {...subadminForm.getInputProps("")}
            /> */}
            <TextInput
              placeholder="username"
              label="Username"
              className="w-[17rem]"
              {...subadminForm.getInputProps("username")}
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
              // {...subadminForm.getInputProps("")}
            />
          </div>
          <Button
            onClick={handleAddSubadmin}
            py="sm"
            className="bg-greenButton hover:bg-greenButton"
          >
            Add Sub admin
          </Button>
        </form>
      </Modal>
    </>
  );
};

export default CreatesubadminModal;
