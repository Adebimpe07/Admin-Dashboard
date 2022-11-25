import React, { useState } from "react";
import { CoursesData } from "../../../layout/coursesData";
import Courses from "./coursesCardStyle";
import { Button } from "@mantine/core";
import { Add } from "iconsax-react";
import Link from "next/link";
import { DeleteCourse } from "./deleteCourse";

const courses = () => {
  return (
    <>
      <main className="flex flex-col">
        <div className="flex justify-between items-center px-4 gap-1 py-4">
          <h3>Total Courses (9)</h3>
          <Link href="/courses/createCourses">
            <Button
              className="bg-[#38CB89] hover:bg-[#38CB89] w-[11rem] text-base"
              leftIcon={<Add size="17" variant="Outline" />}
              onClick={() => {}}
            >
              Create course
            </Button>
          </Link>
        </div>
        <div className="flex gap-4 m-4">
          {CoursesData.map(
            ({ picture, title, paragraph, timestamp, status }, index) => {
              return (
                <Courses
                  key={index}
                  picture={picture}
                  title={title}
                  paragraph={paragraph}
                  timestamp={timestamp}
                  status={status}
                />
              );
            }
          )}
        </div>
      </main>
    </>
  );
};

export default courses;
