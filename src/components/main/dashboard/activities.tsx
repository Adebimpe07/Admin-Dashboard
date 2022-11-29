import React from "react";
import { ActivitiesData } from "../../../layout/main";

type activitiesprops = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  timestamp: string;
  name: string;
};

const Activity = ({
  icon,
  title,
  subtitle,
  timestamp,
  name,
}: activitiesprops) => {
  return (
    <div className="flex overflow-auto flex-col justify-between border-b border-[#DADADD]">
      <div className="flex gap-4 py-2">
        <span
          className={
            name === "briefcase"
              ? "bg-[#EBFAF3] p-2 rounded-lg self-center"
              : name === "folderminus"
              ? "bg-[#F1EBFC] p-2 rounded-lg  self-center "
              : "bg-[#FCF3E8] p-2 rounded-lg  self-center"
          }
        >
          {icon}
        </span>
        <div className="flex gap-2 flex-col justify-between flex-1">
          <h1 className="text-[#252735] font-semibold text-sm ">{title}</h1>
          <div className="flex justify-between text-[#514747] text-xs">
            <p className="self-end">
              {" "}
              By{" "}
              <span className="underline underline-offset-2">{subtitle}</span>
            </p>
            <p>{timestamp}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activities = () => {
  return (
    <div className="relative overflow-auto px-6 my-2  rounded-lg w-[50%] ml-6  bg-white">
      <h1 className="text-[#18181B] font-semibold text-base sticky top-0 bg-white pt-3 p-2 overflow-auto">
        Activities
      </h1>
      {ActivitiesData.map(
        ({ title, subtitle, timestamp, icon, name }, index) => {
          return (
            <Activity
              key={index}
              icon={icon}
              title={title}
              subtitle={subtitle}
              timestamp={timestamp}
              name={name}
            />
          );
        }
      )}
    </div>
  );
};
export default Activities;
