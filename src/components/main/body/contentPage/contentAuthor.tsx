import React, { useState, useContext } from "react";
import Group from "../../../../assets/Group 2.png";
import Cross from "../../../../assets/Icon.png";
import Gallery from "../../../../assets/gallery.png";
import {
    Button,
    FileInput,
    Modal,
    Text,
    TextInput,
} from "@mantine/core";
import FormContext from "../../../../context/store";
import axios from 'axios';
import CryptoJS from "crypto-js";
import { useForm } from "@mantine/form";
import { StaticImageData } from "next/image";


var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");



const encrypt = (element: any) => {
    return CryptoJS.AES.encrypt(
        (element),
        key,
        {
            iv: iv,
        }
    ).toString()
}

interface FormValues {
    firstName: string;
    lastName: string;
    bio: string;
    email: string;
    facebookLink: string;
    instagramLink: string;
    twitterLink: string;
    profilePicture: StaticImageData;
}



const ContentAuthor = () => {
    const [opened, setOpened] = useState(false);
    const [files, setFiles] = useState(null)
    const { token } = useContext(FormContext)

    const UploadAuthorModal = () => {
        const form = useForm<FormValues>({
            initialValues: {
                firstName: "",
                lastName: "",
                bio: "",
                email: "",
                facebookLink: "",
                instagramLink: "",
                twitterLink: "",
                profilePicture: null,
            }
        })
        // const data = new FormData()
        // data.append('name', 'Customer Success Week');

        const createAuthor = () => {

            var data = {
                firstName: form.values.firstName,
                lastName: form.values.lastName,
                bio: form.values.bio,
                email: form.values.email,
                facebookLink: form.values.facebookLink,
                instagramLink: form.values.instagramLink,
                twitterLink: form.values.twitterLink,
                profilePicture: form.values.profilePicture,
            }

            console.log(data)
            // console.log(token.access);

            // var config = {
            //     method: 'post',
            //     baseURL: process.env.NEXT_PUBLIC_BASE_URL_1,
            //     url: `/api/v1/author`,
            //     headers: {
            //         "api-key": process.env.NEXT_PUBLIC_APP_API_KEY_1,
            //         "request-ts": process.env.NEXT_PUBLIC_REQUEST_TS_1,
            //         "hash-key": process.env.NEXT_PUBLIC_HASH_KEY_1,
            //         Authorization: `Bearer ${token.access}`
            //     },

            //     data: data
            // };

            // axios(config)
            //     .then((response) => {
            //         console.log((response.data));
            //     })
            //     .catch(function (error) {
            //         console.log(error);
            //     });
        }
        return (

            <Modal overflow="inside"
                opened={opened}
                onClose={() => setOpened(false)}
                title="Create Author">
                <Text className="overflow-auto">
                    <div className="flex w-full overflow-auto flex-col gap-4">
                        <h1 className="text-base overflow-hidden text-[#948E8E] pb-2">
                            Add new author
                        </h1>
                        <TextInput
                            required
                            size="sm"
                            className="focus:border-inherit overflow-hidden"
                            label="First name"
                            {...form.getInputProps("firstName")}
                        />
                        <TextInput
                            required
                            size="sm"
                            className="focus:border-inherit overflow-hidden"
                            label="Last name"
                            {...form.getInputProps("lastName")}
                        />
                        <TextInput
                            type="email"
                            required
                            size="sm"
                            className="focus:border-inherit overflow-hidden"
                            label="Email"
                            {...form.getInputProps("email")}
                        />
                        <TextInput
                            size="sm"
                            required
                            className="focus:border-inherit overflow-hidden"
                            label="Instagram Link"
                            {...form.getInputProps("instagramLink")}
                        />
                        <TextInput
                            size="sm"
                            className="focus:border-inherit"
                            label="Twitter Link"
                            {...form.getInputProps("twitterLink")}
                        />
                        <TextInput
                            size="sm"
                            className="focus:border-inherit"
                            label="Role/Position"
                            {...form.getInputProps("bio")}
                        />
                        <TextInput
                            size="sm"
                            className="focus:border-inherit"
                            label="Facebook link"
                            {...form.getInputProps("facebookLink")}
                        />
                        <FileInput
                            label="Profile Picture"
                            required
                            placeholder="Select picture"
                            accept="image/png,image/jpeg"
                            icon={<img src={Gallery.src} className="w-4" />}
                            multiple
                            value={files}
                            onChange={setFiles}
                            {...form.getInputProps("profilePicture")}
                        />
                        <button onClick={createAuthor} className="bg-greenButton text-[white] py-2  rounded">
                            Create Author
                        </button>
                    </div>
                </Text>
            </Modal>
        )

    }
    return (
        <div className="h-full">
            <div className="flex flex-col gap-3 justify-center h-full items-center">
                <img src={Group.src} className="w-[75px]" />
                <h3 className="text-[#948E8E] text-2xl font-medium">Create Author</h3>
                <p className="text-[#948E8E] w-[400px] text-center ">
                    You will need to create an author before you
                    can upload news and blogs.
                </p>
                <Button
                    className="bg-greenButton hover:bg-greenButton w-[141px] h-[34px] text-[13px]"
                    leftIcon={<img src={Cross.src} className="w-4" />}
                    onClick={() => setOpened(true)}
>
                    <p>Create Author</p>
                    <UploadAuthorModal />
                </Button>
            </div>
        </div>
    );
};

export default ContentAuthor;
