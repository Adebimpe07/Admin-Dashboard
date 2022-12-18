import { Icon } from "@iconify/react";
import { Button, Modal } from "@mantine/core";
import { Edit2, Eye, Timer1, Trash } from "iconsax-react";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { useState } from "react";
import { DeleteCategory } from "./deleteCategory";

type categoryCardsprops = {
    questions: string;
    title: string;
    paragraph: string;
    timestamp: string;
    id: number;
};

const CategoryCardStyle = ({
    id,
    title,
    paragraph,
    timestamp,
    questions,
}: categoryCardsprops) => {
    const initialValues: { opened: boolean; component: React.ReactNode } = {
        opened: false,
        component: null,
    };
    const [DelModal, setDelModal] = useState(initialValues);
    function handleDelete(id) {
        setDelModal({
            opened: true,
            component: <DeleteCategory id={id} setDelModal={setDelModal} />,
        });
    }

    const router = useRouter();

    return (
        <div>
            <div className="flex h-full flex-col bg-white rounded-lg">
                <div className="p-4 flex h-full justify-between gap-5 flex-col">
                    <div className="flex justify-between gap-2">
                        <h1 className="font-semibold text-xs whitespace-nowrap">
                            {title}
                        </h1>
                        <div className="flex gap-3">
                            <Link
                                href={`/assessments/categories/edit_category/${id}`}>
                                <Edit2
                                    size="17"
                                    color="#38CB89"
                                    variant="Bulk"
                                />
                            </Link>
                            <Trash
                                className="cursor-pointer"
                                onClick={() => handleDelete(id)}
                                size="17"
                                color="red"
                            />
                            <Modal
                                opened={DelModal.opened}
                                onClose={() => setDelModal(initialValues)}>
                                {DelModal.component}
                            </Modal>
                        </div>
                    </div>
                    <p className="text-[12px]">
                        {paragraph.split("").splice(0, 100).join("")}
                    </p>
                    <div className="flex gap-2 items-center">
                        <Timer1 size="17" />
                        <p className="text-[12px]">{timestamp} Mins</p>
                        <span>.</span>
                        <p className="text-[12px]">{questions} Questions</p>
                    </div>
                    <Button
                        onClick={() =>
                            router.push(
                                `/assessments/categories/category/questions/${id}?title=${title}`
                            )
                        }
                        className="bg-[#4A4C58] hover:bg-[#4A4C58] text-[fff] items-center justify-center">
                        <span className="flex items-center gap-2 ">
                            <Eye size="17" color="#fff" />
                            <p className=" text-[12px]">View Questions</p>
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCardStyle;
