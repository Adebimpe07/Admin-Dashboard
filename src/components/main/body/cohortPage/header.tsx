import React, { useEffect } from "react";
import { jobhead } from "../../../../layout/jobHead";
import Cross from "../../../../assets/Icon.png";
import Arr from "../../../../assets/La.png";
import { useState } from "react";
import { Button, Text, Modal, TextInput } from "@mantine/core";
import { Add, Logout } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import Downloads from "../../../../assets/import.png";
import { MultiSelect } from "@mantine/core";
import axios from "axios";

const Header = () => {
  const [opened, setOpened] = useState(false);

  const [CohortData, setCohortData] = useState([]);

  const fetchAllCohorts = () => {
    axios({
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/cohorts`,
      headers: {
        "api-key":
          "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
        "request-ts": "1667549939702",
        "hash-key":
          "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        setCohortData(response.data.data.results.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllCohorts();
  }, []);

  const data = [
    { value: "pm", label: "Product Mnanagement" },
    { value: "ft", label: "Frontemd Development" },
    { value: "be", label: "Backend Development" },
    { value: "md", label: "Mobile App Development" },
    { value: "ud", label: "UI/UX Design" },
  ];

  const UploadJobModal = () => (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Create Cohorts"
    >
      <Text className="flex flex-col gap-4 " size="sm">
        <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
          Cohort Details
        </h1>

        <div className="flex gap-4 text-[#4a4c58] w-full">
          <TextInput className="w-[50%]" label="Cohort Name" />
          <MultiSelect
            className="flex-1"
            data={data}
            label="Course(s)"
            placeholder="Add Courses"
          />
        </div>
        <div className="flex gap-4">
          <Textarea
            size="sm"
            className="focus:border-inherit w-full"
            label="Cohort Start Date"
            autosize
            maxRows={4}
          />
          <Textarea
            className="focus:border-inherit w-full"
            label="Cohort End Date"
            autosize
            maxRows={4}
          />
        </div>
        <div className="flex gap-4">
          <Textarea
            size="sm"
            className="focus:border-inherit w-full"
            label="Application Start Date"
            autosize
            maxRows={4}
          />
          <Textarea
            className="focus:border-inherit w-full"
            label="Application End Date"
            autosize
            maxRows={4}
          />
        </div>
      </Text>
      <Button
        fullWidth
        className="bg-greenButton hover:bg-greenButton h-10 m-auto text-lg my-4"
      >
        Create
      </Button>
    </Modal>
  );

  return (
    <div className="flex justify-between pb-7 pt-6 px-5">
      <div className="place-items-center">
        <p className="text-[#252735] text-base font-semibold">
          Total Cohorts ({CohortData})
        </p>
      </div>
      <div className="flex gap-8">
        <Button
          className="bg-greenButton hover:bg-greenButton w-[12rem] h-9 m-auto text-lg"
          leftIcon={<img src={Cross.src} className="w-4" />}
          onClick={() => setOpened(true)}
        >
          <p>Create Cohorts</p>
          <UploadJobModal />
        </Button>
      </div>
    </div>
  );
};

export default Header;
