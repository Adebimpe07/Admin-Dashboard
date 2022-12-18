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
import axios from "axios";
import { useForm } from "@mantine/form";
import CryptoJS from "crypto-js";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

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

    const UploadJobModal = () => {
        const access = JSON.parse(sessionStorage.getItem("token")).access;
        const form = useForm({
            initialValues: {
                title: "",
                subject: ""
            }
        })
        const [content, setContent] = useState("")
        const encrypt = (element: any) => {
            return CryptoJS.AES.encrypt(
                (element),
                key,
                {
                    iv: iv,
                }
            ).toString()
        }

        const createNewsLetter = () => {
            var config = {
                method: 'post',
                url: 'https://atsbk.afexats.com' + `/api/v1/newsletter`,
                headers: {
                    'api-key': '7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ',
                    'hash-key': '091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a',
                    'request-ts': '1669397556',
                    "Authorization": `Bearer ${access}`
                    // TODO:process.env
                },
                data: { title: encrypt(form.values.title), subject: encrypt(form.values.subject), content: encrypt(content) }
            };

            axios(config)
                .then(function (response) {
                    console.log((response.data));
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        return (
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
                            {...form.getInputProps('title')}
                            size="sm"
                            className="focus:border-inherit placeholder:text-[#4A4C58]"
                            label="Title"
                        />
                        <TextInput
                            {...form.getInputProps('subject')}
                            size="sm"
                            className="focus:border-inherit placeholder:text-[#4A4C58]"
                            label="Subject"
                        />
                        <p >Message</p>
                        <RichTextEditor
                            value={content}
                            onChange={setContent}
                            id="rte"
                            className="h-[20rem]"
                            controls={[
                                ["bold", "italic", "underline"],
                                ["unorderedList", "h1", "h2"],
                                ["sup", "sub"],
                                ["alignLeft", "alignCenter", "alignRight"],
                            ]}
                        />
                        <button onClick={createNewsLetter} className="bg-greenButton text-[white] py-2 px-7 rounded-lg">
                            Create
                        </button>
                    </div>
                </Text>
            </Modal>
        )
    }

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
                </Button>
                <UploadJobModal />
            </div>
        </div>
    );
};

export default NewsLetSubHeader;
