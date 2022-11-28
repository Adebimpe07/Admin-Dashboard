import React, { useContext, useEffect } from "react";
import { jobhead } from "../../../../layout/jobHead";
import Cross from "../../../../assets/Icon.png";
import { useState } from "react";
import { Button, Text, Modal, TextInput } from "@mantine/core";
import { Add } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import FormContext from "../../../../context/store";
import axios from "axios";
import { useForm } from "@mantine/form";

type props = {
  selected: Number;
  setSelected: Function;
  fetchJob: Function
};

const PostJobModal = ({jobForm, opened, setOpened, fetchJob }: any) => {
const [cohortList, setCohortList] = useState([])
const [courseList, setCourseList] = useState([])
  const fetchCohorts = () => { 
    axios({
      url: 'http://aptbk.afexats.com/api/jobs/cohort-options',
      headers: { 
      'api-key': 'qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW', 
      'request-ts': '1667549939702', 
      'hash-key': 'ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba'
    }})
      .then(function (response) {
        setCohortList(response.data.data.results.reduce((acc, item) => {
          const value = item.id
          const label = item.name
          acc.push({value, label})
         return acc
        }, []))
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchCohorts()
  }, [])

  useEffect(() => { //
    if(jobForm.values.cohort) {
      axios({
        url: `http://aptbk.afexats.com/api/jobs/cohort/${jobForm.values.cohort}/course-options`,
        headers: { 
        'api-key': 'qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW', 
        'request-ts': '1667549939702', 
        'hash-key': 'ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba'
      }})
        .then(function (response) {
          setCourseList(response.data.data.results.reduce((acc, item) => {
            const value = item.id
            const label = item.title
            acc.push({value, label})
           return acc
          }, []))
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [jobForm.values.cohort])

  const handleuploadJobForm = () => {
    console.log(jobForm.values);

    var config = {
      method: "post",
      url: "http://aptbk.afexats.com/api/jobs/",
      headers: {
        "api-key":
          "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
        "request-ts": "1667549939702",
        "hash-key":
          "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
      },
      data: jobForm.values
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        jobForm.reset()
        setOpened(false)
        fetchJob()
      })
      .catch(function (error) {
        alert('An error occured')
        jobForm.reset()
        setOpened(false)
      });
  };


  return <Modal opened={opened} onClose={() => setOpened(false)} title="Upload Job">
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
}

const Header = ({ selected, setSelected, fetchJob }: props) => {
  const [opened, setOpened] = useState(false);
  const jobForm = useForm({
    initialValues: {
      cohort: "",
      course: "",
      requirement: "",
      created_by: "admin"
    },
  });

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
          className="bg-[#38CB89] hover:bg-[#38CB89] rounded-lg h-10 m-auto text-lg"
          leftIcon={<img src={Cross.src} className="w-3 h-3" />}
          onClick={() => setOpened(true)}
        >
          <p>Upload job</p>
          <PostJobModal jobForm={jobForm} fetchJob={fetchJob} opened={opened} setOpened={setOpened}  />
        </Button>
      </div>
    </div>
  );
};

export default Header;
