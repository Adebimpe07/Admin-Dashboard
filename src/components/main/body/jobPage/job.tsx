import React from "react";
import Inbox from "./inbox";
import { jobData } from "../../../../layout/jobData";
import Vector from "../../../../assets/Vector.png";

const All = ({ jobData, fetchJob }) => {
    return (
        <div className="bg-[#E5E5E5]  overflow-auto">
            {jobData.map((item, idx) => (
                <Inbox
                    id={item.id}
                    title={item.title}
                    cohort={item.cohort}
                    time={item.date_posted}
                    key={idx}
                    fetchJob={fetchJob}
                    requirement={item.requirement}
                />
            ))}
        </div>
    );
};

export default All;
