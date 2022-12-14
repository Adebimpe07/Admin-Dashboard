import { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Edit from "../../../../assets/edit.png";
import Trash from "../../../../assets/trash.png";
import Brief from "../../../../assets/briefcase.png";
import Vector from "../../../../assets/Vector.png";
import Java from "../../../../assets/java.png";
import moment from "moment";
import {
  Button,
  Modal,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import axios from "axios";
import { useForm } from "@mantine/form";
import Link from "next/link";

type Props = {
  title: string;
  time: string;
  fetchJob: Function;
};

const PostJobModal = ({ jobForm, opened, setOpened, fetchJob }: any) => {
  const [cohortList, setCohortList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const fetchCohorts = () => {
    axios({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/cohort-options`,
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
        "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
        "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
      },
    })
      .then(function (response) {
        setCohortList(
          response.data.data.results.reduce((acc, item) => {
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
    //
    if (jobForm.values.cohort) {
      axios({
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/cohort/${jobForm.values.cohort}/course-options`,
        headers: {
          "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
          "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
          "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
        },
      })
        .then(function (response) {
          setCourseList(
            response.data.data.results.reduce((acc, item) => {
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

  return (
    <Modal opened={opened} onClose={() => setOpened(false)} title="Edit Job">
      <Text className="flex flex-col gap-4 " size="sm">
        <p className="text-base text-[#948E8E] pb-2">
          Enter the details of the job
        </p>
        <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
          Job Description
        </h1>

        <div className="flex gap-4 text-[#4a4c58] w-full">
          <TextInput
            className="w-[50%]"
            label="Job"
            disabled
            placeholder="job will be auto-generated"
            {...jobForm.getInputProps("title")}
          />

          <TextInput
            label="Cohorts"
            className="flex-1"
            {...jobForm.getInputProps("cohort")}
          />
        </div>
        <Select
          className="flex-1"
          label="Course"
          data={courseList}
          {...jobForm.getInputProps("course")}
        />
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
        className="bg-greenButton hover:bg-greenButton h-10 m-auto text-lg my-4"
      >
        Save Changes
      </Button>
    </Modal>
  );
};
const handleDelete = () => {
  var config = {
    method: "post",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/2/delete`,
    headers: {
      "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
      "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
      "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
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

const UploadJobModal = ({ opened, setOpened }: any) => (
  <Modal
    className="text-[#4A4C58] text-base"
    opened={opened}
    onClose={() => setOpened(false)}
    title="Delete Job"
  >
    <p className="text-center text-sm">
      You are about to delete the selected job, kindly click the button below to
      confirm this acton.
    </p>
    <div className="flex justify-center">
      <button
        onClick={handleDelete}
        className="bg-[#A83C3D] py-2 w-full text-[white] rounded mt-8 text-base font-bold"
      >
        Delete
      </button>
    </div>
  </Modal>
);

const Inbox = ({ title, time, fetchJob }: Props) => {
  const [opened, setOpened] = useState(false);
  const [shift, setShift] = useState(false);
  const jobForm = useForm({
    initialValues: {
      cohort: "",
      course: "",
      requirement: "",
      created_by: "admin",
    },
  });

  return (
    <div className="flex justify-between p-6 bg-white my-6 mx-12 border rounded-2xl">
      <div className="flex gap-7">
        <img
          src={Java.src}
          alt="icon"
          className="w-16 border-0 rounded-2xl bg-[#38CB891A]"
        />

        <div>
          <h3 className="text-[#252735] text-lg font-semibold">{title}</h3>
          <div className="flex gap-2 items-center">
            <img src={Vector.src} alt="icon" className="w-3" />
            <p>Remote - Ibadan, Lagos Only</p>
            <img src={Brief.src} alt="icon" className="w-3.5" />
            <p>Full Time</p>
          </div>
          <div className="flex gap-4 pt-2">
            <Link href="applications/all-applications">
              <p className="text-[#38CB89] text-xs font-normal underline">
                View Application
              </p>
            </Link>
            <Link href="assessments/assessment">
              <p className="text-[#38CB89] text-xs font-normal underline">
                View Assesment
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <button>Uploaded {moment(time).fromNow()}</button>
        <div className="flex items-center mt-2 gap-4 justify-end">
          <button
            onClick={() => {
              setOpened(true);
            }}
          >
            <img src={Edit.src} alt="icon" className="w-2.5" />
            <PostJobModal
              jobForm={jobForm}
              fetchJob={fetchJob}
              opened={opened}
              setOpened={setOpened}
            />
          </button>
          <button
            onClick={() => {
              setShift(true);
            }}
          >
            <img src={Trash.src} alt="icon" className="w-4" />
            <UploadJobModal opened={shift} setOpened={setShift} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
