import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import FormContext from "../../../../context/store";
import { ApplicationHeaderData } from "../../../../layout/applicationHeaderData";
import axios from "axios";

type props = {
  selected: Number;
  setSelected: Function;
};

const InterviewTableHead = () => {
  const fetchApplicantsData = () => {
    var config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/applications`,
      headers: {
        API_KEY:
          "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
        "REQUEST-TS": "1669397556",
        "HASH-KEY": "",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchApplicantsData();
  }, []);

  return (
    <div className="flex text-base font-medium gap-9 pl-[52px] pb-7">
      {ApplicationHeaderData.map((item, idx) => (
        <div>
          <Link href={item.href}>
            <p
              key={idx}
              className={
                item.name === "Invited for Interview"
                  ? " text-[#4A4C58] cursor-pointer"
                  : "text-[#948E8E] cursor-pointer"
              }
            >
              {item.name}
            </p>
            <div
              className={
                item.name === "Invited for Interview"
                  ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2.5"
                  : "w-7 h-1 mx-auto border rounded-md mt-2.5"
              }
            ></div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InterviewTableHead;
