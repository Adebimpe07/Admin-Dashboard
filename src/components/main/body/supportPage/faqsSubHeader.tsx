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
import { RichTextEditor } from "@mantine/rte";
import Link from "next/link";

const FaqSubHeader = () => {
    const faqsData = [
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
            title="Create News"
            size="xl"
            classNames={{
                modal: "!w-[50rem]",
            }}>
            <Text className="flex gap-8 ">
                <div className="flex  flex-col w-[100%] gap-4">
                    <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
                        FAQS details
                    </h1>
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="Title"
                    />
                    <p>Content</p>
                    <RichTextEditor
                        id="rte"
                        controls={[
                            ["bold", "italic", "underline"],
                            ["unorderedList", "h1", "h2"],
                            ["sup", "sub"],
                            ["alignLeft", "alignCenter", "alignRight"],
                        ]}
                    />
                </div>
                
            </Text>
        </Modal>
    );

    return (
        <div className="flex justify-between pt-6 mb-6 px-5">
            <div className="flex gap-9">
                {faqsData.map((item, idx) => (
                    <Link href={item.href}>
                        <div
                            key={idx}
                            className={
                                item.name === "news"
                                    ? " text-[#4A4C58] cursor-pointer"
                                    : "text-[#948E8E] cursor-pointer"
                            }>
                            {item.name}
                            <div
                                className={
                                    item.name === "FAQs"
                                        ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2"
                                        : "w-7 h-1 mx-auto border rounded-md mt-2.5"
                                }>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            
        </div>
    );
};

export default FaqSubHeader;
