import React, { useEffect, useState } from "react";
import Job from "./draft";
import axios from "axios";

const Body = ({jobData}) => {

  // const jobList = () => {
  //   var config = {
  //     method: "get",
  //     url: "aptbk.afexats.com/api/jobs",
  //     headers: {
  //       "api-key":
  //         "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
  //       "request-ts": "1667549939702",
  //       "hash-key":
  //         "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
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
    <div className="bg-[#E5E5E5] overflow-auto">
      {jobData.map((item, idx) => (
        <Job
          title={item.title}
          time={item.date_posted}
          key={idx}
        />
      ))}
    </div>
  );
};

export default Body;
