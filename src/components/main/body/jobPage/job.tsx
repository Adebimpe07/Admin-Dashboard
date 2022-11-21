import React from 'react'
import Inbox from './inbox'
import { jobData } from "../../../../layout/jobData";

const All = () => {
    return (
        <div className="bg-[#E5E5E5] pb-8 overflow-auto">
          {jobData.map((item, idx) => (
            <Inbox icon={item.icon} title={item.jobTitle} time={item.date} key={idx} />
          ))}
        </div>
      );
};


export default All