import { StaticImageData } from "next/image";
import React, { useState } from "react";
import Edit from "../../../../assets/edit.png";
import Trash from "../../../../assets/trash.png";
import Brief from "../../../../assets/briefcase.png";
import Vector from "../../../../assets/Vector.png";
import {
  Button,
  Modal,
  Select,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import Java from '../../../../assets/Java.png'
import moment from 'moment'





type Props = {
  icon: StaticImageData;
  title: string;
  time: string;
};

const Job = ({ icon, title, time }: Props) => {
  const [opened, setOpened] = useState(false);

  const PostJobModal = () => (
    <Modal opened={opened} onClose={() => setOpened(false)} title="Edit Job">
      <Text className="flex flex-col gap-4 " size="sm">
        <p className="text-base text-[#948E8E] pb-2">
          Enter the details of the job
        </p>
        <h1 className="text-base text-[#38CB89] border-b border-[#DBD9D9] pb-2">
          Job Description
        </h1>

        <div className="flex gap-4 text-[#4a4c58] w-full">
          <TextInput
            className="w-[50%]"
            label="Job"
            disabled
            placeholder="job will be auto-generated"
          />
          <Select
            className="flex-1"
            label="Course"
            data={[
              { value: "fulltime", label: "Front-end Management" },
              { value: "remote", label: "Back-end Management" },
              { value: "hybrid", label: "Project Management" },
              { value: "mobile", label: "Mobile App Development" },
              { value: "ui", label: "UI/UX" },
            ]}
          />
        </div>
<div>
          <TextInput label="Cohorts" />
        </div>

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
        className="bg-greenButton hover:bg-greenButton h-10 m-auto text-lg my-4"
      >
        Save Changes
      </Button>
    </Modal>
  );

  const [shift, setShift] = useState(false);

  const UploadJobModal = () => (
    <Modal
      className="text-[#4A4C58] text-base"
      opened={shift}
      onClose={() => setShift(false)}
      title="Delete Job"
    >
      <p className="text-center text-sm">
        You are about to delete the selected job, kindly click the button below
        to confirm this acton.
      </p>
      <div className="flex justify-center">
        <button className="bg-[#A83C3D] py-2 w-full text-[white] rounded mt-8 text-base font-bold">
          Delete
        </button>
      </div>
    </Modal>
  );
    
  return (
    <div className='flex justify-between p-6 bg-white my-6 mx-12 border rounded-2xl '>
        <div className='flex gap-7'>
            <img src={Java.src} alt="icon" className='w-16 border-0 rounded-2xl bg-[#38CB891A]' />
            <div>
                <h3 className='text-[#252735] text-lg font-semibold'>{title}</h3>
                <div className="flex gap-2 items-center">
                    <img src={Vector.src} alt="icon" className='w-3' />
                    <p>Remote - Ibadan, Lagos Only</p>
                    <img src={Brief.src} alt="icon" className='w-3.5' />
                    <p>Full Time</p>
                </div>
                <div className='flex gap-4 pt-2'>
                    <p className='text-[#38CB89] text-xs font-normal underline'>View Application</p>
                    <p className='text-[#38CB89] text-xs font-normal underline'>View Assesment</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <button>Uploaded {moment(time).fromNow()}</button>
            <div className="flex items-center mt-2 gap-4 justify-end">
               <button onClick={() => setOpened(true)}> <img src={Edit.src} alt="icon" className='w-2.5' /><PostJobModal /></button>
                <button onClick={() => setShift(true)}><img src={Trash.src} alt="icon" className='w-4' /><UploadJobModal /></button>
            </div>
        </div>
      </div>
  );
};

export default Job;
