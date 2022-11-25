import React from "react";
import { ArrowLeft2 } from "iconsax-react";
import Header from "./coursesHeader";
import Link from "next/link";
import { Button, FileInput, Select, Textarea } from "@mantine/core";
import { IconUpload } from "@tabler/icons";

const CreateCourses = () => {
  return (
    <div className="h-screen flex-1 py-6 flex flex-col bg-[#e5e5e5]">
      <Header />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col">
          <div className="flex items-center pl-4 gap-1 py-4 cursor-pointer">
            <ArrowLeft2 size="17" color="#000" />
            <p className="">Back</p>
          </div>
        </div>
        <div className="flex flex-col items-center flex-1 mt-8">
          <div className="bg-[#fff] p-10 rounded-lg flex flex-col gap-1 w-[40rem]">
            <h1 className="font-semibold text-2x text-2xl pb-2">
              Create New Courses
            </h1>
            <label className="pt-1">Course Name</label>
            <div className="border border-[#ced4da] rounded-lg w-full py-1">
              <input type="text" className="p-1 focus:outline-none w-full" />
            </div>

            <div className="flex flex-col">
              <label className="py-2">Title</label>
              <div className="border border-[#ced4da] rounded-lg w-full py-1">
                <input type="text" className="p-1 focus:outline-none w-full" />
              </div>
            </div>

            <Textarea
              label="Description"
              classNames={{
                label: "!text-base",
              }}
              placeholder="Course Description"
              autosize
              minRows={2}
              maxRows={4}
            />

            <div className="flex items-center justify-center mt-8 mb-6">
              <FileInput
                label=""
                placeholder="Upload picture"
                icon={<IconUpload size={14} />}
                classNames={{
                  label: "text-align:center",
                }}
              />
            </div>

            <Link href="/courses">
              <Button className="bg-[#38CB89] hover:bg-[#38CB89] w-full mx-auto text-base mt-6">
                Create
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourses;
