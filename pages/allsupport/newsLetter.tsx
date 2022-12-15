import dynamic from "next/dynamic";
import React from "react";
import Header from "../../src/components/header";

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
      <Header name="Support" />
      <NewsLetterSubHeader />
      <NewsLetterTable />
    </div>
  );
};

export default NewsLetter;
