import React, { useContext, useState } from "react";
import { NotificationDrop } from "../../../../pages/assessments/categories";
import ProfilePicture from "../../../assets/Avatar.png";
import AdminPic from "../../../assets/Admin.svg";
import CreatesubadminModal from "./createsubadminModal";
import { StaticImageData } from "next/image";
import Admin from "../admin/adminActivities";
import { ActionIcon, Menu, Modal, TextInput } from "@mantine/core";
import { Edit2, SearchNormal1 } from "iconsax-react";
import { SubAdminData } from "../../../layout/adminData";
import { Icon } from "@iconify/react";
import { EditSubAdminModal } from "./editAdminModal";
import { DeleteSubAdminModal } from "./deleteAdmin";
import profile from "../notification_ProfilePicture";
import axios from "axios";
import FormContext from "../../../context/store";
import { useRouter } from "next/router";

const MenuDrop = () => {
  const initialValues: { opened: boolean; component: React.ReactNode } = {
    opened: false,
    component: null,
  };
  const [subAdminModal, setSubAdminModal] = useState(initialValues);

  function handleEdit() {
    setSubAdminModal({
      opened: true,
      component: <EditSubAdminModal />,
    });
  }
  const [subAdminDelModal, setSubAdminDelModal] = useState(initialValues);
  function handleDelete() {
    setSubAdminDelModal({
      opened: true,
      component: <DeleteSubAdminModal />,
    });
  }

  return (
    <>
      <Menu>
        <Menu.Target>
          <button className="m-1">
            <Icon icon="bi:three-dots-vertical" color="gray" width="15" />
          </button>
        </Menu.Target>

        <Menu.Dropdown className="">
          <Menu.Item onClick={handleEdit}>Edit</Menu.Item>
          <Menu.Item onClick={handleDelete}>Delete</Menu.Item>
          <Menu.Divider />
        </Menu.Dropdown>
      </Menu>
      <Modal
        opened={subAdminModal.opened}
        onClose={() => setSubAdminModal(initialValues)}
      >
        {subAdminModal.component}
      </Modal>
      <Modal
        opened={subAdminDelModal.opened}
        onClose={() => setSubAdminDelModal(initialValues)}
      >
        {subAdminDelModal.component}
      </Modal>
    </>
  );
};

interface ISubAdminCard {
  picture: StaticImageData;
  name: string;
  title: string;
}

function SubAdminCard({ picture, name, title }: ISubAdminCard) {
  var config = {
    method: "get",
    url: "http://1atsbk.afexats.com/api/v1/account/all",
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="relative min-w-max gap-1 p-4 bg-[#F9FAFB] flex flex-col justify-center items-center">
      <img className="rounded-full" width="80" src={picture.src} alt="" />
      <div className="text-[#4A4C58]">
        <p className="text-sm">{name}</p>
        <p className="text-xs text-center">{title}</p>
      </div>
      <ActionIcon className="absolute right-0 top-0 m-1">
        <MenuDrop />
      </ActionIcon>
    </div>
  );
}

const admin = () => {
  type headerprops = {
    notificationCount: string;
    adminProfilePicture: StaticImageData;
  };

  const HeaderData: headerprops = {
    notificationCount: "2",
    adminProfilePicture: ProfilePicture,
  };

  const [value, setValue] = useState("");

  return (
    <div className="pt-6 h-screen flex flex-col flex-1 bg-[#e5e5e5]">
      <header className="flex justify-between border-b border-[#DBD9D9] px-4">
        <h1 className="text-2xl font-semibold text-[#4A4C58] pb-[1.41rem]">
          Admin
        </h1>
        <div className="flex gap-2 items-center">
          <NotificationDrop />
          <img width="40" src={AdminPic.src} alt="" />
        </div>
      </header>
      <main className="bg-[#fff] mx-10 my-4 rounded-lg px-6 pt-6 grid grid-cols-2 gap-8 overflow-auto">
        <div className="px-6 flex flex-col overflow-auto">
          <div className="flex flex-col items-center bg-[#fff]">
            <div className="relative">
              <img
                width="250"
                className=" bg-[#F9FAFB] "
                src={AdminPic.src}
                alt=""
              />
              <span className="p-[0.125rem] bg-[#38CB89] right-2 bottom-2 rounded-full absolute border-b border-[#fff]">
                <Edit2 size="17" color="#FFF" variant="Bulk" />
              </span>
            </div>

            <h1 className="self-center">Avatar Cheese</h1>
            <p className="text-[#38CB89] self-center">Admin</p>
          </div>
          <Admin />
        </div>
        <div className="flex flex-col gap-4 overflow-auto">
          <header className="flex justify-between items-center flex-wrap">
            <h1 className="text-[#4A4C58] font-bold text-lg">Sub admin</h1>

            <CreatesubadminModal />
          </header>

          <TextInput
            icon={<SearchNormal1 size="16" />}
            placeholder="Search admin by name"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />

          <div className="overflow-auto grid grid-cols-2 gap-2">
            {SubAdminData.map((props, idx) =>
              props.name
                .toLocaleLowerCase()
                .includes(value.toLocaleLowerCase()) ? (
                <SubAdminCard key={idx} {...props} />
              ) : null
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
export default admin;
