import {
  Button,
  Modal,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import React, { useState, useEffect } from "react";
import Cross from "../../../../assets/Icon.png";
import CryptoJS from "crypto-js";
import axios, { AxiosError } from "axios";
import { useForm } from "@mantine/form";
import Crypto from "@/library/crypto";
import { showNotification } from "@mantine/notifications";

const commentSample = {
  id: "1",
  full_name: "John Doe",
  subject: "Test",
  email: "jdoe@gmail.com",
  message: "Just testing",
};

type CommentType = typeof commentSample;

const key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
const iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const { decrypt } = new Crypto(key, iv);

function UploadNewsMessage({ opened, setOpened, id }) {
  const [comment, setComment] = useState<Partial<CommentType>>({});

  const response = useForm({
    initialValues: {
      reply: "",
    },
  });

  axios
    .get(`/api/v1/support/contact-us-details-update-delete/${id}`, {
      baseURL: process.env.NEXT_PUBLIC_BASE_URL_1,
      headers: {
        "api-key": process.env.NEXT_PUBLIC_APP_API_KEY_1,
        "hash-key": process.env.NEXT_PUBLIC_HASH_KEY_1,
        "request-ts": process.env.NEXT_PUBLIC_REQUEST_TS_1,
      },
    })
    .then(({ data: contactUsList }) => {
      setComment(decrypt(contactUsList.data));
    })
    .catch((reason: AxiosError) => {
      showNotification({
        title: "An error has occured",
        message: reason.message,
        color: "red",
      });
    });

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="View Message"
    >
      <Text className="flex flex-col gap-4 " size="sm">
        <h1 className="text-base text-[#948E8E] pb-2">
          View and reply customer’s message
        </h1>
        <Text className="focu:border-inherit border-1">{comment.message}</Text>
        <Textarea
          label="Reply Message"
          minRows={5}
          className="focus:border-inherit"
          {...response.getInputProps("reply")}
        />
      </Text>
      <Button
        fullWidth
        className="bg-greenButton hover:bg-greenButton h-10 mx-auto text-lg my-4"
      >
        Send
      </Button>
    </Modal>
  );
}

const ReadMoreContent = ({ rowDetail }) => {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <button onClick={() => setOpened(true)}>View</button>
      {opened && (
        <UploadNewsMessage
          opened={opened}
          setOpened={setOpened}
          id={rowDetail.id}
        />
      )}
    </>
  );
};

export default ReadMoreContent;
