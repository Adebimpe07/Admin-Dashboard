import { Button } from "@mantine/core";
import axios from "axios";
import React, { useState } from "react";
export const DeleteCourse = ({ uid }) => {
  const handleDelete = () => {
    var config = {
      method: "post",
      url: `https://aptbk.afexats.com/api/jobs/courses/${uid}/delete`,
      headers: {
        "api-key":
          "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
        "request-ts": "1667549939702",
        "hash-key":
          "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
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
