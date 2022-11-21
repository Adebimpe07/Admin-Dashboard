import Link from "next/link";
import { useRouter } from "next/router";
import React, {useState} from "react";
import { ApplicationHeaderData } from "../../../../layout/applicationHeaderData";

type props = {
  selected: Number;
  setSelected: Function;
};

const TableHead = ({selected, setSelected}) => {


  return (
    <div className="flex text-base font-medium gap-9 pl-[52px] pb-7">
      {ApplicationHeaderData.map((item, idx) => (
        <div>
          <p
            key={idx}
            onClick={() => setSelected(idx)}
            className={
              selected === idx
                ? " text-[#4A4C58] cursor-pointer"
                : "text-[#948E8E] cursor-pointer"
            }
          >
            {item}
          </p>
          <div
            className={
              selected === idx
                ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2.5"
                : "w-7 h-1 mx-auto border rounded-md mt-2.5"
            }
          ></div>
        </div>
      ))}
    </div>
  );
};

export default TableHead;
