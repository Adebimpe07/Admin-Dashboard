import React, { useEffect, useState } from "react";
import HeaderCohort from "../../src/components/main/body/cohortPage/headerCohort";
import Header from "../../src/components/main/body/cohortPage/header";
import CohortTable from "../../src/components/main/body/cohortPage/table";
import axios from "axios";
import CryptoJS, { SHA256 } from "crypto-js";
import Loading from "../../src/components/loading";
import { Button, Modal } from "@mantine/core";

const Index = () => {
  const [CohortData, setCohortData] = useState([]);
  const [loading, setLoading] = useState(false);
  var key = CryptoJS.enc.Base64.parse(
    "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
  );
  var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");
  const [opened, setOpened] = useState(false);
  const [message, setMessage] = useState("");

  const fetchAllCohorts = () => {
    const requestTs = String(Date.now());
    setLoading(true);

    var config = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      url: `/api/jobs/cohorts`,
      headers: {
        "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
        "request-ts": requestTs,
        "hash-key": SHA256(
          process.env.NEXT_PUBLIC_APP_API_KEY +
            process.env.NEXT_PUBLIC_SECRET_KEY +
            requestTs
        ).toString(CryptoJS.enc.Hex),
      },
    };
    axios(config)
      .then(function (response) {
        setCohortData(
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
        console.log("i errored out");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllCohorts();
  }, []);

  return (
    <div className="flex-1 bg-mainBg pb-4">
      <HeaderCohort />
      <Header CohortData={CohortData} />
      <CohortTable CohortData={CohortData} />
      <Loading loading={loading} />
    </div>
  );
};

export default Index;
