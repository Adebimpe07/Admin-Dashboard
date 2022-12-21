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
import CryptoJS, { SHA256 } from "crypto-js";
import { useForm } from "@mantine/form";
import { DatePicker } from "@mantine/dates";
import Loading from "../../../loading";

const Header = ({ CohortData }) => {
  const [opened, setOpened] = useState(false);

  const data = [
    { value: { title: "Product Management" }, label: "Product Management" },
    { value: "Frontend Development", label: "Frontend Development" },
    { value: "Backend Development", label: "Backend Development" },
    {
      value: "Mobile App Development",
      label: "Mobile App Development",
    },
    { value: "UI/UX Design", label: "UI/UX Design" },
  ];

  const UploadJobModal = () => {
    const [loading, setLoading] = useState(false);
    const Form = useForm({
      initialValues: {
        name: "",
        start_date: "",
        end_date: "",
        application_start_date: new Date(),
        application_end_date: new Date(),
        courses: null,
      },
    });
    const getCohort = () => {
      setLoading(true);
      const data = {
        ...Form.values,
        application_start_date:
          Form.values.application_start_date.toISOString(),
        application_end_date: Form.values.application_end_date.toISOString(),
      };
      const requestTs = String(Date.now());
      var config = {
        method: "post",
        baseURL: process.env.NEXT_PUBLIC_BASE_URL,
        url: `/api/jobs/cohort/create`,
        headers: {
          "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
          "request-ts": requestTs,
          "hash-key": SHA256(
            process.env.NEXT_PUBLIC_APP_API_KEY +
              process.env.NEXT_PUBLIC_SECRET_KEY +
              requestTs
          ).toString(CryptoJS.enc.Hex),
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data.data));
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
          setLoading(false);
          if (error.response.data.error.application_end_date)
            setMessage(error.response.data.error.application_end_date);
          setOpened2(true);
        });
    };

    const [opened2, setOpened2] = useState(false);
    const [message, setMessage] = useState("");

    return (
      <>
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
              <TextInput
                {...Form.getInputProps("name")}
                className="w-[50%]"
                label="Cohort Name"
              />
              <MultiSelect
                className="flex-1"
                data={data}
                label="Course(s)"
                placeholder="Add Courses"
                {...Form.getInputProps("courses")}
              />
            </div>
            <div className="flex gap-4">
              <TextInput
                size="sm"
                placeholder="YYYY-MM-DD"
                className="focus:border-inherit w-full"
                label="Cohort Start Date"
                {...Form.getInputProps("start_date")}
              />
              <TextInput
                className="focus:border-inherit w-full"
                placeholder="YYYY-MM-DD"
                label="Cohort End Date"
                {...Form.getInputProps("end_date")}
              />
            </div>
            <div className="flex gap-4">
              <DatePicker
                size="sm"
                className="focus:border-inherit w-full"
                label="Application Start Date"
                {...Form.getInputProps("application_start_date")}
              />
              <DatePicker
                className="focus:border-inherit w-full"
                label="Application End Date"
                autosize
                maxRows={4}
                {...Form.getInputProps("application_end_date")}
              />
            </div>
          </Text>
          <Button
            onClick={getCohort}
            fullWidth
            className="bg-greenButton hover:bg-greenButton h-10 m-auto text-lg my-4"
          >
            Create
          </Button>
          <Loading loading={loading} />
        </Modal>
        <Modal
          opened={opened2}
          withCloseButton={false}
          onClose={() => setOpened2(false)}
          classNames={{
            root: "m-auto",
            header: "!mb-0",
          }}
          centered
        >
          <div className="flex flex-col">
            <p>{message}</p>
            <Button
              className="bg-greenButton hover:bg-greenButton w-[10rem] text-sm mx-auto my-4 self-center"
              onClick={() => {
                setOpened2(false);
                setOpened(false);
              }}
            >
              Close
            </Button>
          </div>
        </Modal>
      </>
    );
  };

  return (
    <div className="flex justify-between pb-7 pt-6 px-5">
      <div className="place-items-center">
        <p className="text-[#252735] text-base font-semibold">
          Total Cohorts ({CohortData.length})
        </p>
      </div>
      <div className="flex gap-8">
        <Button
          className="bg-greenButton hover:bg-greenButton w-[12rem] h-9 m-auto text-lg"
          leftIcon={<img src={Cross.src} className="w-4" />}
          onClick={() => setOpened(true)}
        >
          <p>Create Cohorts</p>
        </Button>
      </div>
      <UploadJobModal />
    </div>
  );
};

export default Header;
