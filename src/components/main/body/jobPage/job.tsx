import React from "react";
import Inbox from "./inbox";
import { jobData } from "../../../../layout/jobData";

const All = () => {
  return (
    <div className="bg-mainBg  overflow-auto">
      {jobData.map((item, idx) => (
        <Inbox
          icon={item.icon}
          title={item.jobTitle}
          time={item.date}
          key={idx}
        />
      ))}
    </div>
  );
};

export default All;
