import { Icon } from "@iconify/react";
import { Modal } from "@mantine/core";
import { Edit2, Trash } from "iconsax-react";
import moment from "moment";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CoursesData } from "../../../layout/coursesData";
import { DeleteCourse } from "./deleteCourse";
import EditCourse from "./editCourse";
// import
type coursesprops = {
  url: string;
  uid: string;
  image: string;
  title: string;
  description: string;
  timestamp: string;
  course_status: string;
};

const Courses = ({
  url,
  uid,
  title,
  description,
  image,
  timestamp,
  course_status,
}: coursesprops) => {
  const initialValues: { opened: boolean; component: React.ReactNode } = {
    opened: false,
    component: null,
  };
  const [DelModal, setDelModal] = useState(initialValues);

  function handleDelete() {
    if (uid) {
      setDelModal({
        opened: true,
        component: <DeleteCourse setDelModal={setDelModal} uid={uid} />,
      });
    } else alert("Course cannot be deleted");
  }

  return (
    <div className="flex flex-col gap-2 bg-white rounded-lg">
      <img
        width="300"
        height="200"
        className="w-full h-full"
        src={image}
        alt=""
      />
      <div className="px-3 pb-2 flex flex-col gap-3">
        <div className="flex justify-between">
          <h1 className="font-semibold">{title}</h1>
          <div className="flex gap-3">
            <EditCourse uid={uid} url={url} />

            <Trash onClick={handleDelete} size="17" color="red" />
            <Modal
              opened={DelModal.opened}
              onClose={() => setDelModal(initialValues)}
            >
              {DelModal.component}
            </Modal>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xs bg-[#DCFCE7] flex items-center px-1 rounded-lg">
            <Icon icon="bi:dot" color="#22c55e" width="19" height="19" />
            <p className="bg-[#DCFCE7] text-[#14532D] ">{course_status}</p>
          </div>
          <p className="text-xs">
            Created {moment(timestamp).format("MMM DD, YYYY")}
          </p>
        </div>
        <p>{description.split("").splice(0, 100).join("") + " ..."}</p>
      </div>
    </div>
  );
};

export default Courses;
