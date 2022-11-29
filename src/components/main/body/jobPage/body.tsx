import React from "react";
import { jobData } from "../../../../layout/jobData";
import Job from "./draft";

const Body = () => {
  return (
    <div className="bg-mainBg overflow-auto">
      {jobData.map((item, idx) => (
        <Job
          icon={item.icon}
          title={item.jobTitle}
          time={item.date}
          key={idx}
        />
      ))}
    </div>
  );
};

export default Body;
