import { Icon } from "@iconify/react";
import React from "react";

const passed = () => {
  return (
    <div className="bg-[#DCFCE7] flex rounded lg justify-center py-1 px-2 items-center">
      <Icon icon="ci:dot-02-s" color="#22C55E" width="24" />
      <p className="text-[#14532D] text-xs">Passed</p>
    </div>
  );
};

export default passed;
