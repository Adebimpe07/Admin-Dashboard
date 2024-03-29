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

const BlogSubHeader = () => {
    const contentData = [
        {
            name: "News",
            href: "/content/news",
        },
        {
            name: "Blog",
            href: "/content/blog",
        },
        {
            name: "Gallery",
            href: "/content/gallery",
        },
        {
            name: "Author",
            href: "/content/author",
        },
    ];

    const [opened, setOpened] = useState(false);

    const UploadJobModal = () => (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Create Blog"
            size="xl"
            classNames={{
                modal: "!w-[50rem]",
            }}>
            <Text className="flex gap-6 ">
                <div className="flex w-[100%] flex-col gap-4">
                    <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
                        Blog Details
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
                <div className="flex flex-col  gap-4">
                    <p>Featured image</p>
                    <FileInput
                        placeholder="Browse and chose the files you want to upload from your computer"
                        icon={<img src={Cloud.src} className="w-6" />}
                        accept="image/png,image/jpeg"
                        className="bg-[#EBFAF3]"
                    />
                    <Select
                        label="Author"
                        data={[
                            { value: "single", label: "Single" },
                            { value: "married", label: "Married" },
                        ]}
                    />
                    <div className="mt-auto self-center">
                        <button className="bg-greenButton text-[white] py-2 px-7 rounded-lg">
                            Publish article
                        </button>
                    </div>
                </div>
            </Text>
        </Modal>
    );

    return (
        <div className="flex justify-between pt-6 mb-6 px-5">
            <div className="flex gap-9">
                {contentData.map((item, idx) => (
                    <Link href={item.href}>
                        <div
                            key={idx}
                            className={
                                item.name === "blog"
                                    ? " text-[#4A4C58] cursor-pointer"
                                    : "text-[#948E8E] cursor-pointer"
                            }>
                            {item.name}

                            <div
                                className={
                                    item.name.toLocaleLowerCase() === "blog"
                                        ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2"
                                        : "w-7 h-1 mx-auto border rounded-md mt-2.5"
                                }></div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex gap-4">
                <TextInput
                    placeholder="Search Blog"
                    radius="md"
                    rightSection={<img src={Search.src} className="w-[14px]" />}
                />

                <Button
                    className="bg-greenButton hover:bg-greenButton w-[141px] h-[34px] text-[13px]"
                    leftIcon={<img src={Cross.src} className="w-4" />}
                    onClick={() => setOpened(true)}>
                    <p>Create Blog</p>
                    <UploadJobModal />
                </Button>
            </div>
        </div>
    );
};

export default BlogSubHeader;
