import { Button } from "@mantine/core";
import React, { useState } from "react";
export const DeleteCategory = ({ setDelModal, id }) => {
    const initialValues: { opened: boolean; component: React.ReactNode } = {
        opened: false,
        component: null,
    };

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap gap-4 text-center leading-8">
                You are about to delete the selected Category {id}. Kindly click
                the delete button below to confirm this action
            </div>
            <div className="flex justify-between py-6">
                <Button
                    onClick={() => setDelModal(initialValues)}
                    className="bg-greenButton hover:bg-greenButton">
                    Cancel
                </Button>
                <Button className="bg-[red] hover:bg-[red]">Delete</Button>
            </div>
        </div>
    );
};
