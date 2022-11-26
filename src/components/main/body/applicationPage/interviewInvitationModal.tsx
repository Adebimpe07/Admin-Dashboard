import {
  Button,
  Checkbox,
  FileInput,
  MultiSelect,
  TextInput,
} from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import { useState } from "react";

export const InterviewInvitationModal = () => {
  const [checked, setChecked] = useState(false);

  return (
    <form className="flex flex-col gap-6">
      <h1 className="text-base text-[#38CB89] pb-2 border-b border-[#DBD9D9] ">
        Invite Applicant for Interview
      </h1>
      <p className="text-[#514747] text-sm text-center">
        You are about to invite the selected applicant for interview, kindly
        click the button below to confirm this action
      </p>
      <Checkbox
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        label="Send Mail"
        size="xs"
      />

      <button className="bg-greenButton py-2 rounded text-white hover:bg-greenButton">
        Confirm
      </button>
    </form>
  );
};
