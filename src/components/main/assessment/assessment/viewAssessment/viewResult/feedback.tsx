import React from "react";
import Bad from "./assets/bad.png";
import Good from "./assets/good.png";
import Justok from "./assets/justok.png";
import Notsatisfied from "./assets/notsatisfied.png";
import Ok from "./assets/ok.png";
import Image from "next/image";

const Feedbackicon = () => {
  const emoji = [
    {
      emoji: Notsatisfied,
      text: "Not Satisfied",
    },
    {
      emoji: Bad,
      text: "Bad",
    },
    {
      emoji: Ok,
      text: "Ok",
    },
    {
      emoji: Justok,
      text: "Just ok",
    },
    {
      emoji: Good,
      text: "Very satisfied",
    },
  ];
  return (
    <div className="container bg-white ml-6 w-auto  flex flex-col gap-2 ">
      <div className="">
      </div>
      <div>
        <div className="m-4">
          <h1 className="font-semibold my-5 text-lg ">Candidate Feedback</h1>
          <div className="flex flex-col  m-3">
            <div>

              <div className="gap-6 flex mb-2  justify-center">
                {emoji.map(({ emoji, text }, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 flex-col items-center grayscale
                    hover:text-yellow-400 hover:opacity-50 hover:co
                    ">
                    <img
                      key={idx}
                      src={emoji.src}
                      className="w-11"
                    />
                    <p className="text-sm font-thin text-dark-shadow-blue">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col mb-2">
                <label className="font-semibold">Other Details</label>
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-light-white w-full border border-light-chinese-white py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-light-chinese-white   sm:text-sm h-[70px]"
                  placeholder=""
                  type="text"
                  name="search"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedbackicon