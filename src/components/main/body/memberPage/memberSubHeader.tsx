import {
    Button,
    FileInput,
    Menu,
    Modal,
    MultiSelect,
    Select,
    Text,
    Textarea,
    TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import Search from "../../../../assets/search.png";
import Cross from "../../../../assets/Icon.png";
import Elipse from "../../../../assets/Ellipse 8.png";
import Cloud from "../../../../assets/cloud.png";
import { RichTextEditor } from "@mantine/rte";
import Link from "next/link";
import { contentData } from "../../../../layout/contentData";
import CryptoJS from "crypto-js";
import axios from "axios";
import { useForm } from "@mantine/form";
import { number } from "yup";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");
var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const decrypt = (element: any) => {
  return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
    CryptoJS.enc.Utf8
  );
};

const encrypt = (element: any) => {
  return CryptoJS.AES.encrypt(element, key, {
    iv: iv,
  }).toString();
};
const MemberSubHeader = ({ route, setATSMember }) => {
    const [opened, setOpened] = useState(false);

    const UploadJobModal = ({ setATSMember }) => {
    const form = useForm({
      initialValues: {
       course : "",
        cohort: "",
        fullName: "",
        email: "",
        id: "",
        profilePicture: null,
        phoneNumber: number,
      },
    });
    // const [context, setContext] = useState("");

    const createAtsMember = () => {
      const access = JSON.parse(sessionStorage.getItem("token")).access;

      var config = {
        method: "post",
        url:
          "https://atsbk.afexats.com" +
          `/api/v1/tech-stars/testimonial-list-create/`,
        headers: {
          "api-key":
            "7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
          "hash-key":
            "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
          "request-ts": "1669397556",
          Authorization: `Bearer ${access}`,
          // TODO:process.env
        },
        data: {
          fullName: encrypt(form.values.fullName),
          course: encrypt(form.values.course),
          cohort: encrypt(form.values.cohort),
          email: encrypt(form.values.email),
          phoneNumber: encrypt(form.values.phoneNumber),
          techStarId: encrypt(form.values.id),
          profilePicture: encrypt(form.values.profilePicture),
        },
      };

      axios(config)
        .then(function (response) {
          console.log(response.data);
          fetchAllAts();
          setOpened(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

   const fetchAllAts = () => {
     var config = {
       method: "get",
       url: "https://atsbk.afexats.com/api/v1/tech-stars/tech-star-list-create/",
       headers: {
         "api-key": process.env.NEXT_PUBLIC_APP_API_KEY_1,
         "hash-key": process.env.NEXT_PUBLIC_HASH_KEY_1,
         "request-ts": process.env.NEXT_PUBLIC_REQUEST_TS_1,
       },
     };


     axios(config)
       .then(function (response) {
         console.log(response.data.data.results);
         setATSMember(
           response.data.data.results.reduce((acc, item) => {
             acc.push({
               full_name: decrypt(item.full_name),
               official_email: decrypt(item.official_email),
               profile_picture: decrypt(item.official_email),
               cohort: decrypt(item.cohort),
               course: decrypt(item.course),
               phone_number: decrypt(item.phone_number),
               tech_star_id: decrypt(item.tech_star_id),
             });
             return acc;
           }, [])
         );
       })
       .catch(function (error) {
         console.log(error);
       });
   };

     return (   
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Create New Tech Star"
            size="xl">
            <Text className="flex flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <h1 className="text-base pb-2">
                        Member Details
                    </h1>

                    <div className="flex gap-4">
                        <Select
                            className="flex-1"
                            label="Cohort"
                            data={[
                                { value: "ATS 1.0", label: "ATS 1.0" },
                                { value: "ATS 1.1", label: "ATS 1.1" },
                                { value: "ATS 2.0", label: "ATS 2.0" },
                                { value: "ATS 2.2", label: "ATS 2.2" },
                            ]}
                        />
                        <Select
                            className="flex-1"
                            label="Course"
                            data={[
                                {
                                    value: "fulltime",
                                    label: "Front-end Management",
                                },
                                {
                                    value: "remote",
                                    label: "Back-end Management",
                                },
                                {
                                    value: "hybrid",
                                    label: "Project Management",
                                },
                                {
                                    value: "mobile",
                                    label: "Mobile App Development",
                                },
                                { value: "ui", label: "UI/UX" },
                            ]}
                        />
                    </div>
                    <TextInput
                        size="sm"
                        className="focus:border-inherit"
                        label="Name"
                        {...form.getInputProps("fullName")}
                    />
                    <div className="flex gap-4">
                        <TextInput
                            text="email"
                            size="sm"
                            className="focus:border-inherit flex-1"
                            label="Email"
                            {...form.getInputProps("email")}
                        />
                        <TextInput
                            size="sm"
                            className="focus:border-inherit flex-1"
                            label="Phone No"
                            {...form.getInputProps("phoneNumber")}
                        />
                    </div>
                </div>
                <div className="flex flex-col  gap-4">
                    <p>Featured image</p>
                    <FileInput
                        placeholder="Browse and chose the files you want to upload from your computer"
                        icon={<img src={Cloud.src} className="w-6" />}
                        accept="image/png,image/jpeg"
                        className="bg-[#EBFAF3]"
                        {...form.getInputProps("profilePicture")}
                    />
                    <button className="bg-[#38CB89] text-[white] w-full py-2 rounded">
                        Add
                    </button>
                </div>
            </Text>
        </Modal>
    );
}
    return (
        <div className="flex justify-between  px-5">
            <div className="flex gap-9">
                {contentData.map((item, idx) => (
                    <Link href={item.href}>
                        <div
                            key={idx}
                            className={
                                route === idx
                                    ? " text-[#4A4C58] cursor-pointer"
                                    : "text-[#948E8E] cursor-pointer"
                            }>
                            {item.name}

                            <div
                                className={
                                    route === idx
                                        ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2"
                                        : "w-7 h-1 mx-auto border rounded-md mt-2.5"
                                }></div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="flex gap-4">
                <TextInput
                    className="w-[180px]"
                    placeholder="Search with Name"
                    radius="md"
                    rightSection={<img src={Search.src} className="w-[14px]" />}
                />

                <Button
                    className="bg-[#38CB89] hover:bg-[#38CB89] w-[141px] h-[34px] text-[13px]"
                    leftIcon={<img src={Cross.src} className="w-4" />}
                    onClick={() => setOpened(true)}>
                    <p>New ATS</p>
                    <UploadJobModal setATSMember={setATSMember} />
                </Button>
            </div>
        </div>
    );
};

export default MemberSubHeader;
