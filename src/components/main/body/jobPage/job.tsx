import React from "react";
import Inbox from "./inbox";
import { jobData } from "../../../../layout/jobData";
import Vector from "../../../../assets/Vector.png";


const All = ({jobData}) => {
    return (
        <div className="bg-[#E5E5E5]  overflow-auto">
          {jobData.map((item, idx) => (
            <Inbox  title={item.title} time={item.date_posted} key={idx} />
          ))}
        </div>
      );
};

export default All;
