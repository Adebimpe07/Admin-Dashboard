import dynamic from "next/dynamic";
import React from "react";
import SupportHeader from "../../src/components/main/body/supportPage/supportHeader";

const DejiTable = dynamic(
  () => import("../../src/components/main/body/supportPage/dejiTable"),
  { ssr: false }
);
const DejiSubHeader = dynamic(
  () => import("../../src/components/main/body/supportPage/dejiSubHeader"),
  { ssr: false }
);

const AskDeji = () => {
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto  h-full">
      <SupportHeader />
      <DejiSubHeader />
      <DejiTable />
    </div>
  );
};

export default AskDeji;
