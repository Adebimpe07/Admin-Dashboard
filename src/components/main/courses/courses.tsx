import React, { useEffect, useState } from "react";
import { CoursesData } from "../../../layout/coursesData";
import Courses from "./coursesCardStyle";
import { Button } from "@mantine/core";
import { Add } from "iconsax-react";
import Link from "next/link";
import { DeleteCourse } from "./deleteCourse";
import axios from "axios";
import CoursesCards from "./coursesCardStyle";
import Courses_newPage from "./courses_newPage";

const courses = ({ coursesCard }) => {
  return (
    <main className="flex flex-col overflow-auto">
      <div className="flex justify-between items-center px-4 gap-1 py-6 sticky top-0 overflow-auto">
        <h3>Total Courses ({coursesCard.length})</h3>
        <Link href="/courses/createCourses">
          <Button
            className="bg-greenButton hover:bg-greenButton w-[11rem] text-base"
            leftIcon={<Add size="17" variant="Outline" />}
            onClick={() => {}}
          >
            Create course
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-4 mx-4 flex-wrap overflow-auto">
        {coursesCard.map((item, idx) => (
          <Courses
            key={idx}
            url={item.url}
            uid={item.uid}
            course_status={item?.course_status}
            title={item.title}
            image={item.image}
            description={item.description}
            timestamp={item.created_at}
          />
        ))}
      </div>
    </main>
  );
};

export default courses;
