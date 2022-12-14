import {
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import React, { useState } from "react";
import { Chart } from "../../../layout/main";
import { DocumentDownload } from "iconsax-react";
const data = [
  {
    name: "Sun",
    applied: 4000,
    assessment: 2400,
  },
  {
    name: "Mon",
    applied: 3000,
    assessment: 1398,
  },
  {
    name: "Tue",
    applied: 2000,
    assessment: 9800,
  },
  {
    name: "Wed",
    applied: 2780,
    assessment: 3908,
  },
  {
    name: "Thur",
    applied: 1890,
    assessment: 800,
  },
  {
    name: "Fri",
    applied: 3390,
    assessment: 2800,
  },
  {
    name: "Sat",
    applied: 3490,
    assessment: 1300,
  },
];

const charts = () => {
  const [renderedData, setRenderedData] = useState(data);
  const [tab, setTab] = useState(0);
  const ChartHead = () => {
    return (
      <div className="flex items-center justify-between px-6">
        <h1>Applications</h1>
        <div className="flex gap-2 text-[#18181B] text-sm my-4">
          {Chart.map((item, index) => {
            return (
              <div
                onClick={() => setTab(index)}
                key={index}
                className={
                  tab === index
                    ? "p-1 px-2 cursor-pointer rounded border border-[#A1A1AA]"
                    : "p-1 cursor-pointer rounded border border-transparent"
                }
              >
                {item}
              </div>
            );
          })}
        </div>
        {/* <button className="flex items-center gap-1 rounded border border-[#A1A1AA] p-1 px-2">
          <DocumentDownload size="15" />
          <p className="text-xs">Export PDF</p>
        </button> */}
      </div>
    );
  };

  return (
    <div className="bg-[#F5F5F5] ml-6 rounded-lg my-2">
      <ChartHead />

      <AreaChart
        id="test"
        width={630}
        height={250}
        data={data}
        className="m-auto"
        //   margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs id="test">
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="applied"
          stroke="#8884d8"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="assessment"
          stroke="#82ca9d"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
};

export default charts;
