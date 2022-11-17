import React, { useState } from "react";
import Logo from "../../assets/Afex_logo.png";
import { SideData } from "../../layout/sideData";
import { AdminData } from "../../layout/sideData";
import { Button, Text, Modal } from "@mantine/core";
import { Add } from "iconsax-react";
import { Select } from "@mantine/core";
import { Textarea } from "@mantine/core";

const Sidebar = () => {
  const [selected, setSelected] = useState("Dashboard");
  const [opened, setOpened] = useState(false);

  const UploadJobModal = () => (
    <Modal opened={opened} onClose={() => setOpened(false)} title="Upload Job">
      <Text className="flex flex-col gap-4 " size="sm">
        <p className="text-base text-[#948E8E] pb-2">
          Enter the details of the job
        </p>
        <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
          Job Description
        </h1>

        <div className="flex gap-4 text-[#4a4c58] w-full">
          <Select
            className="w-[50%]"
            label="Job"
            data={[
              { value: "react", label: "React" },
              { value: "ng", label: "Angular" },
              { value: "svelte", label: "Svelte" },
              { value: "vue", label: "Vue" },
            ]}
          />
          <Select
            className="flex-1"
            label="Course"
            data={[
              { value: "FrontEnd Development", label: "FrontEnd Development" },
              { value: "Backend Development", label: "Backend Development" },
              { value: "Product Management", label: "Product Management" },
              { value: "Mobile Development", label: "Mobile Development" },
              { value: "UI/UX Design", label: "UI/UX Design" },
            ]}
          />
        </div>
        <Select
          className="flex-1"
          label="Cohort"
          data={[
            { value: "react", label: "React" },
            { value: "ng", label: "Angular" },
            { value: "svelte", label: "Svelte" },
            { value: "vue", label: "Vue" },
          ]}
        />

        <Textarea
          className="focus:border-inherit"
          label="Job Requirements"
          autosize
          minRows={4}
          maxRows={4}
          size="xl"
        />
      </Text>
      <Button
        fullWidth
        className="bg-[#38CB89] hover:bg-[#38CB89] h-10 mx-auto text-lg my-4"
      >
        Upload
      </Button>
    </Modal>
  );

  return (
    <div className="pt-4 flex flex-col gap-4 w-[20rem]  overflow-auto h-full">
      <div className="border-b border-[#DBD9D9] pl-10 pb-4">
        <img width="120" src={Logo.src} alt="" />
      </div>
      <Button
        className="bg-[#38CB89] hover:bg-[#38CB89] w-[15rem] h-10 mx-auto text-lg"
        leftIcon={<Add size="17" variant="Outline" />}
        onClick={() => setOpened(true)}
      >
        <p>Upload job</p>
        <UploadJobModal />
      </Button>
      <div className="flex flex-col gap-4 pl-10 overflow-auto">
        <div className="flex flex-col gap-4">
          {SideData.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  selected === item.heading
                    ? "menuItem active flex items-center gap-2"
                    : "menuItem flex items-center gap-2"
                }
                onClick={() => setSelected(item.heading)}
              >
                {item.icon}
                <span>{item.heading}</span>
              </div>
            );
          })}
        </div>
        <div className="menuItem">
          <h2 className="text-[#A1A1AA] pb-2">ADMIN</h2>

          <div className="flex flex-col gap-3 flex-1">
            {AdminData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    selected === item.heading
                      ? "menuItem flex active items-center gap-2"
                      : "menuItem flex items-center gap-2"
                  }
                  onClick={() => setSelected(item.heading)}
                >
                  {item.icon}
                  <span>{item.heading}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
