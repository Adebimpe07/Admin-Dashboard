import {
    Button,
    FileInput,
    Menu,
    Modal,
    MultiSelect,
    Select,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import Search from "../../../../assets/search.png";
import Cross from "../../../../assets/Icon.png";
import Elipse from "../../../../assets/Ellipse 8.png";
import Cloud from "../../../../assets/cloud.png";
import { RichTextEditor } from "@mantine/rte";
import Link from "next/link";
import { contentData } from "../../../../layout/contentData";

const MemberSubHeader = ({ route }) => {
    const [opened, setOpened] = useState(false);

    const UploadJobModal = () => (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Create New Tech Star"
            size="xl">
            <Text className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
                        Member Details
                    </h1>

                    <div className="flex gap-4">
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
                        <Select
                            className="flex-1"
                            label="Course"
                            data={[
                                {
                                    value: "fulltime",
                                    label: "Front-end Management",
                                },
                                {
                                    value: "remote",
                                    label: "Back-end Management",
                                },
                                {
                                    value: "hybrid",
                                    label: "Project Management",
                                },
                                {
                                    value: "mobile",
                                    label: "Mobile App Development",
                                },
                                { value: "ui", label: "UI/UX" },
                            ]}
                        />
                    </div>
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="Name"
                    />
                    <div className="flex gap-4">
                        <TextInput
                            size="sm"
                            className="focus:border-inherit flex-1"
                            label="Email"
                        />
                        <TextInput
                            size="sm"
                            className="focus:border-inherit flex-1"
                            label="Phone No"
                        />
                    </div>
                </div>
                <div className="flex flex-col  gap-4">
                    <p>Featured image</p>
                    <FileInput
                        placeholder="Browse and chose the files you want to upload from your computer"
                        icon={<img src={Cloud.src} className="w-6" />}
                        accept="image/png,image/jpeg"
                        className="bg-[#EBFAF3]"
                    />
                    <button className="bg-[#38CB89] text-[white] w-full py-2 rounded">
                        Add
                    </button>
                </div>
            </Text>
        </Modal>
    );

    return (
        <div className="flex justify-between  px-5">
            <div className="flex gap-9">
                {contentData.map((item, idx) => (
                    <Link href={item.href}>
                        <div
                            key={idx}
                            className={
                                route === idx
                                    ? " text-[#4A4C58] cursor-pointer"
                                    : "text-[#948E8E] cursor-pointer"
                            }>
                            {item.name}

                            <div
                                className={
                                    route === idx
                                        ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2"
                                        : "w-7 h-1 mx-auto border rounded-md mt-2.5"
                                }></div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex gap-4">
                <TextInput
                    className="w-[180px]"
                    placeholder="Search with Name"
                    radius="md"
                    rightSection={<img src={Search.src} className="w-[14px]" />}
                />

                <Button
                    className="bg-[#38CB89] hover:bg-[#38CB89] w-[141px] h-[34px] text-[13px]"
                    leftIcon={<img src={Cross.src} className="w-4" />}
                    onClick={() => setOpened(true)}>
                    <p>New ATS</p>
                    <UploadJobModal />
                </Button>
            </div>
        </div>
    );
};

export default MemberSubHeader;
