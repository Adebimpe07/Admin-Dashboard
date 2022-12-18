import React, { useState } from "react";
import {
  Button,
  FileInput,
  Menu,
  Modal,
  MultiSelect,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import Cross from "../../../../assets/Icon.png";
import Gallery from "../../../../assets/gallery.png";
import axios from "axios";
import CryptoJS from "crypto-js";
import { useForm } from "@mantine/form";


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
  name: string;
  description: string;
  images: Array<File>;
}

const AlbumHeader = ({albumData}) => {
  const [opened, setOpened] = useState(false);


  const UploadJobModal = ({ opened, setOpened }) => {
    const form = useForm<FormValues>({
      initialValues: {
        name: "",
        description: "",
        images: [],
      },
    });

    const createAlbum = () => {

      var data = {
        name: form.values.name,
        description: form.values.description,
        images: form.values.images.reduce((acc, item, index) => {
          let image = 1
          let my_key = 'image_' + image
          acc.push({[my_key]: item})
          image++
          return acc
        }, [])
      }

      console.log(data)

      // var config = {
      //   method: "post",
      //   baseURL: process.env.NEXT_PUBLIC_BASE_URL_1,
      //   url: `/api/v1/album`,
      //   headers: {
      //     "api-key": process.env.NEXT_PUBLIC_APP_API_KEY_1,
      //     "request-ts": process.env.NEXT_PUBLIC_REQUEST_TS_1,
      //     "hash-key": process.env.NEXT_PUBLIC_HASH_KEY_1,
      //   },
      //   data: data
      // };
      // axios(config)
      // .then((response) => {

      // })
    }
    return <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create Album"
    >
      <Text className="flex flex-col gap-4 ">
        <h1 className="text-base  pb-2">
          Enter Album Details
        </h1>
        <TextInput
          size="sm"
          className="focus:border-inherit"
          label="Album Name"
          {...form.getInputProps("name")}
        />
        <Textarea label="Album Description"
          {...form.getInputProps("description")}
        />
        <FileInput
          label="Add Images"
          placeholder="Select images"
          accept="image/png,image/jpeg"
          icon={<img src={Gallery.src} className="w-4" />}
          multiple
          {...form.getInputProps("images")}
        />
        <button onClick={createAlbum} className="bg-greenButton text-[white] py-2  rounded">
          Create Album
        </button>
      </Text>
    </Modal>
  };

  return (
    <div className="flex justify-between px-5">
      <div className="place-items-center">
        <p className="text-[#252735] text-base font-semibold">All Albums ({albumData?.length})</p>
      </div>
      <div className="flex gap-8">
        <Button
          className="bg-greenButton hover:bg-greenButton  h-[40px] text-[13px]"
          leftIcon={<img src={Cross.src} className="w-3" />}
          onClick={() => setOpened(true)}
        >
          <p>Create Album</p>
          <UploadJobModal opened={opened} setOpened={setOpened} />
        </Button>
      </div>
    </div>
  );
};

export default AlbumHeader;
