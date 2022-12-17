import { StaticImageData } from "next/image";
import React, { useContext, useEffect, useState } from "react";
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
import axios, { AxiosRequestConfig } from "axios";
import { useForm } from "@mantine/form";
import Link from "next/link";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";
import FormContext from "../../../../context/store";

type Props = {
    title: string;
    time: string;
    fetchJob: Function;
    cohort: string;
    requirement: string;
    id: number;
};

var key = CryptoJS.enc.Base64.parse(
    "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
);
var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

const EditJobModal = ({ opened, setOpened, fetchJob }: any) => {
    const [cohort, setCohort] = useState([]);
    const [courseList, setCourseList] = useState([]);
    const {
        selectedJobTitle,
        selctedJobId,
        selectedCohortNo,
        requirement,
        admin,
    } = useContext(FormContext);

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
                console.log(decrypted_data);
                for (let i = 0; i < decrypted_data.results.length; i++) {
                    if (
                        decrypted_data.results[i].id ===
                        Number(selectedCohortNo)
                    ) {
                        setCohort(decrypted_data.results[i].name);
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchCohorts();
    }, []);
    useEffect(() => {
        if (cohort) {
            const requestTs = String(Date.now());
            var config: AxiosRequestConfig = {
                method: "get",
                baseURL: process.env.NEXT_PUBLIC_BASE_URL,
                url: `/api/jobs/cohort/${selectedCohortNo}/course-options`,
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
                    console.log(decrypted_data);
                    setCourseList(
                        decrypted_data.results.reduce((acc, item) => {
                            const value = item.id;
                            const label = item.title;
                            if (selectedJobTitle.includes(label)) {
                                acc.push({ value, label });
                            }
                            return acc;
                        }, [])
                    );
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }, [cohort]);

    const handleuploadJobForm = () => {
        console.log({
            cohort: selectedCohortNo,
            course: courseList[0]?.value,
            requirement,
            created_by: admin.username,
        });
        const requestTs = String(Date.now());
        var config: AxiosRequestConfig = {
            method: "put",
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            url: `/api/jobs/${selctedJobId}/update`,
            headers: {
                "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
                "request-ts": requestTs,
                "hash-key": sha256(
                    process.env.NEXT_PUBLIC_APP_API_KEY +
                        process.env.NEXT_PUBLIC_SECRET_KEY +
                        requestTs
                ).toString(CryptoJS.enc.Hex),
            },
            data: {
                data: CryptoJS.AES.encrypt(
                    JSON.stringify({
                        cohort: selectedCohortNo,
                        course: courseList[0]?.value,
                        requirement,
                        created_by: admin.username,
                    }),
                    key,
                    {
                        iv: iv,
                    }
                ).toString(),
            },
        };

        axios(config)
            .then(function (response) {
                let decrypted_data = JSON.parse(
                    CryptoJS.AES.decrypt(response.data.data, key, {
                        iv: iv,
                    }).toString(CryptoJS.enc.Utf8)
                );
                console.log(decrypted_data);
                setOpened(false);
                fetchJob();
            })
            .catch(function (error) {
                alert("An error occured");
                // setOpened(false);
            });
    };

    return (
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Edit Job">
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
                        value={selectedJobTitle}
                        disabled
                    />

                    <TextInput
                        label="Cohort"
                        className="flex-1"
                        value={cohort}
                        disabled
                    />
                </div>
                <Select
                    className="flex-1"
                    label="Course"
                    disabled
                    data={courseList}
                    value={courseList[0]?.value}
                />
                <Textarea
                    className="focus:border-inherit"
                    classNames={{
                        input: "!text-[16px]",
                    }}
                    label="Job Requirements"
                    autosize
                    minRows={4}
                    maxRows={8}
                    size="xl"
                    defaultValue={requirement}
                />
            </Text>
            <Button
                onClick={handleuploadJobForm}
                fullWidth
                className="bg-greenButton hover:bg-greenButton h-10 m-auto text-lg my-4">
                Save Changes
            </Button>
        </Modal>
    );
};

const DeleteJobModal = ({ opened, setOpened, fetchJob }: any) => {
    const { selctedJobId, selectedJobTitle } = useContext(FormContext);
    const handleDelete = () => {
        const requestTs = String(Date.now());
        var config: AxiosRequestConfig = {
            method: "post",
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            url: `/api/jobs/${selctedJobId}/delete`,
            headers: {
                "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
                "request-ts": requestTs,
                "hash-key": sha256(
                    process.env.NEXT_PUBLIC_APP_API_KEY +
                        process.env.NEXT_PUBLIC_SECRET_KEY +
                        requestTs
                ).toString(CryptoJS.enc.Hex),
            },
            data: "",
        };

        axios(config)
            .then(function (response) {
                let decrypted_data = JSON.parse(
                    CryptoJS.AES.decrypt(response.data.data, key, {
                        iv: iv,
                    }).toString(CryptoJS.enc.Utf8)
                );
                alert(decrypted_data);
                fetchJob();
                setOpened(false);
            })
            .catch(function (error) {
                setOpened(false);
                alert("an error occured");
            });
    };
    return (
        <Modal
            className="text-[#4A4C58] text-base"
            opened={opened}
            onClose={() => setOpened(false)}
            title="Delete Job">
            <p className="text-center text-sm">
                You are about to delete {selectedJobTitle}, kindly click the
                button below to confirm this acton.
            </p>
            <div className="flex justify-center">
                <button
                    onClick={handleDelete}
                    className="bg-[#A83C3D] py-2 w-full text-[white] rounded mt-8 text-base font-bold">
                    Delete
                </button>
            </div>
        </Modal>
    );
};

const Inbox = ({ title, cohort, id, requirement, time, fetchJob }: Props) => {
    const [opened, setOpened] = useState(false);
    const [shift, setShift] = useState(false);
    const {
        setSelectedJobTitle,
        setSelectedCohortNo,
        setSelectedJobId,
        setRequirement,
    } = useContext(FormContext);

    return (
        <div className="flex justify-between p-6 bg-white my-6 mx-12 border rounded-2xl">
            <div className="flex gap-7">
                <img
                    src={Java.src}
                    alt="icon"
                    className="w-16 border-0 rounded-2xl bg-[#38CB891A]"
                />

                <div>
                    <h3 className="text-[#252735] text-lg font-semibold">
                        {title}
                    </h3>
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
                            setSelectedJobTitle(title);
                            setSelectedCohortNo(cohort);
                            setRequirement(requirement);
                            setSelectedJobId(id);
                        }}>
                        <img src={Edit.src} alt="icon" className="w-2.5" />
                    </button>
                    <button
                        onClick={() => {
                            setShift(true);
                            setSelectedJobId(id);
                            setSelectedJobTitle(title);
                        }}>
                        <img src={Trash.src} alt="icon" className="w-4" />
                    </button>
                </div>
            </div>
            {opened && (
                <EditJobModal
                    fetchJob={fetchJob}
                    opened={opened}
                    setOpened={setOpened}
                />
            )}
            {shift && (
                <DeleteJobModal
                    opened={shift}
                    setOpened={setShift}
                    fetchJob={fetchJob}
                />
            )}
        </div>
    );
};

export default Inbox;
