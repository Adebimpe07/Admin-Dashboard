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

type Props = {
  route: string;
};

const ContentSubHeader = ({ route }: Props) => {
  const { globalFilter, setGlobalFilter } = useContext(FormContext);

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

  const [opened, setOpened] = useState(false);

  const UploadJobModal = ({ route }: Props) =>
    route === "news" ? (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create News"
        size="xl"
        classNames={{
          modal: "!w-[50rem]",
        }}
      >
        <Text className="flex gap-8 ">
          <div className="flex  flex-col w-[100%] gap-4">
            <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
              News Details
            </h1>
            <TextInput
              size="sm"
              className="focus:border-inherit"
              label="Title"
            />
            <p>Content</p>
            <RichTextEditor
              id="rte"
              controls={[
                ["bold", "italic", "underline"],
                ["unorderedList", "h1", "h2"],
                ["sup", "sub"],
                ["alignLeft", "alignCenter", "alignRight"],
              ]}
            />
          </div>
          <div className="flex flex-col  mr-4  gap-4">
            <p>Featured image</p>
            <FileInput
              placeholder="Browse and chose the files you want to upload from your computer"
              icon={<img src={Cloud.src} className="w-6" />}
              accept="image/png,image/jpeg"
              className="bg-[#EBFAF3]"
            />
            <p>Add to category</p>
            <div className="flex gap-[10px]">
              <button className="bg-[#DCFCE7] px-2 text-[8px] font-medium text-[#14532D] flex gap-2 items-center py-2 rounded-3xl">
                <img src={Elipse.src} className="w-1" />
                NEWS
              </button>
              <button className="bg-[#DCFCE7] px-2 text-[8px] font-medium text-[#14532D] flex gap-2 items-center py-2 rounded-3xl">
                <img src={Elipse.src} className="w-1" />
                GENERAL
              </button>
              <button className="bg-[#DCFCE7] px-2 text-[8px] font-medium text-[#14532D] flex gap-2 items-center py-2 rounded-3xl">
                <img src={Elipse.src} className="w-1" />
                POLITICS
              </button>
              <button className="bg-[#DCFCE7] px-2 text-[8px] font-medium text-[#14532D] flex gap-2 items-center py-2 rounded-3xl">
                <img src={Elipse.src} className="w-1" />
                TECH
              </button>
            </div>
            <Select
              label="Author"
              data={[
                { value: "single", label: "Single" },
                { value: "married", label: "Married" },
              ]}
            />
            <div className="mt-auto self-center">
              <button className="bg-[#38CB89] text-[white] py-2 px-7 rounded-lg">
                Publish article
              </button>
            </div>
          </div>
        </Text>
      </Modal>
    ) : route === "blog" ? (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Blog"
        size="xl"
        classNames={{
          modal: "!w-[50rem]",
        }}
      >
        <Text className="flex gap-6 ">
          <div className="flex w-[100%] flex-col gap-4">
            <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
              Blog Details
            </h1>
            <TextInput
              size="sm"
              className="focus:border-inherit"
              label="Title"
            />
            <p>Content</p>
            <RichTextEditor
              id="rte"
              controls={[
                ["bold", "italic", "underline"],
                ["unorderedList", "h1", "h2"],
                ["sup", "sub"],
                ["alignLeft", "alignCenter", "alignRight"],
              ]}
            />
          </div>
          <div className="flex flex-col  gap-4">
            <p>Featured image</p>
            <FileInput
              placeholder="Browse and chose the files you want to upload from your computer"
              icon={<img src={Cloud.src} className="w-6" />}
              accept="image/png,image/jpeg"
              className="bg-[#EBFAF3]"
            />
            <Select
              label="Author"
              data={[
                { value: "single", label: "Single" },
                { value: "married", label: "Married" },
              ]}
            />
            <div className="mt-auto self-center">
              <button className="bg-[#38CB89] text-[white] py-2 px-7 rounded-lg">
                Publish article
              </button>
            </div>
          </div>
        </Text>
      </Modal>
    ) : (
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Create Cohorts"
      >
        <Text className="flex flex-col gap-4 " size="sm">
          <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
            Cohort Details
          </h1>

          <div className="flex gap-4 text-[#4a4c58] w-full">
            <TextInput className="w-[50%]" label="Cohort Name" />
          </div>
          <div className="flex gap-4">
            <Textarea
              size="sm"
              className="focus:border-inherit w-full"
              label="Cohort Start Date"
              autosize
              maxRows={4}
            />
            <Textarea
              className="focus:border-inherit w-full"
              label="Cohort End Date"
              autosize
              maxRows={4}
            />
          </div>
          <div className="flex gap-4">
            <Textarea
              size="sm"
              className="focus:border-inherit w-full"
              label="Application Start Date"
              autosize
              maxRows={4}
            />
            <Textarea
              className="focus:border-inherit w-full"
              label="Application End Date"
              autosize
              maxRows={4}
            />
          </div>
        </Text>
        <Button
          fullWidth
          className="bg-[#38CB89] hover:bg-[#38CB89] h-10 m-auto text-lg my-4"
        >
          Create
        </Button>
      </Modal>
    );

  return (
    <div className="flex justify-between pt-6 mb-6 px-5">
      <div className="flex gap-9">
        {contentData.map((item, idx) => (
          <Link href={item.href}>
            <div
              key={idx}
              className={
                item.name === route
                  ? " text-[#4A4C58] cursor-pointer"
                  : "text-[#948E8E] cursor-pointer"
              }
            >
              {item.name}

              <div
                className={
                  item.name.toLocaleLowerCase() === route
                    ? "bg-[#30AD74] text-[#4A4C58] w-7 h-1 mx-auto border rounded-md mt-2"
                    : "w-7 h-1 mx-auto border rounded-md mt-2.5"
                }
              ></div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex gap-4">
        {route === "news" ? (
          <TextInput
            placeholder="Search News"
            radius="md"
            rightSection={<img src={Search.src} className="w-[14px]" />}
          />
        ) : route === "blog" ? (
          <TextInput
            placeholder="Search Blog"
            radius="md"
            rightSection={<img src={Search.src} className="w-[14px]" />}
          />
        ) : null}

        {route == "news" ? (
          <Button
            className="bg-[#38CB89] hover:bg-[#38CB89] w-[141px] h-[34px] text-[13px]"
            leftIcon={<img src={Cross.src} className="w-4" />}
            onClick={() => setOpened(true)}
          >
            <p>Create News</p>
            <UploadJobModal route={route} />
          </Button>
        ) : route === "blog" ? (
          <Button
            className="bg-[#38CB89] hover:bg-[#38CB89] w-[141px] h-[34px] text-[13px]"
            leftIcon={<img src={Cross.src} className="w-4" />}
            onClick={() => setOpened(true)}
          >
            <p>Create Blog</p>
            <UploadJobModal route={route} />
          </Button>
        ) : null}
      </div>
    </div>
  );
};

export default ContentSubHeader;
