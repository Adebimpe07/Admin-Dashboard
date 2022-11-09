import React from 'react'
import Inbox from './inbox'
import { jobData } from "../../../layout/jobData";

const All = () => {
    return (
        <div className="bg-[#E5E5E5]">
          {jobData.map((item, idx) => (
            <Inbox icon={item.icon} title={item.jobTitle} key={idx} />
          ))}
        </div>
      );
};


export default All