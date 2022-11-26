import { Icon } from "@iconify/react";
import { Button, Modal } from "@mantine/core";
import { Edit2, Eye, Timer1, Trash } from "iconsax-react";
import Link from "next/link";
import React, { useState } from "react";
import { DeleteCategory } from "../../assessment/categoryCard/deleteCategory";

type categoryCardsprops = {
  questions: string;
  title: string;
  paragraph: string;
  timestamp: string;
};

const CategoryCardStyle = ({
  title,
  paragraph,
  timestamp,
  questions,
}: categoryCardsprops) => {
  const initialValues: { opened: boolean; component: React.ReactNode } = {
    opened: false,
    component: null,
  };
  const [DelModal, setDelModal] = useState(initialValues);
  function handleDelete() {
    setDelModal({
      opened: true,
      component: <DeleteCategory />,
    });
  }

  return (
    <div>
      <div className="flex h-full flex-col bg-white rounded-lg">
        <div className="p-4 flex h-full justify-between gap-5 flex-col">
          <div className="flex justify-between">
            <h1 className="font-semibold whitespace-nowrap">{title}</h1>
            <div className="flex gap-3">
              <Link href="/assessments/assessment/edit_assessment">
                <Edit2 size="17" color="#38CB89" variant="Bulk" />
              </Link>
              <Trash onClick={handleDelete} size="17" color="red" />
              <Modal
                opened={DelModal.opened}
                onClose={() => setDelModal(initialValues)}
              >
                {DelModal.component}
              </Modal>
              ;
            </div>
          </div>
          <p>{paragraph}</p>
          <div className="flex gap-2 items-center">
            <Timer1 size="17" />
            <p>{timestamp} Mins</p>
            <span>.</span>
            <p>{questions} Questions</p>
          </div>
          <Button className="bg-[#4A4C58] hover:bg-[#4A4C58] text-[fff] items-center justify-center">
            <span className="flex items-center gap-2 ">
              {" "}
              <Eye size="17" color="#fff" />
              <p>View Categories</p>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCardStyle;
