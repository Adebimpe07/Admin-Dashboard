import React, { useState } from "react";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Header from "./header";
import { Button } from "@mantine/core";

const Editor = dynamic(() => import("../editor"), { ssr: false });

const createQuestions = () => {
  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
      <Header />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center px-4">
          {" "}
          <div className="flex items-center gap-1 py-4">
            <ArrowLeft2 size="17" color="#000" />
            <Link href="/assessments/categories/create_category">
              <h1 className="cursor-pointer">Back</h1>
            </Link>
          </div>
          <div className="self-end flex gap-3">
            <Button className="hover:bg-white w-[10rem] text-base bg-white text-[#000]">
              Add question
            </Button>
            <Link href="/assessments/categories/review_upload">
              <Button className="bg-greenButton hover:bg-greenButton w-[10rem] text-base">
                Finish
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col h-[80%] mt-4 mx-[5rem] p-6 gap-2 bg-white">
          <p>Question</p>
          <Editor />
        </div>
      </div>
    </div>
  );
};

export default createQuestions;
