import React from "react";
import ConfirmSendNewsLetterMessage from "./ConfirmSendNewsLetterMessage";
import ViewMoreAskDejiMessage from "./ViewMoreAskDejiMessage.tsx";

const AskDejiAction = ({ row }) => {
  return (
    <div className="flex gap-3 items-center">
      <ViewMoreAskDejiMessage rowDetail={row.original} />
    </div>
  );
};

export default AskDejiAction;
