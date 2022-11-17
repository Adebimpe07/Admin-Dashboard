import { StaticImageData } from "next/image";
import React from "react";
import { NotificationData } from "../../../layout/main";

type notificationprops = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  timestamp: string;
  name: string;
};

const Nofication = ({
  icon,
  title,
  subtitle,
  timestamp,
  name,
}: notificationprops) => {
  return (
    <div className="flex flex-col justify-between border-b border-[#DADADD]">
      <div className="flex gap-4 py-3">
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

const Notifications = () => {
  return (
    <div className="px-6 pt-6 border-b border-[#DADADD] rounded-t-lg  bg-[#fff]">
      <h1 className="text-[#18181B] font-semibold text-base">Notifications</h1>
      {NotificationData.map(
        ({ title, subtitle, timestamp, icon, name }, index) => {
          return (
            <Nofication
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
export default Notifications;
