import React, { useContext, useEffect, useState } from "react";
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
import { useStore } from "../../../store";

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
  first_name: string;
  last_name: string;
  username: string;
  is_admin: boolean;
  is_application_manager: boolean;
  is_assessment_manager: boolean;
  is_content_manager: boolean;
  is_membership_manager: boolean;
  is_staff: boolean;
}

function SubAdminCard({
  first_name,
  last_name,
  username,
  is_admin,
  is_application_manager,
  is_assessment_manager,
  is_content_manager,
  is_membership_manager,
  is_staff,
}: ISubAdminCard) {
<<<<<<< HEAD
  return (
    <div className="relative min-w-max gap-1 p-4 bg-[#F9FAFB] flex flex-col justify-center items-center">
      <img className="rounded-full" width="80" src={AdminPic.src} alt="" />
      <div className="text-[#4A4C58]">
        <p className="text-sm">{`${first_name} ${last_name}`}</p>
        <p className="text-xs text-center">
          {is_admin
            ? "Admin"
            : is_application_manager
            ? "Application Manager"
            : is_assessment_manager
            ? "Assessment Manager"
            : is_content_manager
            ? "Content Manager"
            : is_membership_manager
            ? "Membership Manager"
            : "Staff"}
        </p>
      </div>
      <ActionIcon className="absolute right-0 top-0 m-1">
        <MenuDrop />
      </ActionIcon>
    </div>
  );
=======
    return (
        <div className="relative min-w-max gap-1 p-4 bg-[#F9FAFB] flex flex-col justify-center items-center">
            <img
                className="rounded-full"
                width="80"
                src={AdminPic.src}
                alt=""
            />
            <div className="text-[#4A4C58]">
                <p className="text-sm">{`${first_name} ${last_name}`}</p>
                <p className="text-xs text-center">
                    {is_admin
                        ? "Admin"
                        : is_application_manager
                            ? "Application Manager"
                            : is_assessment_manager
                                ? "Assessment Manager"
                                : is_content_manager
                                    ? "Content Manager"
                                    : is_membership_manager
                                        ? "Membership Manager"
                                        : "Staff"}
                </p>
            </div>
            <ActionIcon className="absolute right-0 top-0 m-1">
                <MenuDrop />
            </ActionIcon>
        </div>
    );
>>>>>>> 0dbc3f81e7d0cc7df6cfeeb2b0f993f1b58d5b7c
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
  const [SubAdminData, setSubAdminData] = useState([]);
  const { token } = useContext(FormContext);
  const [loading, setLoading] = useState(false);

  const fetchSubAdmin = () => {
    setLoading(true);
    var config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BASE_URL_1}/api/v1/account/all`,
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    };

<<<<<<< HEAD
    axios(config)
      .then(function (response) {
        setSubAdminData(response.data.data.results);
        console.log(response.data.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchSubAdmin();
  }, []);

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

            <CreatesubadminModal fetchSubAdmin={fetchSubAdmin} />
          </header>

          <TextInput
            icon={<SearchNormal1 size="16" />}
            placeholder="Search admin by name"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />

          <div className="overflow-auto grid grid-cols-2 gap-2">
            {SubAdminData.map((props, idx) =>
              props.first_name
                .toLocaleLowerCase()
                .includes(value.toLocaleLowerCase()) ||
              props.last_name
                .toLocaleLowerCase()
                .includes(value.toLocaleLowerCase()) ? (
                <SubAdminCard key={idx} {...props} />
              ) : null
            )}
          </div>
=======
    const [value, setValue] = useState("");
    const [SubAdminData, setSubAdminData] = useState([]);
    const { token } = useContext(FormContext);

    const fetchSubAdmin = () => {
        var config = {
            method: "get",
            url: "`${process.env.NEXT_PUBLIC_BASE_URL_1}`/api/v1/account/all",
            headers: {
                Authorization: `Bearer ${token.access}`,
            },
        };

        axios(config)
            .then(function (response) {
                setSubAdminData(response.data.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchSubAdmin();
    }, []);

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
                        <h1 className="text-[#4A4C58] font-bold text-lg">
                            Sub admin
                        </h1>

                        <CreatesubadminModal />
                    </header>

                    <TextInput
                        icon={<SearchNormal1 size="16" />}
                        placeholder="Search admin by name"
                        value={value}
                        onChange={(event) =>
                            setValue(event.currentTarget.value)
                        }
                    />

                    <div className="overflow-auto grid grid-cols-2 gap-2">
                        {SubAdminData.map((props, idx) =>
                            props.first_name
                                .toLocaleLowerCase()
                                .includes(value.toLocaleLowerCase()) ||
                                props.last_name
                                    .toLocaleLowerCase()
                                    .includes(value.toLocaleLowerCase()) ? (
                                <SubAdminCard key={idx} {...props} />
                            ) : null
                        )}
                    </div>
                </div>
            </main>
>>>>>>> 0dbc3f81e7d0cc7df6cfeeb2b0f993f1b58d5b7c
        </div>
      </main>
    </div>
  );
};
export default admin;
