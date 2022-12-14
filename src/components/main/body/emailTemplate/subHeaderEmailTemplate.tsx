import {
    Button,
    Modal,
    Select,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import RichTextEditor from "@mantine/rte";
import axios, { AxiosRequestConfig } from "axios";
import React, { useEffect, useState } from "react";
import Cross from "../../../../assets/Icon.png";
import SuccessModal from "./successModal";
import CryptoJS, { SHA256 } from "crypto-js";
import Loading from "../../../loading";

const UploadJobModal = ({ opened, setOpened, setOopened }) => {
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);

    var key = CryptoJS.enc.Base64.parse(
        "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
    );
    var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

    const createEmail = () => {
        const requestTs = String(Date.now());
        setLoading(true);

        var config: AxiosRequestConfig = {
            method: "post",
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            url: `/api/applications/email-templates`,
            headers: {
                "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
                "request-ts": requestTs,
                "hash-key": SHA256(
                    process.env.NEXT_PUBLIC_APP_API_KEY +
                        process.env.NEXT_PUBLIC_SECRET_KEY +
                        requestTs
                ).toString(CryptoJS.enc.Hex),
            },
            data: {
                data: CryptoJS.AES.encrypt(
                    JSON.stringify({ ...form.values, body: value }),
                    key,
                    {
                        iv: iv,
                    }
                ).toString(),
            },
        };

        axios(config)
            .then(function (response) {
                if (response.data.success) {
                    form.reset();
                    setValue("");
                    setOpened(false);
                    setOopened(true);
                    setLoading(false);
                }
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    };

    const form = useForm({
        initialValues: {
            type: "",
            subject: "",
            salutation: "",
            body: "",
        },
    });

    return (
        <>
            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Create Email">
                <Text className="flex flex-col gap-4 " size="sm">
                    <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
                        Mail Description
                    </h1>
                    <Select
                        label="Type"
                        placeholder="Select type"
                        data={[
                            {
                                value: "Completed Application",
                                label: "Completed Application",
                            },
                            { value: "Shortlisted", label: "Shortlisted" },
                            {
                                value: "Invited to Assessment",
                                label: "Invited to Assesment",
                            },
                            {
                                value: "Invited for Interview",
                                label: "Invited for Interview",
                            },
                            { value: "Accepted", label: "Accepted" },
                            { value: "Rejected", label: "Rejected" },
                        ]}
                        {...form.getInputProps("type")}
                    />
                    <TextInput
                        label="Subject"
                        className=""
                        {...form.getInputProps("subject")}
                    />
                    <TextInput
                        label="Salutation"
                        className=""
                        {...form.getInputProps("salutation")}
                    />
                    <p>Content</p>
                    <RichTextEditor
                        value={value}
                        onChange={setValue}
                        id="rte"
                        controls={[
                            ["bold", "italic", "underline"],
                            ["unorderedList", "h1", "h2"],
                            ["sup", "sub"],
                            ["alignLeft", "alignCenter", "alignRight"],
                        ]}
                    />
                </Text>
                <Button
                    fullWidth
                    className="bg-greenButton hover:bg-greenButton h-10 mx-auto text-lg my-4"
                    onClick={createEmail}>
                    Create
                </Button>
            </Modal>
            <Loading loading={loading} />
        </>
    );
};

const SubHeaderEmailTemplate = ({}) => {
    const [opened, setOpened] = useState(false);
    const [oopened, setOopened] = useState(false);

    return (
        <div className="flex flex-col justify-end items-end my-5 mr-5">
            <SuccessModal
                oopened={oopened}
                setOpened={setOpened}
                setOopened={setOopened}
            />
            <Button
                className="bg-greenButton hover:bg-greenButton w-[141px] h-[34px] text-[13px]"
                leftIcon={<img src={Cross.src} className="w-4" />}
                onClick={() => setOpened(true)}>
                <p>Create Email</p>
                <UploadJobModal
                    opened={opened}
                    setOopened={setOopened}
                    setOpened={setOpened}
                />
            </Button>
        </div>
    );
};

export default SubHeaderEmailTemplate;
