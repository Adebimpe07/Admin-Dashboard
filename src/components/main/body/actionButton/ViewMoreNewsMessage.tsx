import React from 'react';
import { Button, Text, Modal, TextInput, FileInput } from "@mantine/core";
import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import Edit from "../../../../assets/edit_icon.png";

const ViewMoreNewsMessage = () => {
    const [opened, setOpened] = useState(false);

    const UploadNewsMessage = () => (
        <Modal 
         opened={opened}
        onClose={() => setOpened(false)}
        title="Edit newsletter"
        size="xl"
        classNames={{
        modal: "!w-[50rem]",
        title: "pl-[60px]"
      }}>
        <Text className="flex flex-col items-center justify-start gap-6 w-full">
        <div className="flex w-[85%] flex-col gap-4">
          <h1 className="text-base text-[#948E8E] pb-2">
            Edit newsletter to send to subscribers
          </h1>
          <TextInput size="sm" className="focus:border-inherit" label="Subject" placeholder='' />
          <p className='text-[#252735]'>Message</p>
          <RichTextEditor
            id="rte"
            className='h-[15rem]'
            controls={[
              ["bold", "italic", "underline"],
              ["unorderedList", "h1", "h2"],
              ["sup", "sub"],
              ["alignLeft", "alignCenter", "alignRight"],
            ]}
          />
            <button className="bg-greenButton w-full text-[white] py-2 px-7 rounded-lg">
             Save
            </button>
        </div>
      </Text>
      </Modal>
    )

  return (
    <div className="">
      <button
        className=" text-sm text-[#514747]"
        onClick={() => setOpened(true)}
      >
        <img src={Edit.src} className="w-[17px]" />
        <UploadNewsMessage />
      </button>
    </div>
  );
}

export default ViewMoreNewsMessage
