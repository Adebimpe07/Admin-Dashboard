import React, { useState } from "react";
import CreatePage from "./categoryCreate/selectCategory";
import CreateMultiChoice from "./questionTypes/multichoice";
import CreateEssay from "./questionTypes/essay";
import CreateCode from "./questionTypes/code";

const index = () => {
  const [active, setActive] = useState(0);

  return (
    <form className="h-screen flex-1 py-6 flex flex-col  bg-mainBg">
      {active === 0 ? (
        <CreatePage />
      ) : active === 1 ? (
        <CreateEssay />
      ) : active === 2 ? (
        <CreateMultiChoice />
      ) : active === 3 ? (
        <CreateCode />
      ) : null}
    </form>
  );
};

export default index;
