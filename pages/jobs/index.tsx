import axios from "axios";
import React, { useEffect, useState } from "react";
import Body from "../../src/components/main/body/jobPage/body";
import Header from "../../src/components/main/body/jobPage/header";
import HeaderJob from "../../src/components/main/body/jobPage/headerJob";
import All from "../../src/components/main/body/jobPage/job";

const index = ({ fetchJob }) => {
  const [selected, setSelected] = useState(0);
  const [jobData, setJobData] = useState([]);

  const jobList = () => {
    var config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`,
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
        "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
        "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
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
    <div className="flex-1 bg-mainBg flex flex-col overflow-auto pb-4 h-full">
      <HeaderJob />
      <Header
        fetchJob={jobList}
        selected={selected}
        setSelected={setSelected}
      />
      {selected === 0 ? (
        <All jobData={jobData} fetchJob={fetchJob} />
      ) : (
        <Body jobData={jobData} />
      )}
    </div>
  );
};

export default index;
