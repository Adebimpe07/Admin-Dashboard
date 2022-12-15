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

export const AssesmentInvitationModal = ({ rowdetail, setSubAdminModal }) => {
    const [checked, setChecked] = useState(false);
    const [opened, setOpened] = useState(false);
    const [message, setMessage] = useState("");
    const initialValues: { opened: boolean; component: React.ReactNode } = {
        opened: false,
        component: null,
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (checked) {
            const requestTs = String(Date.now());
            var config: AxiosRequestConfig = {
                method: "post",
                url: rowdetail.url + `/set-invited-for-assessment`,
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
                    console.log(response.data);
                    if (response.data.success === true) {
                        setMessage("Assessment invite successfully sent");
                        setOpened(true);
                        setTimeout(() => {
                            setOpened(false);
                        }, 2000);
                        setTimeout(() => {
                            setSubAdminModal(initialValues);
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
            <h1 className="text-base text-[#38CB89] pb-2 border-b border-[#DBD9D9] ">
                Invite Applicant for Assesment
            </h1>
            <p className="text-[#514747] text-sm text-center">
                You are about to invite the selected applicant for assessment,
                kindly click the button below to confirm this action
            </p>
            <Checkbox
                checked={checked}
                onChange={(event) => setChecked(event.currentTarget.checked)}
                label="Send Mail"
                size="xs"
            />
            <button className="bg-greenButton py-2 rounded text-white hover:bg-greenButton">
                Confirm
            </button>
            <Success opened={opened} message={message} />
        </form>
    );
};
