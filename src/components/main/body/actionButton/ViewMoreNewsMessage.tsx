import React, { useEffect } from 'react';
import { Button, Text, Modal, TextInput, FileInput } from "@mantine/core";
import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import Edit from "../../../../assets/edit_icon.png";
import axios from 'axios';

import CryptoJS from "crypto-js";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const decrypt = (element: any) => {
  return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
    CryptoJS.enc.Utf8
  )
    ;
};

const ViewMoreNewsMessage = ({ rowDetail }) => {
  const [opened, setOpened] = useState(false);



  const UploadNewsMessage = () => {
    useEffect(() => {
      fetchNewsletterDetail()
    }, [])

    const [data, setData] = useState({ content: "", subject: "", title: "", id: null })
    const [editorVal, setEditorVal] = useState("")

    const fetchNewsletterDetail = () => {
      var config = {
        method: 'get',
        url: 'https://atsbk.afexats.com' + `/api/v1/newsletter/${rowDetail.id}`,
        headers: {
          'api-key': '7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ',
          'hash-key': '091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a',
          'request-ts': '1669397556',
        }
      };

      axios(config)
        .then(function (response) {
          setData({ content: decrypt(response.data.data.content), id: decrypt(response.data.data.id), subject: decrypt(response.data.data.subject), title: decrypt(response.data.data.title) })
          setEditorVal(decrypt(response.data.data.content))
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    return <Modal
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
          <TextInput size="sm" className="focus:border-inherit" defaultValue={data.subject} label="Subject" placeholder='' />
          <p className='text-[#252735]'>Message</p>
          <RichTextEditor
            classNames={{
              root: "overflow-y-scroll"
            }}
            id="rte"
            className='h-[15rem]'
            controls={[
              ["bold", "italic", "underline"],
              ["unorderedList", "h1", "h2"],
              ["sup", "sub"],
              ["alignLeft", "alignCenter", "alignRight"],
            ]}
            value={data.content}
          />
          <button className="bg-greenButton w-full text-[white] py-2 px-7 rounded-lg">
            Save
          </button>
        </div>
      </Text>
    </Modal>
  }

  return (
    <div className="">
      <button
        className=" text-sm text-[#514747]"
        onClick={() => setOpened(true)}
      >
        <img src={Edit.src} className="w-[60px] h-[15px] object-cover" />
        <UploadNewsMessage />
      </button>
    </div>
  );
}

export default ViewMoreNewsMessage
