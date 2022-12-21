import React, { useEffect, useState } from "react";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";
import axios, { AxiosRequestConfig } from "axios";
import Loading from "../../../loading";

const ViewModal = ({ rowdetail, setSubAdminViewModal }) => {
    const [checked, setChecked] = useState(false);
    const [applicantDetails, setApplicantDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    var key = CryptoJS.enc.Base64.parse(
        "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
    );
    var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

    const getApplicant = () => {
        const requestTs = String(Date.now());
        setLoading(true);
        var config: AxiosRequestConfig = {
            method: "get",
            url: rowdetail.url,
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
                setApplicantDetails(
                    JSON.parse(
                        CryptoJS.AES.decrypt(response.data.data, key, {
                            iv: iv,
                        }).toString(CryptoJS.enc.Utf8)
                    )
                );
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                console.log("error");
                setLoading(false);
            });
    };

    useEffect(() => {
        getApplicant();
    }, []);

    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-center text-lg font-semibold">
                Applicant Details
            </h1>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                First Name: {applicantDetails?.applicant.first_name}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Last Name: {applicantDetails?.applicant.last_name}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Country: {applicantDetails?.applicant.country_of_origin}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Course of Study: {applicantDetails?.applicant.course_of_study}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Current Location: {applicantDetails?.applicant.current_location}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Date of Birth: {applicantDetails?.applicant.date_of_birth}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Email: {applicantDetails?.applicant.email}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Gender: {applicantDetails?.applicant.gender}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                {" "}
                Graduate Grade: {applicantDetails?.applicant.graduation_grade}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                School: {applicantDetails?.applicant.graduation_school}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Complete NYSC:{" "}
                {String(applicantDetails?.applicant.is_completed_NYSC)}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Willing to Relocate:{" "}
                {String(applicantDetails?.applicant.is_willing_to_relocate)}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Last Company: {applicantDetails?.applicant.last_company_worked}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Last Position Held: {applicantDetails?.applicant.last_position}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Marital Status: {applicantDetails?.applicant.marital_status}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Attachment: {applicantDetails?.applicant.other_attachment}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Phone No: {applicantDetails?.applicant.phone_number}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Qualification: {applicantDetails?.applicant.qualification}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Resume: {applicantDetails?.applicant.resume}
            </p>
            <p className="border-t-[1px] border-t-[#F5F5F5]">
                Years of Experience:{" "}
                {applicantDetails?.applicant.years_of_experience}
            </p>
            <p>Cover Letter: {applicantDetails?.applicant.cover_letter}</p>
            <Loading loading={loading} />
        </div>
    );
};

export default ViewModal;
