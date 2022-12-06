import { Button } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
export const DeleteCourse = ({ uid }) => {
  const handleDelete = () => {
    var config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/jobs/courses/${uid}/delete`,
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
        "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
        "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        // setOpened(true);
        // router.push('/courses')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
    </div>
  );
};
