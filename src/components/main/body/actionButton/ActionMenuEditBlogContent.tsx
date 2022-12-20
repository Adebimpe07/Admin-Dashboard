import React, { useEffect } from "react";
import { useState } from "react";
import {  Text, Modal, TextInput, FileInput } from "@mantine/core";
import { Select } from "@mantine/core";
import { RichTextEditor } from "@mantine/rte";
import Cloud from "../../../../assets/cloud.png";
import axios from "axios";
import CryptoJS from "crypto-js";
import Edit from "../../../../assets/edit_icon.png";



var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const decrypt = (element: any) => {
  return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
    CryptoJS.enc.Utf8
  );
};


const ActionMenuEditBlogContent = ({ rowDetail}) => {
  const [opened, setOpened] = useState(false);

  const UploadBlogEditedModal = () => {
    useEffect(() => {
      fetchBlogDetail()
    }, [])
  

    const [data, setData] = useState({ title: "", description: "", id: null })
    const [editorVal, setEditorVal] = useState("");

    const fetchBlogDetail = () => {
      var config = {
        method: 'get',
        url: 'https://atsbk.afexats.com' + `/api/v1/blogs/${rowDetail.id}`,
        headers: {
          'api-key': '7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ',
          'hash-key': '091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a',
          'request-ts': '1669397556',
        }
      };

      axios(config)
        .then(function (response) {
          setData({ description: decrypt(response.data.data.description), id: decrypt(response.data.data.id), title: decrypt(response.data.data.title) })
          setEditorVal(decrypt(response.data.data.description))
        })
        .catch(function (error) {
          console.log(error);
        });
    }

     return <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Edit Blog"
      size="xl"
      classNames={{
        modal: "!w-[50rem]",
      }}
    >
      <Text className="flex gap-6 ">
        <div className="flex w-[100%] flex-col gap-4">
          <h1 className="text-base border-b border-[#DBD9D9] pb-2">
            Blog Details
          </h1>
          <TextInput size="sm" className="focus:border-inherit" label="Title" defaultValue={data.title} placeholder='' />
          <p>Content</p>
          <RichTextEditor
            id="rte"
            controls={[
              ["bold", "italic", "underline"],
              ["unorderedList", "h1", "h2"],
              ["sup", "sub"],
              ["alignLeft", "alignCenter", "alignRight"],
            ]}
             value={data.description}
          />
        </div>
        <div className="flex flex-col  gap-4">
          <p>Featured image</p>
          <FileInput
            placeholder="Browse and chose the files you want to upload from your computer"
            icon={<img src={Cloud.src} className="w-6" />}
            accept="image/png,image/jpeg"
            className="bg-[#EBFAF3]"
          />
          <Select
            label="Author"
            data={[
              { value: "single", label: "Single" },
              { value: "married", label: "Married" },
            ]}
          />
          <div className="mt-auto self-center">
            <button className="bg-greenButton text-[white] py-2 px-7 rounded-lg">
              Save Changes
            </button>
          </div>
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
        <img src={Edit.src} className="w-[17px]" />
        <UploadBlogEditedModal />
      </button>
    </div>
  );
};

export default ActionMenuEditBlogContent;
