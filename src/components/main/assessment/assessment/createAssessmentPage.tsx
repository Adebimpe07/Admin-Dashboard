import React from "react";

import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { Button, Select, Textarea, TextInput } from "@mantine/core";
import Header from "../categoryCreate/header";

const CreateAssessmentPage = () => {
  return (
    <main className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
      <Header />
      <div className="flex flex-col">
        <div className="flex items-center pl-4 gap-1 py-4">
          <Link href="/assessments/assessment">
            <ArrowLeft2 size="17" color="#000" />
            <h1 className="cursor-pointer">Back to Assessments</h1>
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center flex-1 mt-8">
        <div className="bg-white p-10 rounded-lg flex flex-col gap-1 w-[40rem]">
          <h1 className="font-semibold text-xl">Create New Assessment</h1>
          <TextInput
            label="Assessment Name"
            classNames={{
              label: "text-base text-[#000] font-normal",
            }}
          />
          <Select
            classNames={{
              label: "text-base text-[#000] font-normal",
            }}
            label="Course"
            data={[
              {
                value: "FrontEnd Development",
                label: "FrontEnd Development",
              },
              { value: "Backend Development", label: "Backend Development" },
              { value: "Product Management", label: "Product Management" },
              { value: "Mobile Development", label: "Mobile Development" },
              { value: "UI/UX Design", label: "UI/UX Design" },
            ]}
          />
          <div className="flex gap-5">
            <TextInput
              label="Bench Mark"
              classNames={{
                root: "w-[50%]",
                label: "text-base text-[#000] font-normal",
              }}
            />

            <TextInput
              label="Assigned Time"
              classNames={{
                root: "w-[50%]",
                label: "text-base text-[#000] font-normal",
              }}
            />
          </div>
          <Textarea
            label="Description"
            classNames={{
              label: "!text-base  text-[#000] font-normal",
            }}
            placeholder="Assessment Description"
            autosize
            minRows={2}
            maxRows={4}
          />

          <Link href="/assessments/assessment/all_categories">
            <Button className="bg-greenButton hover:bg-greenButton w-full mx-auto text-base mt-6">
              Create
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default CreateAssessmentPage;
