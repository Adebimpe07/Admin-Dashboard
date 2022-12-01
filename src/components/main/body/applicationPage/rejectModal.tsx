import { Button, Checkbox, FileInput, MultiSelect, TextInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import axios from "axios";
import { useState } from "react";

export const RejectModal = ({rowdetail, setSubAdminDelModal}) => {
 
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(checked){
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
        setSubAdminDelModal.opened = false
      })
      .catch(function (error) {
        alert(error.response.data.error);
      });
    }
    else alert('Please check the box')

  }

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
        <h1 className="text-base text-[#4A4C58] pb-2 border-b border-[#DBD9D9] ">
          Reject Applicant
        </h1>
      <p className="text-[#514747] text-sm text-center">You are about to reject the selected applicant, kindly click the button below to confirm this action</p>
      <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} label="Send Mail" size="xs" />
      <button  className="bg-[#A83C3D] py-2 rounded text-white hover:bg-[#A83C3D]">
        Confirm
      </button>
    </form>
  );
};
