import { Button, Modal } from "@mantine/core";
import axios, { AxiosRequestConfig } from "axios";
import React, { useContext, useState } from "react";
import SuccessModal from "../body/emailTemplate/successModal";
import { useRouter } from "next/router";
import CryptoJS, { SHA256 } from "crypto-js";
import FormContext from "../../../context/store";
import Loading from "../../loading";

export const DeleteCourse = ({ uid, setDelModal }) => {
  var key = CryptoJS.enc.Base64.parse(
    "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
  );
  var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

  const handleDelete = () => {
    const requestTs = String(Date.now());

    var config: AxiosRequestConfig = {
      method: "post",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      url: `/api/jobs/courses/${uid}/delete`,
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
        console.log(response.data);
        setOpened(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { setCoursesCard } = useContext(FormContext);
  const [loading, setLoading] = useState(false);

  const fetchCourses = () => {
    const requestTs = String(Date.now());
    setLoading(true);
    var config: AxiosRequestConfig = {
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
    };

    axios(config)
      .then(function (response) {
        // setCoursesCard;
        setCoursesCard(
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
        console.log("error");
        setLoading(false);
      });
  };

  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-4 text-center leading-8">
        You are about to delete the selected Course. Kindly click the delete
        button below to confirm this action
      </div>
      <div className="flex justify-between py-6">
        <Button
          // onClick={() => setDelModel(false)}
          className="bg-greenButton hover:bg-greenButton"
        >
          Cancel
        </Button>
        <Button onClick={handleDelete} className="bg-[red] hover:bg-[red]">
          Delete
        </Button>
      </div>
      <Modal
        opened={opened}
        withCloseButton={false}
        onClose={() => setOpened(false)}
        classNames={{
          root: "m-auto",
          header: "!mb-0",
        }}
        centered
      >
        <div className="flex flex-col">
          <p>Course deleted sucessfully.</p>
          <Button
            className="bg-greenButton hover:bg-greenButton w-[10rem] text-sm mx-auto my-4 self-center"
            onClick={() => {
              setOpened(false);
              setDelModal({
                opened: false,
                component: null,
              });
              fetchCourses();
            }}
          >
            Close
          </Button>
        </div>
      </Modal>
      <Loading loading={loading} />
    </div>
  );
};
