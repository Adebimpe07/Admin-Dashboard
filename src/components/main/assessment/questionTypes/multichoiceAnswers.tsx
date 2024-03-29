import React, { useState } from "react";
import { ArrowLeft2 } from "iconsax-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import Options from "../options";
import Header from "./header";
import { Button, Radio } from "@mantine/core";
import RadioOption from "../questionTypes/radioOption";

const Editor = dynamic(() => import("../editor"), { ssr: false });

const createQuestions = () => {
  return (
    <div className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
      <Header />
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between items-center px-4">
          {" "}
          <div className="flex items-center gap-1 py-4">
            <Link href="/assessments/categories/create_category">
              <ArrowLeft2 size="17" color="#000" />
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

        <div className="flex mx-[5rem] h-full my-4 p-6 gap-9 bg-white">
          <div className="flex flex-col gap-6 flex-1">
            <p>Question</p>
            <Editor />
          </div>
          <Options />
        </div>
      </div>
    </div>
  );
};

export default createQuestions;
