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

export const HireInvitationModal = ({ rowdetail, setSubAdminHireModal }) => {
    const [checked, setChecked] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (checked) {
            const requestTs = String(Date.now());
            var config: AxiosRequestConfig = {
                method: "post",
                url: rowdetail.url + `/set-accepted`,
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
                    alert(response.data.data.application_status);
                    setSubAdminHireModal.opened = false;
                })
                .catch(function (error) {
                    alert(error.response.data.error);
                });
        } else alert("Please check the box");
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
            <h1 className="text-base text-[#38CB89] pb-2 border-b border-[#DBD9D9] ">
                Hire Applicant
            </h1>
            <p className="text-[#514747] text-sm text-center">
                You are about to hire the selected applicant, kindly click the
                button below to confirm this action
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
        </form>
    );
};
