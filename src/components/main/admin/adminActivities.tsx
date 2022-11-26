import { StaticImageData } from "next/image";
import React from "react";
import { AdminData } from "../../../layout/adminData";

type adminprops = {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  timestamp: string;
  name: string;
};

const AdminStyles = ({
  icon,
  title,
  subtitle,
  timestamp,
  name,
}: adminprops) => {
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
        <div className="flex gap-2 flex-col justify-between flex-1 overflow-auto">
          <h1 className="text-[#252735] font-semibold text-xs ">{title}</h1>
          <div className="flex justify-between text-[#514747] text-[0.625rem]">
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

const Admin = () => {
  return (
    <div className="flex flex-col px-12 pt-2 border-b border-[#DADADD] rounded-t-lg  bg-white overflow-auto">
      <div className="">
        <h1 className="text-[#18181B] font-semibold text-base pb-2">
          Admin Activities
        </h1>
      </div>
      <div className="overflow-auto">
        {AdminData.map(({ title, subtitle, timestamp, icon, name }, index) => {
          return (
            <AdminStyles
              key={index}
              icon={icon}
              title={title}
              subtitle={subtitle}
              timestamp={timestamp}
              name={name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Admin;
