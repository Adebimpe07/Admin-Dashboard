import {
    Button,
    Checkbox,
    FileInput,
    MultiSelect,
    TextInput,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";
import Success from "../../../success";

export const RejectModal = ({ rowdetail, setSubAdminDelModal }) => {
    const [checked, setChecked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [opened, setOpened] = useState(false);

    var key = CryptoJS.enc.Base64.parse(
        "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
    );
    var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

    const initialValues: { opened: boolean; component: React.ReactNode } = {
        opened: false,
        component: null,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checked) {
            const requestTs = String(Date.now());
            setLoading(true);
            var config: AxiosRequestConfig = {
                method: "post",
                url: rowdetail.url + `/set-rejected`,
                headers: {
                    "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
                    "request-ts": requestTs,
                    "hash-key": sha256(
                        process.env.NEXT_PUBLIC_APP_API_KEY +
                            process.env.NEXT_PUBLIC_SECRET_KEY +
                            requestTs
                    ).toString(CryptoJS.enc.Hex),
                },
            };

            axios(config)
                .then(function (response) {
                    if (response.data.success === true) {
                        setMessage("Applicant rejected");
                        setOpened(true);
                        setTimeout(() => {
                            setOpened(false);
                        }, 2000);
                        setTimeout(() => {
                            setSubAdminDelModal(initialValues);
                        }, 2000);
                    }
                })
                .catch(function (error) {
                    alert(error.response.data.error);
                });
        } else alert("Please check the box");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
            <h1 className="text-base text-[#4A4C58] pb-2 border-b border-[#DBD9D9] ">
                Reject Applicant
            </h1>
            <p className="text-[#514747] text-sm text-center">
                You are about to reject the selected applicant, kindly click the
                button below to confirm this action
            </p>
            <Checkbox
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
                label="Send Mail"
                size="xs"
            />
            <button className="bg-[#A83C3D] py-2 rounded text-white hover:bg-[#A83C3D]">
                Confirm
            </button>
            <Success opened={opened} message={message} />
        </form>
    );
};
