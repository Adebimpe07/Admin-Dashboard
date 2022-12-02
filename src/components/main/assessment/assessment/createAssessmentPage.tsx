import React, { useContext, useEffect, useState } from "react";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { Button, Select, Textarea, TextInput } from "@mantine/core";
import Header from "../categoryCreate/header";
import axios from "axios";
import FormContext from "../../../../context/store";
import { useRouter } from "next/router";

const CreateAssessmentPage = () => {
  const { assessmentForm } = useContext(FormContext);
  const router = useRouter();
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    axios({
      url: "https://assessbk.afexats.com/api/assessment/application-type",
      method: "get",
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const createAssessment = () => {
    axios({
      url: "https://assessbk.afexats.com/api/assessment/create-list-assessment",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data);
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
      <Header />
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
            // {...assessmentForm.getInputProps('')}
            label="Course"
            data={[
              {
                value: "FrontEnd Development",
                label: "FrontEnd Development",
              },
              {
                value: "Backend Development",
                label: "Backend Development",
              },
              {
                value: "Product Management",
                label: "Product Management",
              },
              {
                value: "Mobile Development",
                label: "Mobile Development",
              },
              { value: "UI/UX Design", label: "UI/UX Design" },
            ]}
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
    </main>
  );
};

export default CreateAssessmentPage;
