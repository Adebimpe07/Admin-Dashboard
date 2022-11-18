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
  modulesNum: string;
  status: string;
};

const Courses = ({
  picture,
  title,
  paragraph,
  timestamp,
  modulesNum,
  status,
}: coursesprops) => {
  return (
    <div>
      <div className="flex flex-col gap-2 bg-[#fff] rounded-lg">
        <img src={picture.src} alt="" />
        <div>
          <h1>{title}</h1>
          <div>
            <Edit2 size="17" color="#FFF" variant="Bulk" />
            <Trash size="17" color="red" />
          </div>
        </div>
        <div>
          <div className="bg-[#DCFCE7] flex items-center p-1 rounded-lg">
            <Icon icon="bi:dot" color="#22c55e" width="19" height="19" />
            <p className="bg-[#DCFCE7] text-[#14532D] ">{status}</p>
          </div>
          <p>Created {timestamp}</p>
        </div>
        <p>{paragraph}</p>
        <p>{modulesNum} Modules</p>
      </div>
    </div>
  );
};

export default Courses;
