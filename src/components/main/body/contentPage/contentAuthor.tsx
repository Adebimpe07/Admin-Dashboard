import React, { useState, useContext } from "react";
import Group from "../../../../assets/Group 2.png";
import Cross from "../../../../assets/Icon.png";
import Gallery from "../../../../assets/gallery.png";
import {
    Button,
    FileInput,
    Modal,
    MultiSelect,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import Elipse from "../../../../assets/Ellipse 8.png";
import Cloud from "../../../../assets/cloud.png";
import FormContext from "../../../../context/store";
import axios from 'axios'

const ContentAuthor = () => {
    const [opened, setOpened] = useState(false);
    const [files, setFiles] = useState(null)
    const { token } = useContext(FormContext)

    const UploadJobModal = () => (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Create Author"
        >
            <Text>
                <div className="flex w-full flex-col gap-4">
                    <h1 className="text-base text-[#948E8E] border-b border-[#DBD9D9] pb-2">
                        Add new author
                    </h1>
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="Name"
                    />
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="Role/Position"
                    />
                    <FileInput
                        label="Add Picture"
                        placeholder="Select images"
                        accept="image/png,image/jpeg"
                        icon={<img src={Gallery.src} className="w-4" />}
                        multiple
                        value={files}
                        onChange={setFiles}
                    />
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="Facebook link"
                    />

                    <button className="bg-greenButton text-[white] py-2  rounded">
                        Create Author
                    </button>
                </div>
            </Text>
        </Modal>
    );


    const createAlbum = () => {

        const data = new FormData()
        data.append('name', 'Customer Success Week');

        var config = {
            method: 'post',
            url: 'https://atsbk.afexats.com/api/v1/album',
            headers: {
                Authorization: `Bearer ${token.access}`
            },
            data: data
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
        <div className="h-full">
            <div className="flex flex-col gap-3 justify-center h-full items-center">
                <img src={Group.src} className="w-[75px]" />
                <h3 className="text-[#948E8E] text-2xl font-medium">Create Album</h3>
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
                    <UploadJobModal />
                </Button>
            </div>
        </div>
    );
};

export default ContentAuthor;
