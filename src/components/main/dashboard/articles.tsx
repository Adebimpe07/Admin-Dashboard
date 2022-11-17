import { ArrowRight2, Eye } from "iconsax-react";
import { Icon } from "@iconify/react";
import React from "react";

import { ArticleData } from "../../../layout/main";
import { StaticImageData } from "next/image";

type articleprops = {
  picture: StaticImageData;
  title: string;
  subtitle: string;
  link: string;
  timestamp: string;
};

const ArticleStyle = ({
  title,
  subtitle,
  link,
  picture,
  timestamp,
}: articleprops) => {
  return (
    <div className="flex gap-2  border-b border-[#DADADD]">
      <img className="self-center" src={picture.src} alt="" />

      <div className="flex flex-col gap-1  py-3">
        <div className="flex justify-between">
          <h1 className="text-[#252735] font-semibold text-sm ">{title}</h1>
          <Icon icon="bx:dots-horizontal-rounded" color="#a1a1aa" width="17" />
        </div>
        <p className=" text-[#514747] text-xs">
          Posted by{" "}
          <span className="underline underline-offset-2">{subtitle}</span>
        </p>
        <div className="flex justify-between text-[#8F9198] text-xs font-medium">
          <div className="bg-[#DCFCE7] flex items-center p-1 rounded-lg">
            <Icon icon="bi:dot" color="#22c55e" width="19" height="19" />
            <p className="bg-[#DCFCE7] text-[#14532D] ">{link}</p>
          </div>
          <p>{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

export const Article = () => {
  return (
    <div className="relative overflow-auto px-6 my-2 rounded-lg ml-6 bg-[#fff]">
      <div className="flex justify-between sticky top-0 z-20 text-[#18181B] text-base bg-[#fff] pt-3 p-2 overflow-auto">
        <h1 className="text-[#18181B] text-base font-semibold ">
          Latest articles{" "}
        </h1>
        <p className="flex text-[#E1891C] items-center text-xs">
          View articles
          <span>
            <ArrowRight2 size="17" color="#E1891C" variant="TwoTone" />
          </span>
        </p>
      </div>
      <div className="overflow-auto">
        {ArticleData.map(
          ({ title, subtitle, timestamp, picture, link }, index) => {
            return (
              <ArticleStyle
                key={index}
                title={title}
                link={link}
                subtitle={subtitle}
                timestamp={timestamp}
                picture={picture}
              />
            );
          }
        )}
      </div>
    </div>
  );
};
