import { ArrowRight2, Eye } from "iconsax-react";
import { Icon } from "@iconify/react";
import React, { useContext, useEffect, useState } from "react";

// import { AsideMainData } from "../../../layout/main";
import { Duration } from "../../../layout/main";
import index from "../../../../pages";
import Link from "next/link";
import sha256 from "crypto-js/sha256";
import axios, { AxiosRequestConfig } from "axios";
import CryptoJS from "crypto-js";
import FormContext from "../../../context/store";

type asideprops = {
  title: string;
  subtitle: string;
  views: string;
  timestamp: string;
};
export const Durationtime = () => {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className="flex gap-6 text-[#18181B] text-xs my-4">
        {Duration.map((item, index) => {
          return (
            <div
              onClick={() => setTab(index)}
              key={index}
              className={
                tab === index
                  ? "py-1 px-2 cursor-pointer rounded border border-[#A1A1AA]"
                  : "p-1 px-2 cursor-pointer rounded border border-transparent"
              }
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AsideBar = ({ title, subtitle, views, timestamp }: asideprops) => {
  // const { jobDetails, setJobDetails } = useContext(FormContext);

  return (
    <div className="flex flex-col border-b border-[#DADADD] overflow-auto">
      <div className="flex flex-col gap-1 py-2">
        <div className="flex justify-between">
          <h1 className="text-[#252735] font-semibold text-sm ">{title}</h1>
          <Icon icon="bx:dots-horizontal-rounded" color="#a1a1aa" width="17" />
        </div>
        <p className=" text-[#514747] text-xs">
          Posted by{" "}
          <span className="underline underline-offset-2">{subtitle}</span>
        </p>
        <div className="flex justify-between text-[#8F9198] text-xs font-medium">
          <div className="flex items-center">
            <Eye size="15" color="#8F9198" variant="TwoTone" />
            <p>{views}</p>
          </div>
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export const Aside_main = () => {
  const [AsideMainData, setAsideMainData] = useState([]);

  var key = CryptoJS.enc.Base64.parse(
    "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
  );
  var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");
  const fetchJobs = () => {
    const requestTs = String(Date.now());
    var config: AxiosRequestConfig = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      url: `/api/jobs/today`,
      headers: {
        "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
        "request-ts": requestTs,
        "hash-key": sha256(
          process.env.NEXT_PUBLIC_APP_API_KEY +
            process.env.NEXT_PUBLIC_SECRET_KEY +
            requestTs
        ).toString(CryptoJS.enc.Hex),
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
        console.log("error");
      });
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="relative overflow-auto px-6 my-2 rounded-lg mx-5  bg-white">
      <div className="sticky top-0 bg-white">
        <h1 className="text-[#18181B] text-base font-semibold pt-2">Jobs</h1>
        <p className="text-[#71717A] font-medium text-sm py-2">
          List of all job entries in the past days
        </p>
      </div>
      <Durationtime />
      {AsideMainData.map(({ title, subtitle, views, timestamp }, index) => {
        return (
          <AsideBar
            key={index}
            title={title}
            views={views}
            subtitle={subtitle}
            timestamp={timestamp}
          />
        );
      })}
      <div className="flex justify-between py-2">
        <Link href="/jobs">
          <p className="text-[#A1A1AA] text-sm font-medium">SEE ALL JOBS</p>
        </Link>
        <ArrowRight2 size="17" color="#A1A1AA" variant="TwoTone" />
      </div>
    </div>
  );
};
