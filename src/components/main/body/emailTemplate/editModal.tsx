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
import { useContext, useEffect, useState } from "react";
import FormContext from "../../../../context/store";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";

export const EditModal = ({ rowdetail, setSubAdminEditModal }) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");
  const { form } = useContext(FormContext);
  const [opened, setOpened] = useState(false);
  var key = CryptoJS.enc.Base64.parse(
    "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
  );
  var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

  useEffect(() => {
    populateInput();
  }, []);

  const populateInput = () => {
    const requestTs = String(Date.now());
    var config = {
      method: "get",
      url: rowdetail.url,
      headers: {
        "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
        "request-ts": requestTs,
        "hash-key": sha256(
          process.env.NEXT_PUBLIC_APP_API_KEY +
            process.env.NEXT_PUBLIC_SECRET_KEY +
            requestTs
        ).toString(CryptoJS.enc.Hex),
      },
    };
    axios(config)
      .then(function (response) {
        let data = JSON.parse(
          CryptoJS.AES.decrypt(response.data.data, key, {
            iv: iv,
          }).toString(CryptoJS.enc.Utf8)
        );
        form.setFieldValue("type", data.type);
        form.setFieldValue("subject", data.subject);
        form.setFieldValue("body", data.body);
        form.setFieldValue("salutation", data.salutation);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestTs = Date.now();

    // let data = new FormData();
    // data.append("type", form.values.type);
    // data.append("subject", form.values.subject);
    // data.append("body", form.values.body);
    var config = {
      method: "PUT",
      url: rowdetail.url + "/edit",
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
        "request-ts": requestTs,
        "hash-key": sha256(
          process.env.NEXT_PUBLIC_APP_API_KEY +
            process.env.NEXT_PUBLIC_SECRET_KEY +
            requestTs
        ).toString(CryptoJS.enc.Hex),
      },
      data: {
        data: CryptoJS.AES.encrypt(JSON.stringify(form.values), key, {
          iv: iv,
        }).toString(),
      },
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
      <TextInput
        label="Type"
        placeholder="Select type"
        {...form.getInputProps("type")}
      />
      <TextInput
        label="Subject"
        className=""
        {...form.getInputProps("subject")}
      />
      <TextInput
        label="Salutation"
        className=""
        {...form.getInputProps("salutation")}
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
