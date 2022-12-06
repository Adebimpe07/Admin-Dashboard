import React, { useEffect, useState } from "react";

const ViewEmailModal = ({ rowdetail, setSubAdminViewModal }) => {
  const [checked, setChecked] = useState(false);
  const [applicantDetails, setApplicantDetails] = useState(null);

  const getApplicant = () => {
    fetch(rowdetail.url, {
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
        "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
        "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data);
        setApplicantDetails(data.data);
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
      <p className="border-t-[1px] border-t-[#F5F5F5]">
        {applicantDetails?.body}
      </p>
    </div>
  );
};

export default ViewEmailModal;
