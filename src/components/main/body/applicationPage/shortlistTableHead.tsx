import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import FormContext from "../../../../context/store";
import { ApplicationHeaderData } from "../../../../layout/applicationHeaderData";

const ShortlistTableHead = () => {
    return (
        <div className="flex text-base font-medium gap-9 pl-[52px] pb-7">
            {ApplicationHeaderData.map((item, idx) => (
                <div>
                    <Link href={item.href}>
                        <p
                            key={idx}
                            className={
                                item.name === "Shortlist"
                                    ? " text-[#4A4C58] cursor-pointer"
                                    : "text-[#948E8E] cursor-pointer"
                            }>
                            {item.name}
                        </p>
                        <div
                            className={
                                item.name === "Shortlist"
                                    ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2.5"
                                    : "w-7 h-1 mx-auto border rounded-md mt-2.5"
                            }></div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default ShortlistTableHead;
