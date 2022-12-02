import React from "react";
import Link from "next/link";
const albumPicturesHeader = () => {
    const contentData = [
        {
            name: "Back to Gallery",
            href: "/content/gallery",
        },
    ];
    return (
        <div className='flex justify-between pt-6 mb-6 px-5'>
            <div className='flex gap-9'>
                {contentData.map((item, idx) => (
                    <Link
                        key={idx}
                        href={item.href}>
                        <div
                            className={
                                item.name === "gallery"
                                    ? " text-[#4A4C58] cursor-pointer"
                                    : "text-[#948E8E] cursor-pointer"
                            }>
                            {item.name}
                            <div
                                className={
                                    item.name.toLocaleLowerCase() === "gallery"
                                        ? " text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2"
                                        : "w-7 h-1 mx-auto border rounded-md mt-2.5"
                                }></div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
export default albumPicturesHeader;