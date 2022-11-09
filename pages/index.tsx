import React from "react";
import Aside from "../src/components/aside/aside";
import Body from "../src/components/main/body";

const index = () => {
  return (
    <div className="flex">
      <Aside />
      <Body />
    </div>
  );
};

export default index