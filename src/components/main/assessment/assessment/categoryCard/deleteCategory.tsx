import { Button } from "@mantine/core";
import React, { useState } from "react";
export const DeleteCategory = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-4 text-center leading-8">
        You are about to delete the selected Category. Kindly click the delete
        button below to confirm this action
      </div>
      <div className="flex justify-between py-6">
        <Button className="bg-green_Button hover:bg-green_Button">
          Cancel
        </Button>
        <Button className="bg-[red] hover:bg-[red]">Delete</Button>
      </div>
    </div>
  );
};
