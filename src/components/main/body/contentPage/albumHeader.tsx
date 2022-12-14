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
import Downloads from "../../../../assets/import.png";
import Gallery from "../../../../assets/gallery.png";

const AlbumHeader = () => {
  const [opened, setOpened] = useState(false);

  const data = [
    { value: "pm", label: "Product Mnanagement" },
    { value: "ft", label: "Frontemd Development" },
    { value: "be", label: "Backend Development" },
    { value: "md", label: "Mobile App Development" },
    { value: "ud", label: "UI/UX Design" },
  ];

  const UploadJobModal = () => (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create Album"
    >
      <Text className="flex flex-col gap-4 ">
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
        />
        <button className="bg-greenButton text-[white] py-2  rounded">
          Create Album
        </button>
      </Text>
    </Modal>
  );

  return (
    <div className="flex justify-between px-5">
      <div className="place-items-center">
        <p className="text-[#252735] text-base font-semibold">All Albums ( )</p>
      </div>
      <div className="flex gap-8">
        <Button
          className="bg-greenButton hover:bg-greenButton  h-[40px] text-[13px]"
          leftIcon={<img src={Cross.src} className="w-3" />}
          onClick={() => setOpened(true)}
        >
          <p>Create Album</p>
          <UploadJobModal />
        </Button>
      </div>
    </div>
  );
};

export default AlbumHeader;
