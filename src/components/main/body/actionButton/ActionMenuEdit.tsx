import React, { useEffect } from "react";
import { jobhead } from "../../../../layout/jobHead";
import Cross from "../../../../assets/Icon.png";
import Arr from "../../../../assets/La.png";
import { useState } from "react";
import { Button, Text, TextInput } from "@mantine/core";
import { Add, Logout } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";
import Downloads from "../../../../assets/import.png";
import axios from "axios";
import CryptoJS, { SHA256 } from "crypto-js";
import { MultiSelect } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePicker } from "@mantine/dates";
import Loading from "@/src/components/loading";
import moment from "moment";

const ActionMenuEdit = ({ rowDetails }) => {
  var key = CryptoJS.enc.Base64.parse(
    "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
  );
  var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(rowDetails);
    Form.setValues({
      name: rowDetails.name,
      courses: null,
      start_date: rowDetails.start_date,
      end_date: rowDetails.end_date,
      application_start_date: new Date(
        rowDetails.application_start_date.props.application_start_date
      ),
      application_end_date: new Date(
        rowDetails.application_end_date.props.application_end_date
      ),
    });
    console.log(
      moment(
        rowDetails.application_start_date.props.application_start_date
      ).format("LLLL")
    );
    getCourses();
  }, []);
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
  const getCourses = () => {
    const requestTs = String(Date.now());

    var config = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      url: `/api/jobs/all-courses`,
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
        setData(
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
  const getCohort = () => {
    setLoading(true);
    const data = {
      ...Form.values,
      application_start_date: Form.values.application_start_date.toISOString(),
      application_end_date: Form.values.application_end_date.toISOString(),
      courses: Form.values.courses.reduce((acc, item) => {
        acc.push({ title: item });
        return acc;
      }, []),
    };
    const requestTs = String(Date.now());
    var config = {
      method: "put",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      url: rowDetails.url + `/edit`,
      headers: {
        "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
        "request-ts": requestTs,
        "hash-key": SHA256(
          process.env.NEXT_PUBLIC_APP_API_KEY +
            process.env.NEXT_PUBLIC_SECRET_KEY +
            requestTs
        ).toString(CryptoJS.enc.Hex),
      },
      data: {
        data: CryptoJS.AES.encrypt(
          JSON.stringify(data),

          key,

          { iv: iv }
        ).toString(),
      },
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
    <div className="">
      <div>
        <Text className="flex flex-col gap-4 " size="sm">
          <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
            Edit Cohort Details
          </h1>

          <div className="flex gap-4 text-[#4a4c58] w-full">
            <TextInput
              {...Form.getInputProps("name")}
              className="w-[50%]"
              label="Cohort Name"
              disabled
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
          Edit
        </Button>
        <Loading loading={loading} />
      </div>
    </div>
  );
};

export default ActionMenuEdit;
