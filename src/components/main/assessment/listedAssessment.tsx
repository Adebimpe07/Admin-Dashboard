import { Button, Modal, Select, Text, Textarea } from "@mantine/core";
import { Add, Folder } from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";

type listAssessmentprops = {
  text: string;
  link: string;
};
const ListAssessment = ({ text, link }: listAssessmentprops) => {
  return (
    <div className=" text-[#8F9198] flex-1 flex-col flex items-center justify-center">
      <div className="flex flex-col items-center gap-6 justify-center">
        <Folder size="80" color="#948E8E" />
        <h1 className="text-[#8F9198] font-semibold text-2xl">{text}</h1>
        <p>You will need to first create a log of categories</p>
        <button className="items-center justify-center rounded-lg text-[#fff] font-semibold flex bg-greenButton hover:bg-greenButton w-[15rem] h-10 m-auto">
          {<Add size="17" variant="Outline" />}
          <Link href={link}>
            {" "}
            <span onClick={() => {}} className="">
              {text}
            </span>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ListAssessment;
