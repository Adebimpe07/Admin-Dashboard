import React from "react";
import {jobhead} from "../../../layout/jobHead";
import Cross from '../../../assets/Icon.png'
import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';


const Header = ({setSelected, selected}) => {

  const [opened, setOpened] = useState(false);

  return (
    <div className="flex justify-between pt-6 px-6">
        <div className="flex gap-9 text-[#252735] text-sm font-semibold">
        {jobhead.map((item, idx) => (
            <div onClick={()=> setSelected(idx)} className='cursor-pointer'>
              <p key={idx}>
                  {item.heading}  
              </p>
              <div className={selected === idx ? "bg-[#30AD74] w-7 h-1 mx-auto border rounded-md mt-2.5" : "w-7 h-1 mx-auto border rounded-md mt-2.5"}></div>
            </div>
        ))}
        </div>
        <div className="text-[#F9FAFB] bg-[#38CB89] py-2.5 border rounded-lg flex gap-4 items-center px-7">
            <img src={Cross.src} className="w-3 h-3"/>
            <p className="text-[#F9FAFB]">Post a job</p>
        </div>
    </div>
  );
};

export default Header;
