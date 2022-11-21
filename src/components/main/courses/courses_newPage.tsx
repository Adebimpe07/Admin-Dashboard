import React from "react";
import { Add, Folder } from "iconsax-react";

const Courses_newPage = () => {
  return (
    <div className=" text-[#8F9198] flex-1 flex-col flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 justify-center">
        <Folder size="80" color="#948E8E" />
        <h1 className="text-[#8F9198] font-semibold text-2xl">
          Create Courses
        </h1>
        <p>You will need to first create a log of courses</p>
        <button className="items-center justify-center rounded-lg text-[#fff] font-semibold flex bg-[#38CB89] hover:bg-[#38CB89] w-[15rem] h-10 m-auto">
          {<Add size="17" variant="Outline" />}
          <span onClick={() => {}} className="">
            Create Courses
          </span>
        </button>
      </div>
    </div>
  );
};

export default Courses_newPage;