import React, { useEffect, useState } from "react";
import Job from "./draft";
import axios from "axios";

const Body = ({ jobData }) => {
  // const jobList = () => {
  //   var config = {
  //     method: "get",
  //     url: "aptbk.afexats.com/api/jobs",
  //     headers: {
  //       "api-key":
  //         `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
  //       "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
  //       "hash-key":
  //         `${process.env.NEXT_PUBLIC_HASH_KEY}`,
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  // useEffect(() => {
  //   jobList();
  //   console.log('hellooo')
  // }, []);

  return (
    <div className="bg-mainBg overflow-auto">
      {jobData.map((item, idx) => (
        <Job title={item.title} time={item.date_posted} key={idx} />
      ))}
    </div>
  );
};

export default Body;
