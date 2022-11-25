import {
    Button,
    FileInput,
    Modal,
    MultiSelect,
    Select,
    Text,
    Textarea,
    TextInput,
  } from "@mantine/core";
  import React, { useContext, useState } from "react";
  import Search from "../../../../assets/search.png";
  import Cross from "../../../../assets/Icon.png";
  import Elipse from "../../../../assets/Ellipse 8.png";
  import Cloud from "../../../../assets/cloud.png";
  import { RichTextEditor } from "@mantine/rte";
  import Link from "next/link";
  import FormContext from "../../../../context/store";
  
  const GallerySubheader = () => {
  
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
    ];
  
    return (
      <div className="flex justify-between pt-6 mb-6 px-5">
        <div className="flex gap-9">
          {contentData.map((item, idx) => (
            <Link href={item.href}>
              <div
                key={idx}
                className={
                  item.name === 'gallery'
                    ? " text-[#4A4C58] cursor-pointer"
                    : "text-[#948E8E] cursor-pointer"
                }
              >
                {item.name}
  
                <div
                  className={
                    item.name.toLocaleLowerCase() === 'gallery'
                      ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2"
                      : "w-7 h-1 mx-auto border rounded-md mt-2.5"
                  }
                ></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  
  export default GallerySubheader;
  