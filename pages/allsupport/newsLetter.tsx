import dynamic from "next/dynamic";
import React from "react";
import SupportHeader from "../../src/components/main/body/supportPage/supportHeader";

const NewsLetterTable = dynamic(
  () => import("../../src/components/main/body/supportPage/newsLetterTable"),
  { ssr: false }
);
const NewsLetterSubHeader = dynamic(
  () => import("../../src/components/main/body/supportPage/newsLetSubHeader"),
  { ssr: false }
);

const NewsLetter = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto  h-full">
      <SupportHeader />
      <NewsLetterSubHeader />
      <NewsLetterTable />
    </div>
  );
};

export default NewsLetter;
