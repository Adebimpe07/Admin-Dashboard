import React from "react";
import { ArrowLeft2 } from "iconsax-react";
import Header from "./coursesHeader";
import Link from "next/link";
import { Button, FileInput, Select, Textarea, TextInput } from "@mantine/core";
import { IconUpload } from "@tabler/icons";
import FormContext from "../../../context/store";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import SucessModal from "./sucessModal";

const CreateCourses = () => {
  const { coursesForm } = useContext(FormContext);
  const router = useRouter();
  const [picture, setPicture] = useState(null);
  const [opened, setOpened] = useState(false);
  const CreateCourse = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("title", coursesForm.values.title);
    data.append("description", coursesForm.values.description);
    data.append("image", picture, picture?.name);

    var config = {
      method: "post",
      url: "https://aptbk.afexats.com/api/jobs/courses/create",
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
        console.log(JSON.stringify(response.data));
        setOpened(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="h-screen flex-1 py-6 flex flex-col bg-mainBg">
      <Header />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col">
          <Link href="/courses">
            <div className="flex items-center pl-4 gap-1 py-4 cursor-pointer">
              <ArrowLeft2 size="17" color="#000" />
              <p className="">Back</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col items-center flex-1 mt-8">
          <div className="bg-white p-10 rounded-lg flex flex-col gap-1 w-[40rem]">
            <h1 className="font-semibold text-2x text-2xl pb-2">
              Create New Courses
            </h1>
            <form>
              <TextInput
                label=" Course Title"
                {...coursesForm.getInputProps("title")}
              />

              <Textarea
                label="Description"
                classNames={{
                  label: "!text-base",
                }}
                placeholder="Course Description"
                autosize
                minRows={2}
                maxRows={4}
                {...coursesForm.getInputProps("description")}
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

              <Link href="/courses">
                <Button
                  onClick={(e) => CreateCourse(e)}
                  className="bg-greenButton hover:bg-greenButton w-full mx-auto text-base mt-6"
                >
                  Create
                </Button>
                <SucessModal
                  coursesForm={coursesForm}
                  opened={opened}
                  setOpened={setOpened}
                />
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourses;
