import dynamic from "next/dynamic";
import React from "react";
import ContentGallery from "../../src/components/main/body/contentPage/contentGallery";
import ContentHeader from "../../src/components/main/body/contentPage/contentHeader";
import { albumData } from "../../src/layout/albumData";
import { contentData } from "../../src/layout/contentData";

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
      {contentData.length > 0 ? <NewsTable /> : <ContentGallery />}
      
    </div>
  );
};

export default news;
