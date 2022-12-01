import {
    Button,
    FileInput,
    Modal,
    MultiSelect,
    Select,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import React, { useContext, useState } from "react";
import Search from "../../../../assets/search.png";
import Cross from "../../../../assets/Icon.png";
import Elipse from "../../../../assets/Ellipse 8.png";
import Cloud from "../../../../assets/cloud.png";
import { RichTextEditor } from "@mantine/rte";
import Link from "next/link";
import FormContext from "../../../../context/store";

const NewsLetSubHeader = () => {
    const newsLetterData = [
        {
            name: "Ask Deji",
            href: "/allsupport/askDeji",
        },
        {
            name: "Newsletter",
            href: "/allsupport/newsLetter",
        },
        {
            name: "FAQs",
            href: "/allsupport/faq",
        },
    ];

    const [opened, setOpened] = useState(false);

    const UploadJobModal = () => (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Create newsletter"
            size="xl"
            classNames={{
                modal: "!w-[50rem]",
            }}>
            <Text className="flex gap-8 ">
                <div className="flex  flex-col w-[100%] gap-4">
                    <h1 className="text-base text-[#948E8E] pb-2">
                        Create newsletter to send to subscribers
                    </h1>
                    <TextInput
                        size="sm"
                        className="focus:border-inherit placeholder:text-[#4A4C58]"
                        label="Subject"
                    />
                    <p >Message</p>
                    <RichTextEditor
                        id="rte"
                        className="h-[20rem]"
                        controls={[
                            ["bold", "italic", "underline"],
                            ["unorderedList", "h1", "h2"],
                            ["sup", "sub"],
                            ["alignLeft", "alignCenter", "alignRight"],
                        ]}
                    />
                    <button className="bg-greenButton text-[white] py-2 px-7 rounded-lg">
                        Create
                    </button>
                </div>       
            </Text>
        </Modal>
    );

    return (
        <div className="flex justify-between pt-6 mb-6 px-5">
            <div className="flex gap-9">
                {newsLetterData.map((item, idx) => (
                    <Link href={item.href}>
                        <div
                            key={idx}
                            className={
                                item.name === "newsLetter"
                                    ? " text-[#4A4C58] cursor-pointer"
                                    : "text-[#948E8E] cursor-pointer"
                            }>
                            {item.name}

                            <div
                                className={
                                    item.name === "Newsletter"
                                        ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2"
                                        : "w-7 h-1 mx-auto border rounded-md mt-2.5"
                                }></div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex gap-4">
                <Button
                    className="bg-greenButton px-6 hover:bg-greenButton w-fit h-[34px] text-[0.875rem]"
                    leftIcon={<img src={Cross.src} className="w-4" />}
                    onClick={() => setOpened(true)}>
                    <p>Create NewsLetter</p>
                    <UploadJobModal />
                </Button>
            </div>
        </div>
    );
};

export default NewsLetSubHeader;
