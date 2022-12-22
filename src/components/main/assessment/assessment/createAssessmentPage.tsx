import React, { useContext, useEffect, useState } from "react";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { Button, Select, Textarea, TextInput } from "@mantine/core";
import Header from "../../../header/index";
import axios from "axios";
import FormContext from "../../../../context/store";
import { useRouter } from "next/router";
import Loading from "../../../loading";
import CryptoJS, { SHA256 } from "crypto-js";

const key = CryptoJS.enc.Base64.parse(
  "wjqy62fB+dwz2gyz4sMePe9u2RsMVIyuaA6wPgUeXjw="
);
const iv = CryptoJS.enc.Base64.parse("gNyBAsNdWQEwHvbAm8g5Jg==");

const CreateAssessmentPage = () => {
  const { assessmentForm } = useContext(FormContext);
  const router = useRouter();
  const [courseList, setCourseList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    let requestTs = String(Date.now());
    let config = {
      method: "get",
      url:
        process.env.NEXT_PUBLIC_BASE_URL_2 + `/api/assessment/application-type`,
      headers: {
        "Content-Type": "Application/json",
        "api-key": process.env.NEXT_PUBLIC_API_KEY_2,
        "request-ts": requestTs,
        "hash-key": SHA256(
          process.env.NEXT_PUBLIC_API_KEY_2 +
            process.env.NEXT_PUBLIC_SECRET_KEY_2 +
            requestTs
        ).toString(CryptoJS.enc.Hex),
      },
    };
    console.log(config);
    axios(config)
      .then((res) => {
        let decrypted_data = JSON.parse(
          CryptoJS.AES.decrypt(res.data.data, key, {
            iv: iv,
          }).toString(CryptoJS.enc.Utf8)
        );
        console.log(decrypted_data);

        setCourseList(
          decrypted_data.results.reduce((acc, item) => {
            const value = item.id;
            const label = item.title;
            acc.push({ value, label });
            return acc;
          }, [])
        );
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("hello");
        setLoading(false);
      });
  }, []);

  const createAssessment = () => {
    axios({
      data: {
        ...assessmentForm.values,
        total_duration: +assessmentForm.values.total_duration,
      },
      url: `${process.env.NEXT_PUBLIC_BASE_URL_1}/api/assessment/create-list-assessment`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
        assessmentForm.reset();
        router.push("/assessments/assessment");
      })
      .catch((err) => console.log(err));

    //   data: JSON.stringify({ title: assessmentForm.values.name }),
    // }).then(async function (response) {
    //   console.log(response.data.data);
    //   let new_config = await {
    //     ...config,
    //     data: {
    //       ...assessmentForm.values,
    //       application_type: response.data.data.id,
    //     },
    //   };
    //   const res = await axios(new_config);
    //   const applicationData = await res.data;
    //   // console.log(res);
    //   console.log(applicationData);
    //   if (res.statusText === "Created") {
    //     router.push("/assessments/assessment/all_categories");
    //     assessmentForm.reset();
    //   }
    // });
    // .catch(function (error) {
    //     console.log(error);
    // });
  };

  return (
    <main className="h-screen flex-1 py-6 flex flex-col   bg-mainBg">
      <Header name="Assessment" />
      <div className="flex flex-col">
        <div className="flex items-center pl-4 gap-1 py-4">
          <ArrowLeft2 size="17" color="#000" />
          <Link href="/assessments/assessment">
            <h1 className="cursor-pointer">Back to Assessments</h1>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center flex-1 mt-8">
        <div className="bg-white p-10 rounded-lg flex flex-col gap-1 w-[40rem]">
          <h1 className="font-semibold text-xl pb-2">Create New Assessment</h1>
          <TextInput
            {...assessmentForm.getInputProps("name")}
            placeholder="ATS 1.0"
            label="Assessment Name"
            classNames={{
              root: "!p-0",
              input: "bg-transparent",
            }}
            type="text"
            className="border-[#ced4da] rounded-lg p-1 focus:outline-none w-full"
          />

          <Select
            classNames={{
              label: "text-base text-[#000] font-normal",
            }}
            {...assessmentForm.getInputProps("application_type")}
            label="Course"
            data={courseList}
          />
          <div className="flex gap-4 py-2">
            <div className="w-[50%] flex flex-col">
              <TextInput
                {...assessmentForm.getInputProps("benchmark")}
                label="Bench Mark"
                classNames={{
                  root: "!p-0",
                  input: "bg-transparent",
                }}
                type="text"
                className="border-[#ced4da] rounded-lg p-1 focus:outline-none w-full"
              />
            </div>

            <div className="w-[50%] flex flex-col text">
              <TextInput
                {...assessmentForm.getInputProps("total_duration")}
                label="Assigned Time"
                classNames={{
                  root: "!p-0",
                  input: "bg-transparent",
                }}
                // placeholder="00"
                type="text"
                className="border-[#ced4da] rounded-lg p-1 focus:outline-none w-full"
              />
            </div>
          </div>
          <Textarea
            label="Description"
            classNames={{
              label: "!text-base",
            }}
            placeholder="Assessment Description"
            autosize
            minRows={2}
            maxRows={4}
            {...assessmentForm.getInputProps("assessment_info")}
          />

          <Button
            onClick={createAssessment}
            className="bg-[#38CB89] hover:bg-[#38CB89] w-full mx-auto text-base mt-6"
          >
            Create
          </Button>
        </div>
      </div>
      <Loading loading={loading} />
    </main>
  );
};

export default CreateAssessmentPage;
