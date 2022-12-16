import dynamic from "next/dynamic";
import React from "react";
import Header from "../../src/components/header/index";

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
      <Header name="Support" />
      <DejiSubHeader />
      <DejiTable />
    </div>
  );
};

export default AskDeji;
