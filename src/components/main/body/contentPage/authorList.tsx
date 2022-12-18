import React, { useState } from "react";
import Group from "../../../../assets/Group 2.png";
import Link from "next/link";
import { Facebook, Instagram } from 'iconsax-react';
import Gallery from "../../../../assets/gallery.png";
import { Icon } from '@iconify/react';
import EditIcon from "./assets/edit-2.png"
import { FileInput, Modal, Text, Textarea, TextInput } from "@mantine/core";
import CryptoJS from "crypto-js";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const decrypt = (element: any) => {
    return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
        CryptoJS.enc.Utf8
    )
        ;
};
type Props = {
    firstName: string;
    lastName: string;
    profile_pic: any;
    twitter_link: string;
    facebook_link: string;
    instagram_link: string;
    email: string;
    bio: string;
};

// const AuthorPicturesList = [
//     {
//         href: "/content/Author/AuthorPictures",
//     },
// ];

const AuthorList = ({ firstName, lastName, profile_pic, twitter_link, facebook_link, instagram_link, bio, email }: Props) => {
    const [opened, setOpened] = useState(false);
    const [files, setFiles] = useState(null)
    const UploadEditAuthorModal = () => (
        <Modal overflow="inside"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Edit author"
        >
            <Text>
                <div className="flex w-full flex-col gap-4">
                    <h1 className="text-base border-b border-[#DBD9D9] pb-2">
                        Enter Author's detail
                    </h1>
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="First Name"
                    />
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="Last Name"
                    />
                    <TextInput size="sm" className="focus:border-inherit" label="Role/Position" />
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="Instagram Link"
                    />
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="Twitter Link"
                    />
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="Facebook Link"
                    />
                    <FileInput
                        label="Add Images"
                        placeholder="Select images"
                        accept="image/png,image/jpeg"
                        icon={<img src={Gallery.src} className="w-4" />}
                        multiple
                        value={files}
                        onChange={setFiles}
                    />
                    <button className="bg-greenButton text-[white] py-2  rounded">
                        Save
                    </button>
                </div>
            </Text>
        </Modal>
    );
    return (
        <>
            <section className='flex flex-col gap-3 justify-center items-center py-4 px-2 border-[#F0F0F1] shadow-sm border-[1px] rounded-lg'>
                <button onClick={() => setOpened(true)} className="self-end">
                    <img src={EditIcon.src} className="w-5" alt="edit author button" />
                    <UploadEditAuthorModal />
                </button>

                <img
                    src={profile_pic}
                    className='w-[65px]'
                />
                <div className="flex gap-1 items-center justify-center">
                    <span className='text-[#252735] text-sm font-semibold'>{firstName}</span>
                    <span className='text-[#252735] text-xs font-semibold'>{lastName}</span>
                </div>
                <p className='text-[#8F9198] text-[10px] font-medium'>{bio}</p>
                <div className="flex gap-2 text-[10px] justify-center items-center">
                    {/* <button> */}
                    <Link href={(facebook_link)} target="-blank">
                        <Facebook
                            size="24"
                            color="#FF8A65"
                        />
                    </Link>

                    <Link href={(twitter_link)} target="-blank">
                        <Icon icon="ant-design:twitter-square-filled" color="red" width="24" height="24" />
                    </Link>
                    <Link href={(instagram_link)} target="-blank">
                        <Instagram
                            size="24"
                            color="#FF8A65"
                        />
                    </Link>

                </div>
            </section>

        </>
    );
};

export default AuthorList;

