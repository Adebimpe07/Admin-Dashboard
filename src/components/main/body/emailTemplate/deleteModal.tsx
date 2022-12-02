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

export const DeleteModal = ({ rowdetail, setSubAdminDelModal, id }) => {
  const [checked, setChecked] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    var config = {
      method: "DELETE",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/applications/email-templates/${id}/toggle-delete`,
      headers: {
        "api-key":
          "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
        "request-ts": "1667549939702",
        "hash-key":
          "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
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
