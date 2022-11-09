import React, { useState } from "react";
import Body from "../../src/components/main/body/body";
import Header from "../../src/components/main/body/header";
import All from "../../src/components/main/body/job";


const index = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="bg-[#E5E5E5] h-screen">
      <Header selected={selected} setSelected={setSelected}/>
      {selected ===0? <All />: <Body/>}
      
    </div>
  );
};

export default index;
