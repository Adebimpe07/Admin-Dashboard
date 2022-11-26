import React, { useState } from "react";
import Body from "../../src/components/main/body/jobPage/body";
import Header from "../../src/components/main/body/jobPage/header";
import HeaderJob from "../../src/components/main/body/jobPage/headerJob";
import All from "../../src/components/main/body/jobPage/job";

const index = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <HeaderJob />
      <Header selected={selected} setSelected={setSelected} />
      {selected === 0 ? <All /> : <Body />}
    </div>
  );
};

export default index;
