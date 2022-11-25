import dynamic from "next/dynamic";
import React from "react";
import ContentHeader from "../../src/components/main/body/contentPage/contentHeader";

const BlogTable = dynamic(
  () => import("../../src/components/main/body/contentPage/blogTable"),
  { ssr: false }
);
const BlogSubHeader = dynamic(
  () => import("../../src/components/main/body/contentPage/blogSubheader"),
  { ssr: false }
);

const blog = () => {
  return (
    <div className="flex-1 bg-[#E5E5E5] flex flex-col overflow-auto  h-full">
      <ContentHeader />
      <BlogSubHeader />
      <BlogTable />
    </div>
  );
};

export default blog;
