import React from "react";
import { jobhead } from "../../../../layout/jobHead";
import Cross from "../../../../assets/Icon.png";
import Arr from "../../../../assets/La.png";
import { useState } from "react";
import { Button, Text, Modal, TextInput } from "@mantine/core";
import { Add, Logout } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import Downloads from "../../../../assets/import.png";
import Trash from "../../../../assets/trash.png";
import CryptoJS from "crypto-js";
import Loading from "@/src/components/loading";


const ActionMenuDeleteBlogContent = ({ id, setDelModal }) => {
  var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
  var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

  const [opened, setOpened] = useState(false);
    const [loading, setLoading] = useState(false);

  const UploadJobModal = () => (
  
    
    <Modal className="text-[#4A4C58] text-base"
      opened={opened}
      onClose={() => setOpened(false)}
      title="Delete Blog Post"
    >
      <p className="text-center text-sm">
        You are about to delete the selected blog post, kindly click the button
        below to confirm this acton.
      </p>
      <div className="flex justify-center">
        <button className="bg-[#A83C3D] py-2 w-full text-[white] rounded mt-8 text-base font-bold">Delete</button>
      </div>
    </Modal>
  );

  return (
    <div className="">
      <button
        className=" text-sm text-[#514747] mr-6"
        onClick={() => setOpened(true)}
      >
        <img src={Trash.src} className="w-[17px]" />
        <UploadJobModal />
      </button>
      <Loading loading={loading} />
    </div>
  );
};

export default ActionMenuDeleteBlogContent;
