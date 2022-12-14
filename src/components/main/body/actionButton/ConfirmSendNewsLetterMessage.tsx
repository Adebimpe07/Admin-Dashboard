import { Modal, Text, TextInput } from '@mantine/core';
import React, { useState } from 'react'

const ConfirmSendNewsLetterMessage = () => {
    const [opened, setOpened] = useState(false);
    const UploadNewsMessage = () => (
        <Modal
         opened={opened}
        onClose={() => setOpened(false)}
        title="Send newsletter"
        size="xl"
        classNames={{
        modal: "!w-[30rem]",
       
      }}>
        <Text className="flex flex-col items-center justify-start gap-6 w-full">
          <h1 className="self-center text-center text-[0.75rem] text-[#4A4C58] pb-2">
            You are about to send newsletter to all subscribers, kindly click
t           he button below to confirm this acton.
          </h1>
          <button className="bg-greenButton w-full text-[white] text-center py-4 px-7 rounded-lg">
             Send
          </button>
       
      </Text>
      </Modal>
    )

  return (
    <div className="">
      <button
        className="bg-[#DCFCE7] px-2 mr-4 py-1 rounded text-[#14532D] text-[0.75rem]"
        onClick={() => setOpened(true)}>Send
        <UploadNewsMessage />
      </button>
    </div>
  );
}
export default ConfirmSendNewsLetterMessage