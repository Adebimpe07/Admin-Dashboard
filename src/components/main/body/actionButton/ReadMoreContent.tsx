import {
  Button,
  Modal,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import React, { useState, useEffect } from "react";
import Cross from "../../../../assets/Icon.png";
import CryptoJS from "crypto-js";
import axios from 'axios';

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const decrypt = (element: any) => {
  return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
    CryptoJS.enc.Utf8
  )
    ;
};

const ReadMoreContent = ({row}) => {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    console.log(row.original)
  })

  const UploadJobModal = ({opened, setOpened}) => (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="View Message"
    >
      <Text className="flex flex-col gap-4 " size="sm">
        <h1 className="text-base text-[#948E8E] pb-2">
          View and reply customer’s message
        </h1>
        <Textarea label="Message" minRows={5} className="" />
        <Textarea label="Reply Message" minRows={5} className="" />
      </Text>
      <Button
        fullWidth
        className="bg-greenButton hover:bg-greenButton h-10 mx-auto text-lg my-4">
       Send
      </Button>
    </Modal>
  );

  return (
    <>
      <button
        onClick={() => setOpened(true)}>
        <p>View</p>
      </button>
      <UploadJobModal opened={opened} setOpened={setOpened} />
    </>
  );
};

export default ReadMoreContent;
