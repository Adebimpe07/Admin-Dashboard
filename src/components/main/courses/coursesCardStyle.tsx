import { Icon } from "@iconify/react";
import { Modal } from "@mantine/core";
import { Edit2, Trash } from "iconsax-react";
import { StaticImageData } from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { CoursesData } from "../../../layout/coursesData";
import { DeleteCourse } from "./deleteCourse";
import EditCourse from "./editCourse";

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
  const initialValues: { opened: boolean; component: React.ReactNode } = {
    opened: false,
    component: null,
  };
  const [DelModal, setDelModal] = useState(initialValues);
  function handleDelete() {
    setDelModal({
      opened: true,
      component: <DeleteCourse />,
    });
  }

  return (
    <div>
      <div className="flex flex-col gap-2 bg-white rounded-lg">
        <img width="360" src={picture.src} alt="" />
        <div className="px-3 pb-2 flex flex-col gap-3">
          <div className="flex justify-between">
            <h1 className="font-semibold">{title}</h1>
            <div className="flex gap-3">
              <EditCourse />

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
