import React from "react";
import { Edit2 } from "iconsax-react";
import Link from "next/link";
import { IconUpload } from "@tabler/icons";
import { useState } from "react";
import { Button, FileInput, Modal, Textarea, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useRouter } from "next/router";

const editCourse = ({ uid }) => {
  const [opened, setOpened] = useState(false);
  const [picture, setPicture] = useState(null);
  const router = useRouter();

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
    },
  }); //

  const handleSubmit = () => {
    let data = new FormData();
    data.append("title", form.values.title);
    data.append("description", form.values.description);
    data.append("image", picture, picture?.name);

    var config = {
      method: "put",
      url: `https://aptbk.afexats.com/api/jobs/courses/${uid}/edit`,
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
        // setOpened(true);
        // router.push('/courses')
      })
      .catch(function (error) {
        console.log(error);
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

            var config = {
              method: "get",
              url: "127.0.0.1:9200/api/jobs/courses/1",
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
                console.log(JSON.stringify(response.data));
              })
              .catch(function (error) {
                console.log(error);
              });
          } else alert("Profile cannot be edited");
        }}
      />
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
