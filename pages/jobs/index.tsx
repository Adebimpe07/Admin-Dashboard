import axios from "axios";
import React, { useEffect, useState } from "react";
import Body from "../../src/components/main/body/jobPage/body";
import Header from "../../src/components/main/body/jobPage/header";
import HeaderJob from "../../src/components/main/body/jobPage/headerJob";
import All from "../../src/components/main/body/jobPage/job";

const index = () => {
  const [selected, setSelected] = useState(0);
  const [jobData, setJobData] = useState([]);


  const jobList = () => {
    var config = {
      method: "get",
      url: "http://aptbk.afexats.com/api/jobs",
      headers: {
        "api-key":
          "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
        "request-ts": "1667549939702",
        "hash-key":
          "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
      },
    };

    

    axios(config)
      .then(function (response) {
        setJobData(response.data.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    jobList();
  }, []);

  return (
    <div className="flex-1 bg-[#E5E5E5] flex flex-col overflow-auto pb-4 h-full">
      <HeaderJob />
      <Header fetchJob={jobList} selected={selected} setSelected={setSelected} />
      {selected === 0 ? <All jobData={jobData} /> : <Body jobData={jobData} />}
    </div>
  );
};

export default index;
