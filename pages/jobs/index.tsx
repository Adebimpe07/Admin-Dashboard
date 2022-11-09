import React, { useState } from "react";
import Body from "../../src/components/main/body/body";
import Header from "../../src/components/main/body/header";
import HeaderJob from "../../src/components/main/body/headerJob";
import All from "../../src/components/main/body/job";

const index = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="bg-[#E5E5E5] flex-1 h-screen">
      <HeaderJob />
      <Header selected={selected} setSelected={setSelected} />
      {selected === 0 ? <All /> : <Body />}
    </div>
  );
};

export default index;
