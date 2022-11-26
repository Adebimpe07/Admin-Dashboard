import { Add, ArrowUp } from "iconsax-react";
import React from "react";
import { CardData } from "../../../layout/main";

type cardprops = {
  title: string;
  value: string;
  valueCount: string;
};

const CardBar = ({ title, value, valueCount }: cardprops) => {
  return (
    <div className="flex">
      <div className="flex w-full flex-col gap-4 border border-[#E4E4E7] bg-white rounded-lg px-6 py-2">
        <h1 className="text-[#948E8E] text-xs">{title}</h1>
        <div className="flex justify-between">
          <p className="font-semibold text-[#514747] ">{value}</p>
          {valueCount !== "" ? (
            <div className="flex items-center">
              <Add size="17" color="#38CB89" />
              <p className="text-[#38CB89]">{valueCount}</p>
              <ArrowUp size="17" color="#38CB89" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const Cards = () => {
  return (
    <div className="grid grid-cols-4 mx-5 gap-2">
      {CardData.map(({ title, value, valueCount }, index) => {
        return (
          <CardBar
            key={index}
            title={title}
            value={value}
            valueCount={valueCount}
          />
        );
      })}
    </div>
  );
};
export default Cards;
