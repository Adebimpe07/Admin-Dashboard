import dynamic from "next/dynamic";
import React from "react";
import Album from "../../src/components/main/body/contentPage/album";
import ContentHeader from "../../src/components/main/body/contentPage/contentHeader";
import GallerySubheader from "../../src/components/main/body/contentPage/gallerySubheader";
import { albumData } from "../../src/layout/albumData";

const ContentGallery = dynamic(
  () => import("../../src/components/main/body/contentPage/contentGallery"),
  { ssr: false }
);

const gallery = () => {
  return (
    <div className="flex-1 bg-[#E5E5E5] flex flex-col overflow-auto  h-full">
      <ContentHeader />
      <GallerySubheader />
      {albumData.length > 0 ? <Album /> : <ContentGallery />}
    </div>
  );
};

export default gallery;
