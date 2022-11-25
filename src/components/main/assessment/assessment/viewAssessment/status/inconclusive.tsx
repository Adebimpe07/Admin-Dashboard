import { Icon } from "@iconify/react";
import React from "react";
const inconclusive = () => {
  return (
    <div className="bg-[#DBD9D9] flex rounded lg justify-center py-1 px-2 items-center">
      <Icon icon="ci:dot-02-s" color="black" width="24" />
      <p className="text-[#514747] text-xs">Inconclusive</p>
    </div>
  );
};

export default inconclusive;
