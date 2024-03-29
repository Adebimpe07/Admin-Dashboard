import React from "react";
import { Edit2 } from "iconsax-react";
import Link from "next/link";
import { IconUpload } from "@tabler/icons";
import { useState } from "react";
import { Button, FileInput, Modal, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useRouter } from "next/router";
import Loading from "../../loading";

const editCourse = ({ uid, url }) => {
  const [opened, setOpened] = useState(false);
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [incomingFile, setIncomingFile] = useState(null);
  const router = useRouter();
  const requestTs = Date.now();

  // let data = new FormData();
  // data.append("type", form.values.type);
  // data.append("subject", form.values.subject);
  // data.append("body", form.values.body);
  // var config = {
  //   method: "PUT",
  //   url: rowdetail.url + "/edit",
  //   headers: {
  //     "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
  //     "request-ts": requestTs,
  //     "hash-key": sha256(
  //       process.env.NEXT_PUBLIC_APP_API_KEY +
  //         process.env.NEXT_PUBLIC_SECRET_KEY +
  //         requestTs
  //     ).toString(CryptoJS.enc.Hex),
  //   },
  //   data: {
  //     data: CryptoJS.AES.encrypt(JSON.stringify(form.values), key, {
  //       iv: iv,
  //     }).toString(),
  //   },
  // };

  // axios(config)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  const form = useForm({
    initialValues: {
      title: "",
      description: "",
    },
  });

  const handleSubmit = () => {
    let data = new FormData();
    if (picture) {
      data.append("title", form.values.title);
      data.append("description", form.values.description);
      data.append("image", picture, picture?.name);

      // console.log([...data]);
      var config = {
        method: "put",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/courses/${uid}/edit`,
        headers: {
          "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
          "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
          "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          // setOpened(true);
          // router.push('/courses')
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      data.append("title", form.values.title);
      data.append("description", form.values.description);
      data.append("image", incomingFile);

      // console.log([...data]);

      var config = {
        method: "put",
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/courses/${uid}/edit`,
        headers: {
          "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
          "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
          "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          // setOpened(true);
          // router.push('/courses')
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const populateInput = (url) => {
    setLoading(true);
    var config = {
      method: "get",
      url: url,
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
        "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
        "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
      },
    };

    axios(config)
      .then(function (response) {
        form.values.title = response.data.data.title;
        form.values.description = response.data.data.description;
        setIncomingFile(
          `${process.env.NEXT_PUBLIC_BASE_URL}` + response.data.data.image
        );
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div>
      <Edit2
        size="17"
        color="#38CB89"
        variant="Bulk"
        onClick={() => {
          if (uid) {
            setOpened(true);

            populateInput(url);
          } else alert("Profile cannot be edited");
        }}
      />
      <Loading loading={loading} />
      <Modal opened={opened} onClose={() => setOpened(false)}>
        <div className="flex flex-col items-center flex-1 ">
          <div className="bg-white px-10 rounded-lg flex flex-col gap-1 w-[40rem]">
            <h1 className="font-semibold text-2xl">Edit Course</h1>
            {/* <TextInput label="Course Name" />  */}
            <TextInput label="Course title" {...form.getInputProps("title")} />

            <Textarea
              label="Description"
              classNames={{
                label: "!text-base",
              }}
              placeholder="Course Description"
              autosize
              minRows={2}
              maxRows={4}
              {...form.getInputProps("description")}
            />

            <div className="flex items-center justify-center mt-8 mb-6">
              <FileInput
                label=""
                placeholder="Upload picture"
                icon={<IconUpload size={14} />}
                classNames={{
                  label: "text-align:center",
                }}
                value={picture}
                onChange={setPicture}
              />
            </div>

            <Button
              onClick={handleSubmit}
              className="bg-greenButton hover:bg-greenButton w-full mx-auto text-base mt-6"
            >
              Edit
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default editCourse;
