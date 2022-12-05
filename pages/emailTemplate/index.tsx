import dynamic from "next/dynamic";
import React, { useState } from "react";
import EmailTemplateHeader from "../../src/components/main/body/emailTemplate/emailTemplateHeader";

const EmailTemplateTable = dynamic(
  () =>
    import("../../src/components/main/body/emailTemplate/emailTemplateTable"),
  {
    ssr: false,
  }
);
const SubHeaderEmailTemplate = dynamic(
  () =>
    import(
      "../../src/components/main/body/emailTemplate/subHeaderEmailTemplate"
    ),
  {
    ssr: false,
  }
);

const Index = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <EmailTemplateHeader />
      <SubHeaderEmailTemplate />
      <EmailTemplateTable/>
    </div>
  );
};

export default Index;
