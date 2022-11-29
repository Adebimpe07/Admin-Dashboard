import { Button } from "@mantine/core";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
export const DeleteAssessment = ({ id }) => {
  const router = useRouter();
  const deleteAssessment = (id) =>
    axios({
      method: "delete",
      url: `http://assessbk.afexats.com/api/assessment/${id}/`,
    }).then((response) => {
      console.log(response.data);
      router.reload();
    });
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-4 text-center leading-8">
        You are about to delete the selected Assessment. Kindly click the delete
        button below to confirm this action
      </div>
      <div className="flex justify-between py-6">
        <Button className="bg-greenButton hover:bg-greenButton">Cancel</Button>
        <Button
          className="bg-[red] hover:bg-[red]"
          onClick={() => deleteAssessment(id)}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};
