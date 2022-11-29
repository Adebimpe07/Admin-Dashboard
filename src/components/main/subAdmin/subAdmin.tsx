import { Button, Modal, PasswordInput, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { StaticImageData } from "next/image";
import React, { useState } from "react";

import { SubAdminData } from "../../../layout/subAdminData";

type subadminprops = {
  profile_picture?: StaticImageData;
  admin_name: string;
  admin_email: string;
  access_level: string;
};

const subAdmin = () => {
  const [opened, setOpened] = useState(false);
  const [visible, { toggle }] = useDisclosure(false);

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
        <h1 className="text-[#4A4C58]">Welcome {admin_name}</h1>
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
              <Button
                className="bg-[#1e1f1f] hover:bg-[#1e1f1f] w-[10rem] h-8 text-sm"
                onClick={() => setOpened(true)}
              >
                Change password
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h2 className="py-2">Admin Name</h2>
                <span className="border border-[#DBD9D9] rounded-lg p-2 inline-block w-full bg-mainBg">
                  {admin_name}
                </span>
              </div>
              <div>
                <h2 className="py-2">Admin Email</h2>
                <span className="border border-[#DBD9D9] rounded-lg p-2 inline-block w-full bg-mainBg">
                  {admin_email}
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
          <Button
            className="bg-greenButton hover:bg-greenButton w-[10rem] h-8 text-sm mx-auto"
            onClick={() => {}}
          >
            Save password
          </Button>
        </Stack>
      </Modal>
      ;
    </div>
  );
};
export default subAdmin;
