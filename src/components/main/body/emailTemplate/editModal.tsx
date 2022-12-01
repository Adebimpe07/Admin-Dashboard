import {
  Button,
  Checkbox,
  FileInput,
  MultiSelect,
  Select,
  TextInput,
} from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import { IconUpload } from "@tabler/icons";
import axios from "axios";
import { useState } from "react";

export const EditModal = ({rowdetail, setSubAdminEditModal}) => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
      var config = {
        method: 'post',
        url: `${rowdetail.url}/set-rejected`,
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
        alert(response.data.data.application_status);
        setSubAdminEditModal.opened = false
      })
      .catch(function (error) {
        alert(error.response.data.error);
      });
   

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}  className="flex flex-col gap-4 ">
      <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
        Mail Description
      </h1>
      <Select
        label="Type"
        placeholder="Select type"
        data={[
          { value: "submit", label: "Submitted Application" },
          { value: "Assesment", label: "Invited for Assesment" },
          { value: "interview", label: "Invited for Interview" },
          { value: "accepted", label: "Accepted" },
          { value: "rejected", label: "Rejected" },
        ]}
      />
      <TextInput label="Subject" className="" />
      <p>Content</p>
      <RichTextEditor
        id="rte"
        controls={[
          ["bold", "italic", "underline"],
          ["unorderedList", "h1", "h2"],
          ["sup", "sub"],
          ["alignLeft", "alignCenter", "alignRight"],
        ]}
      />
      <Button
        fullWidth
        className="bg-greenButton hover:bg-greenButton h-10 mx-auto text-lg my-4"
      >
        Save Changes
      </Button>
    </form>
  );
};
