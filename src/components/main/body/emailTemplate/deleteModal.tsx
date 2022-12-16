import {
  Button,
  Checkbox,
  FileInput,
  MultiSelect,
  TextInput,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import axios from "axios";
import { useState } from "react";

export const DeleteModal = ({ rowdetail, setSubAdminDelModal }) => {
  const [checked, setChecked] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    var config = {
      method: "DELETE",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/applications/email-templates/${rowdetail.id}/toggle-delete`,
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
        "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
        "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setSubAdminDelModal.opened = false;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={(e) => handleDelete(e)} className="flex flex-col gap-8">
      <h1 className="text-base text-[#4A4C58] pb-2 border-b border-[#DBD9D9] ">
        Delete Mail
      </h1>
      <p className="text-[#514747] text-sm text-center">
        You are about to delete the selected mail, kindly click the button below
        to confirm this action
      </p>
      <button className="bg-[#A83C3D] py-2 rounded text-white hover:bg-[#A83C3D]">
        Confirm
      </button>
    </form>
  );
};
