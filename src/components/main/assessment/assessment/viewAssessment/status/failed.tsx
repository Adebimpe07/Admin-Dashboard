import { Icon } from "@iconify/react";
import React from "react";

const failed = () => {
  return (
    <div className="bg-[#FBD6D6] flex rounded lg justify-center py-1 px-2 items-center">
      <Icon icon="ci:dot-02-s" color="#514747" width="24" />
      <p className="text-[#514747] text-xs">Failed</p>
    </div>
  );
};

export default failed;
