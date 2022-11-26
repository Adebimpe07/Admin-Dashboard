import dynamic from "next/dynamic";
import React from "react";
import ContentHeader from "../../src/components/main/body/contentPage/contentHeader";

const NewsTable = dynamic(
  () => import("../../src/components/main/body/contentPage/newsTable"),
  { ssr: false }
);
const NewsSubheader = dynamic(
  () => import("../../src/components/main/body/contentPage/newsSubheader"),
  { ssr: false }
);

const news = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto  h-full">
      <ContentHeader />
      <NewsSubheader />
      <NewsTable />
    </div>
  );
};

export default news;
