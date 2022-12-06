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
import Link from "next/link";
import { contentData } from "../../../../layout/contentData";
import { TimeInput } from '@mantine/dates';
import { IconClock } from '@tabler/icons';


const AttendanceSubHeader = ({ route }) => {

    const [openedOne, setOpenedOne] = useState(false);
    const [openedTwo, setOpenedTwo] = useState(false)

    const UploadLocationModal = () => (
        <Modal
            opened={openedOne}
            onClose={() => setOpenedOne(false)}
            title="Edit location"
            size="xl">
            <Text className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-base text-[#948E8E] pb-2">
                        Edit building coordinates
                    </h1>

                    <div className="flex gap-4">
                        <TextInput
                            size="sm"
                            className="flex-1 focus:border-inherit"
                            label="Lattitude 1"
                        />
                        <TextInput
                            size="sm"
                            className="flex-1 focus:border-inherit"
                            label="Lattitude 2"
                        />
                    </div>
                    <div className="flex gap-4">
                        <TextInput
                            size="sm"
                            className="flex-1 focus:border-inherit"
                            label="Longitude 1"
                        />
                        <TextInput
                            size="sm"
                            className="flex-1 focus:border-inherit"
                            label="Longitude 2"
                        />
                    </div>

                </div>
                <button className="bg-[#38CB89] text-[white] w-full py-2 rounded">
                    Save
                </button>
            </Text>
        </Modal>
    );

    const UploadTimeModal = () => (
        <Modal
            opened={openedTwo}
            onClose={() => setOpenedTwo(false)}
            title="Edit time"
            size="xl">
            <Text className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-base text-[#948E8E] pb-2">
                        Edit resumption and closing time
                    </h1>
                    <div className="flex gap-4">
                        <TimeInput
                            label="Resumption time"
                            format="12"
                            amLabel="am"
                            pmLabel="pm"
                            clearable
                            icon={<IconClock size={16} />}
                            defaultValue={new Date()}
                        />
                        <TimeInput
                            label="Close time"
                            format="12"
                            amLabel="am"
                            pmLabel="pm"
                            clearable
                            icon={<IconClock size={16} />}
                            defaultValue={new Date()}
                        />
                    </div>
                </div>
                <button className="bg-[#38CB89] text-[white] w-full py-2 rounded">
                    Save
                </button>
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
                <Button
                    className="bg-[#38CB89] hover:bg-[#38CB89] w-[141px] h-[34px] text-[13px]"
                    onClick={() => setOpenedOne(true)}>
                    <p>Edit location</p>
                    <UploadLocationModal />
                </Button>
                <Button
                    className="bg-[#38CB89] hover:bg-[#38CB89] w-[141px] h-[34px] text-[13px]"

                    onClick={() => setOpenedTwo(true)}>
                    <p>Edit time</p>
                    <UploadTimeModal />
                </Button>
            </div>
        </div>
    );
};

export default AttendanceSubHeader;
