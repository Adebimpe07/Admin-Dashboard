
import React, { useContext, useState } from "react";
import Link from "next/link";

const AuthorSubHeader = () => {
    const contentData = [
        {
            name: "News",
            href: "/content/news",
        },
        {
            name: "Blog",
            href: "/content/blog",
        },
        {
            name: "Gallery",
            href: "/content/gallery",
        },
        {
            name: "Author",
            href: "/content/author",
        },
    ];

    return (
        <div className="flex justify-between pt-6 mb-6 px-5">
            <div className="flex gap-9">
                {contentData.map((item, idx) => (
                    <Link href={item.href}>
                        <div
                            key={idx}
                            className={
                                item.name === "author"
                                    ? " text-[#4A4C58] cursor-pointer"
                                    : "text-[#948E8E] cursor-pointer"
                            }>
                            {item.name}

                            <div
                                className={
                                    item.name.toLocaleLowerCase() === "author"
                                        ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2"
                                        : "w-7 h-1 mx-auto border rounded-md mt-2.5"
                                }></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AuthorSubHeader;
