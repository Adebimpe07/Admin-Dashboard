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
import { useForm } from "@mantine/form";

const CreatesubadminModal = ({ fetchSubAdmin }) => {
  const [opened, setOpened] = useState(false);
  const [visible, { toggle }] = useDisclosure(false);
  const [err, setErr] = useState("");

  const subadminForm = useForm({
    initialValues: {
      first_name: "",
      username: "",
      gender: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      position: "",
    },
  });

  const router = useRouter();
  const [profile, setProfile] = useState(null);

  const handleAddSubadmin = (e) => {
    if (
      subadminForm.values.password === subadminForm.values.confirm_password &&
      subadminForm.values.password.length > 8
    ) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("first_name", subadminForm.values.first_name);
      formData.append("last_name", subadminForm.values.last_name);
      formData.append("username", subadminForm.values.username);
      formData.append("gender", subadminForm.values.gender);
      formData.append("email", subadminForm.values.email);
      formData.append("password", subadminForm.values.password);
      formData.append("confirm_password", subadminForm.values.confirm_password);
      formData.append("position", subadminForm.values.position);
      formData.append("profile_picture", profile, profile?.name);
      console.log({ ...subadminForm.values, profile: profile });
      var config = {
        method: "post",
        url: `${process.env.NEXT_PUBLIC_BASE_URL_1}/api/v1/account/admin/register`,
        data: formData,
      };

      axios(config)
        .then(function (response) {
          if (response.data.status === "success") {
            fetchSubAdmin();
            subadminForm.reset();
            setProfile(null);
            setOpened(false);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else
      setErr(
        "This password is too short. It must contain at least 8 characters."
      );
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
          <div className="grid grid-cols-2 justify-between">
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
            <span>
              <PasswordInput
                placeholder="Confirm password"
                label="Confirm password"
                className="w-[17rem]"
                {...subadminForm.getInputProps("confirm_password")}
              />
              <span className="p-1 text-red-600">{err}</span>
            </span>

            <TextInput
              placeholder="Position"
              label="Position"
              className="w-[17rem]"
              {...subadminForm.getInputProps("position")}
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
            <TextInput
              placeholder="email"
              label="Email"
              className="w-[17rem]"
              {...subadminForm.getInputProps("email")}
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
              value={profile}
              onChange={setProfile}
            />
          </div>
          <Button
            onClick={(e) => handleAddSubadmin(e)}
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
