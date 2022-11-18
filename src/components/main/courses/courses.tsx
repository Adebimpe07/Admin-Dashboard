import React from "react";
import { CoursesData } from "../../../layout/coursesData";
import Courses from "./coursesCard";

const courses = () => {
  return (
    <div>
      {CoursesData.map(
        (
          { picture, title, paragraph, timestamp, modulesNum, status },
          index
        ) => {
          return (
            <Courses
              key={index}
              picture={picture}
              title={title}
              paragraph={paragraph}
              timestamp={timestamp}
              modulesNum={modulesNum}
              status={status}
            />
          );
        }
      )}
    </div>
  );
};

export default courses;
