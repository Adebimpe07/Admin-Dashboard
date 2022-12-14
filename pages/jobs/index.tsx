import axios from "axios";
import React, { useEffect, useState } from "react";
import Body from "../../src/components/main/body/jobPage/body";
import Header from "../../src/components/main/body/jobPage/header";
import HeaderJob from "../../src/components/main/body/jobPage/headerJob";
import All from "../../src/components/main/body/jobPage/job";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";
import Loading from "../../src/components/loading";

const index = ({ fetchJob }) => {
  const [selected, setSelected] = useState(0);
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(false);
  var key = CryptoJS.enc.Base64.parse(
    "SyJj90NqJNjeQZ/3wsEjzNh0iAgMY+RapIUH15uAutU="
  );
  var iv = CryptoJS.enc.Base64.parse("2GIKG+j6VoymmGKo4ouTyQ==");

  const jobList = () => {
    setLoading(true);
    // var config = {
    //   method: "get",
    //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs`,
    //   headers: {
    //     "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
    //     "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
    //     "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
    //   },
    // };
    const requestTs = String(Date.now());
    var config = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      url: `/api/jobs`,
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
        setJobData(
          JSON.parse(
            CryptoJS.AES.decrypt(response.data.data, key, {
              iv: iv,
            }).toString(CryptoJS.enc.Utf8)
          ).results
        );
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
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
      <Loading loading={loading} />
    </div>
  );
};

export default index;
