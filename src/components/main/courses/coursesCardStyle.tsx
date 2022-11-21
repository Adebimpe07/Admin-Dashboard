import { Icon } from "@iconify/react";
import { Edit2, Trash } from "iconsax-react";
import { StaticImageData } from "next/image";
import React from "react";
import { CoursesData } from "../../../layout/coursesData";

type coursesprops = {
  picture: StaticImageData;
  title: string;
  paragraph: string;
  timestamp: string;
  status: string;
};

const Courses = ({
  picture,
  title,
  paragraph,
  timestamp,
  status,
}: coursesprops) => {
  return (
    <div>
      <div className="flex flex-col gap-2 bg-[#fff] rounded-lg">
        <img width="360" src={picture.src} alt="" />
        <div className="px-3 pb-2 flex flex-col gap-3">
          <div className="flex justify-between">
            <h1 className="font-semibold">{title}</h1>
            <div className="flex gap-3">
              <Edit2 size="17" color="#38CB89" variant="Bulk" />
              <Trash size="17" color="red" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-xs bg-[#DCFCE7] flex items-center px-1 rounded-lg">
              <Icon icon="bi:dot" color="#22c55e" width="19" height="19" />
              <p className="bg-[#DCFCE7] text-[#14532D] ">{status}</p>
            </div>
            <p className="text-xs">Created {timestamp}</p>
          </div>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
