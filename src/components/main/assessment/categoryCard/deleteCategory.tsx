import { Button } from "@mantine/core";
import axios from "axios";
import React, { useContext, useState } from "react";
import CryptoJS, { SHA256 } from "crypto-js";
import Loading from "../../../loading";
import Success from "../../../success";
import FormContext from "../../../../context/store";

export const DeleteCategory = ({ setDelModal, id }) => {
    const initialValues: { opened: boolean; component: React.ReactNode } = {
        opened: false,
        component: null,
    };
    const [loading, setLoading] = useState(false);
    const key = CryptoJS.enc.Base64.parse(
        "wjqy62fB+dwz2gyz4sMePe9u2RsMVIyuaA6wPgUeXjw="
    );
    const iv = CryptoJS.enc.Base64.parse("gNyBAsNdWQEwHvbAm8g5Jg==");
    const { categoryCard, setCategoryCard } = useContext(FormContext);

    const fetchCategories = () => {
        let requestTs = String(Date.now());
        setLoading(true);
        axios({
            url:
                process.env.NEXT_PUBLIC_BASE_URL_2 +
                `/api/categories/create-list-category`,
            headers: {
                "api-key": process.env.NEXT_PUBLIC_API_KEY_2,
                "request-ts": requestTs,
                "hash-key": SHA256(
                    process.env.NEXT_PUBLIC_API_KEY_2 +
                        process.env.NEXT_PUBLIC_SECRET_KEY_2 +
                        requestTs
                ).toString(CryptoJS.enc.Hex),
            },
        })
            .then(function (response) {
                let decrypted_data = JSON.parse(
                    CryptoJS.AES.decrypt(response.data.data, key, {
                        iv: iv,
                    }).toString(CryptoJS.enc.Utf8)
                );
                // console.log(decrypted_data);
                setCategoryCard(decrypted_data.results);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    };

    const deleteCategory = (id) => {
        let requestTs = String(Date.now());
        setLoading(true);

        var config = {
            method: "delete",
            url: process.env.NEXT_PUBLIC_BASE_URL_2 + `/api/categories/${id}`,
            headers: {
                "api-key": process.env.NEXT_PUBLIC_API_KEY_2,
                "request-ts": requestTs,
                "hash-key": SHA256(
                    process.env.NEXT_PUBLIC_API_KEY_2 +
                        process.env.NEXT_PUBLIC_SECRET_KEY_2 +
                        requestTs
                ).toString(CryptoJS.enc.Hex),
            },
        };

        axios(config)
            .then(function (response) {
                console.log(response.data);
                setLoading(false);
                if (response.data.message === "Successfully Retrieved") {
                    fetchCategories();
                    setDelModal(initialValues);
                }
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
            });
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap gap-4 text-center leading-8">
                You are about to delete the selected Category. Kindly click the
                delete button below to confirm this action
            </div>
            <div className="flex justify-between py-6">
                <Button
                    onClick={() => setDelModal(initialValues)}
                    className="bg-greenButton hover:bg-greenButton">
                    Cancel
                </Button>
                <Button
                    onClick={() => deleteCategory(id)}
                    className="bg-[red] hover:bg-[red]">
                    Delete
                </Button>
            </div>
            <Loading loading={loading} />
        </div>
    );
};
