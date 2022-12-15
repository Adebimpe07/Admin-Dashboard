import { Button, Modal, PasswordInput, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import axios from "axios";
import { StaticImageData } from "next/image";
import ChangePassword from "./changePassword";
import React, { useContext, useState } from "react";
import FormContext from "../../../context/store";
import { SubAdminData } from "../../../layout/subAdminData";
import Header from "../../header/index";

// type subadminprops = {
//   profile_picture?: StaticImageData;
//   admin_name: string;
//   admin_email: string;
//   position: string;
// };

const subAdmin = () => {
  const { admin, token } = useContext(FormContext);

  const { profile_picture, admin_name, admin_email, position } = SubAdminData;
  return (
    <div className="pt-6 h-screen flex flex-col flex-1 bg-mainBg">
      <Header name="Sub Admin Profile" />
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
                <span className="border border-[#DBD9D9] rounded-lg p-2 inline-block w-full bg-mainBg">
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
};
export default subAdmin;
