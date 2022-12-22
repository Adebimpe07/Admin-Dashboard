import React, { useContext, useEffect } from "react";
import { jobhead } from "../../../../layout/jobHead";
import Cross from "../../../../assets/Icon.png";
import { useState } from "react";
import { Button, Text, Modal, TextInput } from "@mantine/core";
import { Add } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import FormContext from "../../../../context/store";
import axios, { AxiosRequestConfig } from "axios";
import { useForm } from "@mantine/form";
import sha256 from "crypto-js/sha256";
import CryptoJS, { SHA256 } from "crypto-js";

type props = {
  selected: Number;
  setSelected: Function;
  fetchJob: Function;
};

var key = CryptoJS.enc.Base64.parse(
  "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
);
var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

const PostJobModal = ({ opened, setOpened, fetchJob }: any) => {
  const [cohortList, setCohortList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [data, setData] = useState([]);

  const jobForm = useForm({
    initialValues: {
      cohort: "",
      course: "",
      requirement: "",
      created_by: "admin",
    },
  });
  const getCourses = () => {
    const requestTs = String(Date.now());

    var config = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      url: `/api/jobs/courses`,
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
      .then((response) => {
        let decrypted_data = JSON.parse(
          CryptoJS.AES.decrypt(response.data.data, key, {
            iv: iv,
          }).toString(CryptoJS.enc.Utf8)
        ).results;
        console.log(
          decrypted_data.reduce((acc, item) => {
            acc.push({ value: item.title, label: item.title });
            return acc;
          }, [])
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchCohorts = () => {
    const requestTs = String(Date.now());
    var config: AxiosRequestConfig = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      url: `/api/jobs/cohort-options`,
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
        let decrypted_data = JSON.parse(
          CryptoJS.AES.decrypt(response.data.data, key, {
            iv: iv,
          }).toString(CryptoJS.enc.Utf8)
        );
        setCohortList(
          decrypted_data.results.reduce((acc, item) => {
            const value = item.id;
            const label = item.name;
            acc.push({ value, label });
            return acc;
          }, [])
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCohorts();
  }, []);

  useEffect(() => {
    const requestTs = String(Date.now());
    if (jobForm.values.cohort) {
      axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/cohort/${jobForm.values.cohort}/course-options`,
        headers: {
          "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
          "request-ts": requestTs,
          "hash-key": SHA256(
            process.env.NEXT_PUBLIC_APP_API_KEY +
              process.env.NEXT_PUBLIC_SECRET_KEY +
              requestTs
          ).toString(CryptoJS.enc.Hex),
        },
      })
        .then(function (response) {
          console.log(response.data);
          let decrypted_data = JSON.parse(
            CryptoJS.AES.decrypt(response.data.data, key, {
              iv: iv,
            }).toString(CryptoJS.enc.Utf8)
          ).results;
          console.log(decrypted_data);
          setCourseList(
            decrypted_data.reduce((acc, item) => {
              const value = item.id;
              const label = item.title;
              acc.push({ value, label });
              return acc;
            }, [])
          );
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [jobForm.values.cohort]);

  const handleuploadJobForm = () => {
    console.log(jobForm.values);

    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/`,
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
        "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
        "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
      },
      data: jobForm.values,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        jobForm.reset();
        setOpened(false);
        fetchJob();
      })
      .catch(function (error) {
        alert("An error occured");
        jobForm.reset();
        setOpened(false);
      });
  };
  //   useEffect(() => {
  //     getCourses();
  //   }, []);

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} title="Upload Job">
      <Text className="flex flex-col gap-4 " size="sm">
        <p className="text-base text-[#948E8E] pb-2">
          Enter the details of the job
        </p>
        <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
          Job Description
        </h1>

        <div className="flex gap-4 text-[#4a4c58] w-full">
          {/* <TextInput
          className="w-[50%]"
          label="Job"
          disabled
          placeholder="job will be auto-generated"
          {...jobForm.getInputProps("title")}
        /> */}
          <Select
            className="flex-1"
            label="Cohort"
            data={cohortList}
            {...jobForm.getInputProps("cohort")}
          />
        </div>
        <Select
          className="flex-1"
          label="Course"
          data={courseList}
          {...jobForm.getInputProps("course")}
        />
        <div></div>

        <Textarea
          className="focus:border-inherit"
          label="Job Requirements"
          autosize
          minRows={4}
          maxRows={4}
          size="xl"
          {...jobForm.getInputProps("requirement")}
        />
      </Text>
      <Button
        fullWidth
        className="bg-[#38CB89] hover:bg-[#38CB89] h-10 m-auto text-lg my-4"
        onClick={handleuploadJobForm}
      >
        Upload
      </Button>
    </Modal>
  );
};

const Header = ({ selected, setSelected, fetchJob }: props) => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex justify-between pt-6  px-8 ">
      <div className="flex gap-9 text-[#252735] text-sm font-semibold ">
        {jobhead.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(idx)}
            className="cursor-pointer"
          >
            <p>{item.heading}</p>
            <div
              className={
                selected === idx
                  ? "bg-[#30AD74] w-7 h-1 mx-auto border rounded-md mt-2.5"
                  : "w-7 h-1 mx-auto border rounded-md mt-2.5"
              }
            ></div>
          </div>
        ))}
      </div>
      <div>
        <Button
          className="bg-greenButton hover:bg-greenButton rounded-lg h-10 m-auto text-lg"
          leftIcon={<img src={Cross.src} className="w-3 h-3" />}
          onClick={() => setOpened(true)}
        >
          <p>Upload job</p>
          {opened && (
            <PostJobModal
              fetchJob={fetchJob}
              opened={opened}
              setOpened={setOpened}
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Header;
