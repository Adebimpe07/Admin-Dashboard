import React from "react";

import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import { Button, Select, Textarea } from "@mantine/core";
import Header from "../categoryCreate/header";
import { useRouter } from "next/router";

const EditAssessmentPage = () => {
  const router = useRouter();
  return (
    <main className="h-screen flex-1 py-6 flex flex-col  bg-[#e5e5e5]">
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
        <div className="bg-[#fff] p-10 rounded-lg flex flex-col gap-1 w-[40rem]">
          <h1 className="font-semibold text-2x text-2xl pb-2">
            Create New Assessment
          </h1>
          <label className="pt-1">Assessment Name</label>
          <div className="border border-[#ced4da] rounded-lg w-full py-1">
            <input type="text" className="p-1 focus:outline-none w-full" />
          </div>
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
          <div className="flex gap-4 py-2">
            <div className="w-[50%] flex flex-col">
              <label className="py-2">Bench Mark</label>
              <div className="border border-[#ced4da] rounded-lg w-full py-1">
                <input type="text" className="p-1 focus:outline-none w-full" />
              </div>
            </div>

            <div className="w-[50%] flex flex-col text">
              <label className="py-2">Assigned Time</label>
              <div className="border border-[#ced4da] rounded-lg w-full py-1">
                <input type="text" className="p-1 focus:outline-none w-full" />
              </div>
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
          />
          <Button
            onClick={() => router.push("/assessments/assessment")}
            className="bg-[#38CB89] hover:bg-[#38CB89] w-full mx-auto text-base mt-6"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </main>
  );
};

export default EditAssessmentPage;
