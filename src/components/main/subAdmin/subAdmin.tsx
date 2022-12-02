import { Button, Modal, PasswordInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { StaticImageData } from "next/image";
import ChangePassword from "./changePassword";
import React, { useContext, useState } from "react";
import FormContext from "../../../context/store";
import { SubAdminData } from "../../../layout/subAdminData";

type subadminprops = {
  profile_picture?: StaticImageData;
  admin_name: string;
  admin_email: string;
  position: string;
};

const subAdmin = () => {
<<<<<<< HEAD
  const { admin, token } = useContext(FormContext);

  const { profile_picture, admin_name, admin_email, position } = SubAdminData;
  return (
    <div className="pt-6 h-screen flex flex-col flex-1 bg-mainBg">
      <header className="items-center flex justify-end border-b border-[#DBD9D9] px-4 gap-2 pb-[1.02rem]">
        <img
          className="rounded-full"
          width="40"
          src={profile_picture.src}
          alt=""
        />
        <h1 className="text-[#4A4C58]">Welcome {admin.username}</h1>
      </header>
      <main className="bg-white mx-10 my-8 flex flex-col rounded-lg px-6 pt-6">
        <header className="border-b border-[#DBD9D9] pb-2">
          <h1 className=" text-[#4A4C58] font-semibold text-xl">
            Sub Admin Profile
          </h1>
        </header>
        <div className="flex flex-1 p-10 gap-4">
          <img
            className="rounded-full"
            width="200"
            src={profile_picture.src}
            alt=""
          />
          <div className="flex-1">
            <div className="flex justify-between">
              <h1 className="font-semibold">Profile Information</h1>
              <ChangePassword />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="py-2">Admin Name</h2>
                <span className="border border-[#DBD9D9] rounded-lg p-2 inline-block w-full bg-mainBg">
                  {admin.username}
                </span>
              </div>
              <div>
                <h2 className="py-2">Admin Email</h2>
                <span className="w-fit border border-[#DBD9D9] rounded-lg p-2 inline-block w-full bg-mainBg">
                  {admin.email}
                </span>
              </div>
              <div>
                <h2 className="py-2">Access Level</h2>
                <span className="border border-[#DBD9D9] rounded-lg p-2 inline-block w-full bg-mainBg">
                  {position}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
=======
    const [opened, setOpened] = useState(false);
    const [visible, { toggle }] = useDisclosure(false);
    const { admin, token } = useContext(FormContext);
    const [err, setErr] = useState("");

    const resetPasswordForm = useForm({
        initialValues: {
            new_password: "",
            confirm_password: "",
            old_password: "",
        },
    });

    const resetPassword = (e) => {
        if (
            resetPasswordForm.values.new_password ===
            resetPasswordForm.values.confirm_password
        ) {
            var data = resetPasswordForm.values;

            var config = {
                method: "patch",
                url: ``${ process.env.NEXT_PUBLIC_BASE_URL_1 }`/api/v1/account/change-password/${admin.user_id}/`,
                    headers: {
                Authorization: `Bearer ${token.access}`,
                },
            data: data,
            };

        axios(config)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    } else setErr("Passwords don't match");
};

const { profile_picture, admin_name, admin_email, access_level } =
    SubAdminData;
return (
    <div className="pt-6 h-screen flex flex-col flex-1 bg-mainBg">
        <header className="items-center flex justify-end border-b border-[#DBD9D9] px-4 gap-2 pb-[1.02rem]">
            <img
                className="rounded-full"
                width="40"
                src={profile_picture.src}
                alt=""
            />
            <h1 className="text-[#4A4C58]">Welcome {admin.username}</h1>
        </header>
        <main className="bg-white mx-10 my-8 flex flex-col rounded-lg px-6 pt-6">
            <header className="border-b border-[#DBD9D9] pb-2">
                <h1 className=" text-[#4A4C58] font-semibold text-xl">
                    Sub Admin Profile
                </h1>
            </header>
            <div className="flex flex-1 p-10 gap-4">
                <img
                    className="rounded-full"
                    width="200"
                    src={profile_picture.src}
                    alt=""
                />
                <div className="flex-1">
                    <div className="flex justify-between">
                        <h1 className="font-semibold">
                            Profile Information
                        </h1>
                        <Button
                            className="bg-[#1e1f1f] hover:bg-[#1e1f1f] w-[10rem] h-8 text-sm"
                            onClick={() => setOpened(true)}>
                            Change password
                        </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h2 className="py-2">Admin Name</h2>
                            <span className="border border-[#DBD9D9] rounded-lg p-2 inline-block w-full bg-mainBg">
                                {admin.username}
                            </span>
                        </div>
                        <div>
                            <h2 className="py-2">Admin Email</h2>
                            <span className="border border-[#DBD9D9] rounded-lg p-2 inline-block w-full bg-mainBg">
                                {admin.email}
                            </span>
                        </div>
                        <div>
                            <h2 className="py-2">Access Level</h2>
                            <span className="border border-[#DBD9D9] rounded-lg p-2 inline-block w-full bg-mainBg">
                                {access_level}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            classNames={{
                root: "w-[30rem] m-auto",
            }}
            centered>
            <Stack sx={{ maxWidth: 380 }} mx="auto">
                <PasswordInput
                    label="Old Password"
                    visible={visible}
                    onVisibilityChange={toggle}
                    {...resetPasswordForm.getInputProps("old_password")}
                />
                <PasswordInput
                    label="New Password"
                    visible={visible}
                    onVisibilityChange={toggle}
                    {...resetPasswordForm.getInputProps("new_password")}
                />
                <PasswordInput
                    label="Confirm password"
                    visible={visible}
                    onVisibilityChange={toggle}
                    {...resetPasswordForm.getInputProps("confirm_password")}
                />
                <Button
                    className="bg-greenButton hover:bg-greenButton w-[10rem] h-8 text-sm mx-auto"
                    onClick={(e) => resetPassword(e)}>
                    Save password
                </Button>
                <span className="text-red ">{err}</span>
            </Stack>
        </Modal>
        ;
    </div>
);
>>>>>>> 0dbc3f81e7d0cc7df6cfeeb2b0f993f1b58d5b7c
};
export default subAdmin;
