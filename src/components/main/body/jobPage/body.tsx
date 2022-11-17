import React from "react";
import { jobData } from "../../../../layout/jobData";
import Job from "./draft";

const Body = () => {
  return (
    <div className="bg-[#E5E5E5]">
      {jobData.map((item, idx) => (
        <Job icon={item.icon} title={item.jobTitle} time={item.date} key={idx} />
      ))}
    </div>
  );
};

export default Body;
