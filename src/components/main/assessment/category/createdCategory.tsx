import React from "react";
import { NotificationDrop } from "../../../../../pages/assessments/categories";
import HeaderData from "../../notification_ProfilePicture";
import { Add, ArrowLeft2 } from "iconsax-react";
import { Button } from "@mantine/core";
import CategoryTable from "./categoryTable";
import Link from "next/link";

const CreatedCategory = () => {
  return (
    <div className="flex-1  bg-[#F9FAFB] flex flex-col ">
      <header className="flex justify-between border-b border-[#DBD9D9] p-4">
        <h1 className="text-2xl font-semibold text-[#4A4C58] py-[0.45rem]">
          Assessments
        </h1>
        <div className="flex gap-2 items-center">
          <NotificationDrop />
          <img width="40" src={HeaderData.adminProfilePicture.src} alt="" />
        </div>
      </header>
      <div className="flex justify-between px-4 py-4">
        <div className="flex items-center  gap-1 ">
          <ArrowLeft2 size="17" color="#000" />
          <Link href="/assessments/categories">
            <h1 className="cursor-pointer">Back to Assessments</h1>
          </Link>
        </div>

        <Button
          className="bg-[#38CB89] hover:bg-[#38CB89] w-[11rem] text-base"
          leftIcon={<Add size="17" variant="Outline" />}
          onClick={() => <Link href="createCategory"></Link>}
        >
          Add Category
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="pl-5">Total Category (100)</h3>
        <CategoryTable />
      </div>
    </div>
  );
};

export default CreatedCategory;
