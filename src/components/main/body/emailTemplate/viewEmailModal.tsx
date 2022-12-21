import React, { useEffect, useState } from "react";
import sha256 from "crypto-js/sha256";
import CryptoJS from "crypto-js";

const ViewEmailModal = ({ rowdetail, setSubAdminViewModal }) => {
  const [checked, setChecked] = useState(false);
  const [applicantDetails, setApplicantDetails] = useState(null);
  var key = CryptoJS.enc.Base64.parse(
    "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
  );
  var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

  const getApplicant = () => {
    const requestTs = String(Date.now());
    fetch(rowdetail.url, {
      headers: {
        "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
        "request-ts": requestTs,
        "hash-key": sha256(
          process.env.NEXT_PUBLIC_APP_API_KEY +
            process.env.NEXT_PUBLIC_SECRET_KEY +
            requestTs
        ).toString(CryptoJS.enc.Hex),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setApplicantDetails(
          JSON.parse(
            CryptoJS.AES.decrypt(data.data, key, {
              iv: iv,
            }).toString(CryptoJS.enc.Utf8)
          )
        );
      });
  };

  useEffect(() => {
    getApplicant();
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center text-lg font-semibold">Mail Details</h1>
      <p className="border-t-[1px] border-t-[#F5F5F5]">
        {applicantDetails?.subject}
      </p>
      <p
        className="border-t-[1px] border-t-[#F5F5F5]"
        dangerouslySetInnerHTML={{
          __html: applicantDetails?.body,
        }}
      ></p>
      {/* <p className="border-t-[1px] border-t-[#F5F5F5]">
        {applicantDetails?.body}
      </p> */}
    </div>
  );
};

export default ViewEmailModal;
