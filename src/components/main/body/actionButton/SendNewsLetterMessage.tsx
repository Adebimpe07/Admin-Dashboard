import { Modal, Text, TextInput, } from '@mantine/core';
import RichTextEditor from '@mantine/rte';
import React, { useState } from 'react';

const SendNewsLetterMessage = () => {
  const [opened, setOpened] = useState(false);

    const UploadNewsMessage = () => (
        <Modal 
         opened={opened}
        onClose={() => setOpened(false)}
        title="Create newsletter"
        size="xl"
        classNames={{
        modal: "!w-[50rem]",
        title: "pl-[60px]"
      }}>
        <Text className="flex flex-col items-center justify-start gap-6 w-full">
        <div className="flex w-[85%] flex-col gap-4">
          <h1 className="text-base text-[#948E8E] pb-2">
            Create newsletter to send to subscribers
          </h1>
          <TextInput size="sm" className="focus:border-inherit" label="Subject" />
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
             Create
            </button>
        </div>
      </Text>
      </Modal>
    )

  return (
    <div className="">
      <button 
        className="bg-[#DCFCE7] mr-3 border rounded-sm px-3 py-1 text-sm text-[#14532D]"
        onClick={() => setOpened(true)}
      >
        Send
        <UploadNewsMessage />
      </button>
    </div>
  );
}

export default SendNewsLetterMessage