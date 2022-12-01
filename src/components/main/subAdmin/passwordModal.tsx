import { Button, Modal, PasswordInput, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import axios from "axios";
import PasswordResetSuccess from "./passwordResetSuccess";
import { useForm } from "@mantine/form";
import { useContext } from "react";
import FormContext from "../../../context/store";
import Error from "../../error";
const passwordModal = ({ opened, setOpened, setOopened, oopened }) => {
  const [visible, { toggle }] = useDisclosure(false);
  const { admin, token } = useContext(FormContext);
  const [err, setErr] = useState("");
  const [error, setError] = useState(null);

  const resetPasswordForm = useForm({
    initialValues: {
      new_password: "",
      confirm_password: "",
      old_password: "",
    },
  });

  const resetPassword = (e) => {
    if (
      resetPasswordForm.values.new_password ===
      resetPasswordForm.values.confirm_password
    ) {
      var data = resetPasswordForm.values;

      var config = {
        method: "patch",
        url: `https://atsbk.afexats.com/api/v1/account/change-password/${admin.user_id}/`,
        headers: {
          Authorization: `Bearer ${token.access}`,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          setOopened(true);
        })
        .catch(function (error) {
          setError(error.response.data.data.new_password);
        });
    } else setErr("Passwords don't match");
  };
  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        classNames={{
          root: "w-[30rem] m-auto",
        }}
        centered
      >
        <Stack sx={{ maxWidth: 380 }} mx="auto">
          <PasswordInput
            label="Old Password"
            {...resetPasswordForm.getInputProps("old_password")}
          />
          <PasswordInput
            label="New Password"
            visible={visible}
            onVisibilityChange={toggle}
            {...resetPasswordForm.getInputProps("new_password")}
          />
          <PasswordInput
            label="Confirm password"
            visible={visible}
            onVisibilityChange={toggle}
            {...resetPasswordForm.getInputProps("confirm_password")}
          />
          <Button
            className="bg-greenButton hover:bg-greenButton w-[10rem] h-8 text-sm mx-auto"
            onClick={(e) => resetPassword(e)}
          >
            Save password
          </Button>
          <span className="p-1 text-red-600">{err}</span>
        </Stack>
      </Modal>
      <PasswordResetSuccess
        setOpened={setOpened}
        setOopened={setOopened}
        oopened={oopened}
      />
      {error && <Error>{error}</Error>}
    </div>
  );
};

export default passwordModal;
