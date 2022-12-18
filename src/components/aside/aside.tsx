import React, { useState } from "react";
import Logo from "../../assets/Afex_logo.png";
import { SideData } from "../../layout/sideData";
import { AdminData } from "../../layout/sideData";
import { Button, Text, Modal, TextInput } from "@mantine/core";
import { Add } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import Link from "next/link";
import { useStore } from "../../store";
import { useRouter } from "next/router";
import { useSessionStorage } from "@mantine/hooks";

const Sidebar = () => {
    const [selected, setSelected] = useState("Dashboard");
    const [selectedSub, setSelectedSub] = useState(null);
    const [opened, setOpened] = useState(false);
    const [collapse, setCollapse] = useSessionStorage({
        key: "collapse",
        defaultValue: false,
    });

    const UploadJobModal = () => (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Upload Job">
            <Text className="flex flex-col gap-4 " size="sm">
                <p className="text-base text-[#948E8E] pb-2">
                    Enter the details of the job
                </p>
                <h1 className="text-base text-greenButton border-b border-[#DBD9D9] pb-2">
                    Job Description
                </h1>

                <div className="flex gap-4 text-[#4a4c58] w-full">
                    <TextInput
                        placeholder="Job will be auto-generated"
                        label="Job"
                        className="w-[50%]"
                        disabled
                    />
                    <Select
                        className="flex-1"
                        label="Course"
                        data={[
                            {
                                value: "FrontEnd Development",
                                label: "FrontEnd Development",
                            },
                            {
                                value: "Backend Development",
                                label: "Backend Development",
                            },
                            {
                                value: "Product Management",
                                label: "Product Management",
                            },
                            {
                                value: "Mobile Development",
                                label: "Mobile Development",
                            },
                            { value: "UI/UX Design", label: "UI/UX Design" },
                        ]}
                    />
                </div>
                <Select
                    className="flex-1"
                    label="Cohort"
                    data={[
                        { value: "ATS 1.0", label: "ATS 1.0" },
                        { value: "ATS 1.1", label: "ATS 1.1" },
                        { value: "ATS 2.0", label: "ATS 2.0" },
                        { value: "ATS 2.2", label: "ATS 2.2" },
                    ]}
                />

                <Textarea
                    className="focus:border-inherit"
                    label="Job Requirements"
                    autosize
                    minRows={4}
                    maxRows={4}
                    size="xl"
                />
            </Text>
            <Button
                fullWidth
                className="bg-greenButton hover:bg-greenButton h-10 mx-auto text-lg my-4">
                Upload
            </Button>
        </Modal>
    );

    const [admin, setAdmin] = useStore.admin();
    const { pathname } = useRouter();

    return (
        <div className="pt-4 flex flex-col gap-4 w-[20rem]  overflow-auto h-full">
            <div className="border-b border-[#DBD9D9] pl-10 pb-4">
                <img width="120" src={Logo.src} alt="" />
            </div>
            <Button
                className="bg-greenButton hover:bg-greenButton w-[15rem] h-10 mx-auto text-lg"
                leftIcon={<Add size="17" variant="Outline" />}
                onClick={() => setOpened(true)}>
                <p>Upload job</p>
                <UploadJobModal />
            </Button>
            <div className="flex flex-col gap-4 pl-10 overflow-auto">
                <div className="flex flex-col gap-4">
                    {SideData.map((item, index) => {
                        return (
                            // item.heading !== "Content Management" && ( TODO:
                            <div
                                key={index}
                                className={
                                    collapse && item.sub_menu
                                        ? "flex flex-col gap-2"
                                        : ""
                                }>
                                <Link href={item.href}>
                                    <div
                                        key={index}
                                        className={
                                            item.href === pathname
                                                ? "menuItem active flex items-center gap-2"
                                                : "menuItem flex items-center gap-2"
                                        }
                                        onClick={() => {
                                            !item.sub_menu &&
                                                setCollapse(false);
                                            !item.sub_menu &&
                                                setSelectedSub(null);
                                            setSelected(item.heading);
                                            item.sub_menu
                                                ? setCollapse((val) => !val)
                                                : null;
                                        }}>
                                        {item.icon}
                                        <span>{item.heading}</span>
                                    </div>
                                </Link>
                                <div className="flex flex-col gap-2">
                                    {item.sub_menu && collapse
                                        ? item.sub_menu.map((el, id) => (
                                              <Link href={el.href}>
                                                  <div
                                                      key={id}
                                                      className={
                                                          pathname === el.href
                                                              ? "menuItem active flex items-center gap-2 ml-4"
                                                              : "menuItem flex items-center gap-2 ml-4"
                                                      }
                                                      onClick={() =>
                                                          setSelectedSub(
                                                              el.heading
                                                          )
                                                      }>
                                                      {el.icon}
                                                      <span>{el.heading}</span>
                                                  </div>
                                              </Link>
                                          ))
                                        : null}
                                </div>
                            </div>
                            // )
                        );
                    })}
                </div>
                <div className="menuItem">
                    <h2 className="text-[#A1A1AA] pb-2">ADMIN</h2>

                    <div className="flex flex-col gap-3 flex-1">
                        {AdminData.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className={
                                        selected === item.heading
                                            ? "menuItem flex active items-center gap-2"
                                            : "menuItem flex items-center gap-2"
                                    }
                                    onClick={() => setSelected(item.heading)}>
                                    {item.icon}
                                    {item.heading === "Logout" ? (
                                        <span
                                            onClick={() => {
                                                setAdmin(null);
                                            }}>
                                            {item.heading}
                                        </span>
                                    ) : (
                                        <Link href={item.href}>
                                            <span>{item.heading}</span>
                                        </Link>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
