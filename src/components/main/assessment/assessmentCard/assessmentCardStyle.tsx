import { Icon } from "@iconify/react";
import { Button } from "@mantine/core";
import { Edit2, Eye, Timer1, Trash } from "iconsax-react";
import React from "react";

type assessmentCardsprops = {
  questions: string;
  title: string;
  paragraph: string;
  timestamp: string;
};

const AssessmentCard = ({
  title,
  paragraph,
  timestamp,
  questions,
}: assessmentCardsprops) => {
  return (
    <div>
      <div className="flex flex-col gap-2 bg-[#fff] rounded-lg">
        <div className="px-3 pb-2 flex flex-col gap-3">
          <div className="flex justify-between">
            <h1 className="font-semibold">{title}</h1>
            <div className="flex gap-3">
              <Edit2 size="17" color="#38CB89" variant="Bulk" />
              <Trash size="17" color="red" />
            </div>
          </div>
          <p>{paragraph}</p>
          <div className="flex gap-2 items-center">
            <Timer1 size="17" />
            <p>{timestamp} Mins</p>
            <span>.</span>
            <p>{questions} Questions</p>
          </div>
          <Button className="flex bg-[#4A4C58] text-[fff] items-center">
            <p>View Categories</p>
            <Eye size="17" color="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
