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
    name: "Jan",
    visited: 4000,
    applied: 2400,
  },
  {
    name: "Feb",
    visited: 3000,
    applied: 1398,
  },
  {
    name: "Mar",
    visited: 2000,
    applied: 9800,
  },
  {
    name: "Apr",
    visited: 2780,
    applied: 3908,
  },
  {
    name: "May",
    visited: 1890,
    applied: 800,
  },
  {
    name: "Jun",
    visited: 3390,
    applied: 2800,
  },
  {
    name: "Jul",
    visited: 3490,
    applied: 1300,
  },
  {
    name: "Aug",
    visited: 3490,
    applied: 300,
  },
  {
    name: "Sep",
    visited: 3490,
    applied: 1300,
  },
  {
    name: "Oct",
    visited: 3490,
    applied: 300,
  },
  {
    name: "Nov",
    visited: 3490,
    applied: 4300,
  },
  {
    name: "Dec",
    visited: 3490,
    applied: 300,
  },
];

const charts = () => {
  const [renderedData, setRenderedData] = useState(data);
  const [tab, setTab] = useState(0);
  const ChartHead = () => {
    return (
      <div className="flex items-center justify-between px-6">
        <h1>Applications</h1>
        <div className="flex gap-6 text-[#18181B] text-xs my-4">
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
        <button className="flex items-center gap-1 rounded border border-[#A1A1AA] p-1 px-2">
          <DocumentDownload size="15" />
          <p className="text-xs">Export PDF</p>
        </button>
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
          dataKey="visited"
          stroke="#8884d8"
          strokeWidth={2}
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        <Area
          type="monotone"
          dataKey="applied"
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
