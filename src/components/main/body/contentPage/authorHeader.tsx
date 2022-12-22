import React, { useContext, useState } from "react";
import { Button, FileInput, Modal, Text, TextInput } from "@mantine/core";
import Cross from "../../../../assets/Icon.png";
import Gallery from "../../../../assets/gallery.png";
import axios, { AxiosError } from "axios";
import CryptoJS from "crypto-js";
import { useForm } from "@mantine/form";
import { StaticImageData } from "next/image";
import Crypto from "@/library/crypto";

import { showNotification } from "@mantine/notifications";

const key = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_WEBSITE_KEY);
const iv = CryptoJS.enc.Utf8.parse(process.env.NEXT_PUBLIC_WEBSITE_IV);

// const encrypt = (element: any) => {
//   return CryptoJS.AES.encrypt(element, key, {
//     iv: iv,
//   }).toString();
// };

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

const { encrypt, decrypt } = new Crypto(key, iv);

const UploadJobModal = ({ opened, setOpened }) => {
  const [files, setFiles] = useState(null);
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
    },
  });

  const createAuthor = () => {
    axios
      .post("/api/v1/author", encrypt(form.values), {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL_1,
        headers: {
          "api-key": process.env.NEXT_PUBLIC_APP_API_KEY_1,
          "request-ts": process.env.NEXT_PUBLIC_REQUEST_TS_1,
          "hash-key": process.env.NEXT_PUBLIC_HASH_KEY_1,
        },
      })
      .then((data) => {
        console.log(data);
      })
      .catch((reason: AxiosError) => {
        showNotification({
          color: "red",
          title: "An error has occured",
          message: reason.message,
        });
      });
  };
  return (
    <Modal
      overflow="inside"
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create author"
    >
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

          <button
            onClick={createAuthor}
            className="bg-greenButton text-[white] py-2  rounded"
          >
            Add member
          </button>
        </div>
      </Text>
    </Modal>
  );
};

const AuthorHeader = ({ authorData }) => {
  // const [value, setValue] = useState("");

  const [opened, setOpened] = useState(false);
  // const { token } = useContext(FormContext)

  return (
    <div className="flex justify-between px-5">
      <div className="place-items-center">
        <p className="text-[#252735] text-base font-semibold">
          All Authors ( {authorData?.length} )
        </p>
      </div>
      <div className="flex gap-8">
        <Button
          className="bg-greenButton hover:bg-greenButton  h-[40px] text-[13px]"
          leftIcon={<img src={Cross.src} className="w-3" />}
          onClick={() => setOpened(true)}
        >
          <p>Create Author</p>
          <UploadJobModal opened={opened} setOpened={setOpened} />
        </Button>
      </div>
    </div>
  );
};

export default AuthorHeader;
