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
import { useContext, useState } from "react";
import FormContext from "../../../../context/store";

export const EditModal = ({ rowdetail, setSubAdminEditModal}) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");
  const { form } = useContext(FormContext);
  const [opened, setOpened] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("type", form.values.type);
    data.append("subject", form.values.subject);
    data.append("body", form.values.body);
    var config = {
      method: "PUT",
      url: "https://aptbk.afexats.com/api/applications/email-templates/edit",
      headers: {
        "api-key":
          "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
        "request-ts": "1667549939702",
        "hash-key":
          "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };



  return (
    <div className="flex flex-col gap-4 ">
      <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
        Mail Description
      </h1>
      <Select
        label="Type"
        placeholder="Select type"
        data={[
          { value: "Completed Application", label: "Completed Application" },
          { value: "Shortlisted", label: "Shortlisted" },
          { value: "Invited to Assessment", label: "Invited to Assesment" },
          { value: "Invited for Interview", label: "Invited for Interview" },
          { value: "Accepted", label: "Accepted" },
          { value: "Rejected", label: "Rejected" },
        ]}
        {...form.getInputProps("type")}
      />
      <TextInput
        label="Subject"
        className=""
        {...form.getInputProps("subject")}
      />
      <p>Content</p>
      <RichTextEditor
        value={value}
        onChange={setValue}
        id="rte"
        controls={[
          ["bold", "italic", "underline"],
          ["unorderedList", "h1", "h2"],
          ["sup", "sub"],
          ["alignLeft", "alignCenter", "alignRight"],
        ]}
        {...form.getInputProps("body")}
      />
      <Button
        fullWidth
        className="bg-greenButton hover:bg-greenButton h-10 mx-auto text-lg my-4"
        onClick={(e) => handleSubmit(e)}
      >
        Save Changes
      </Button>
    </div>
  );
};
