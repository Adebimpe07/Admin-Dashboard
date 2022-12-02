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

const ContentGallery = () => {
  const [opened, setOpened] = useState(false);
  const [files, setFiles] = useState(null)
  const {token} = useContext(FormContext)

  const UploadJobModal = () => (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create Album"
    >
      <Text>
        <div className="flex w-full flex-col gap-4">
          <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
            Enter Album Details
          </h1>
          <TextInput
            size="sm"
            className="focus:border-inherit"
            label="Album Name"
          />
          <Textarea label="Album Description" />
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
            Create Album
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
      url: 'http://127.0.0.1:8000/api/v1/album',
      headers: { 
        Authorization: `Bearer ${token.access}`
      },
      data : data
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
          You will need to create an album before you can upload your images in
          your gallery
        </p>
        <Button
          className="bg-greenButton hover:bg-greenButton w-[141px] h-[34px] text-[13px]"
          leftIcon={<img src={Cross.src} className="w-4" />}
          onClick={() => setOpened(true)}
        >
          <p>Create Album</p>
          <UploadJobModal />
        </Button>
      </div>
    </div>
  );
};

export default ContentGallery;
