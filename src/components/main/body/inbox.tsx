import { StaticImageData } from 'next/image'
import React from 'react'
import Edit from "../../../assets/edit.png";
import Trash from "../../../assets/trash.png";
import Brief from "../../../assets/briefcase.png";
import Vector from "../../../assets/Vector.png"



type Props = {
    icon: StaticImageData,
    title: string
}

const Inbox = ({icon, title}: Props) => {
  return (
    <div className='flex justify-between p-6 bg-white m-6 border rounded-2xl'>
        <div className='flex gap-7'>
            <img src={icon.src} alt="icon" className='w-20 border-0 rounded-2xl bg-[#38CB891A]' />
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
            <button>Upload</button>
            <div className="flex items-center mt-2 gap-4 justify-end">
                <img src={Edit.src} alt="icon" className='w-2.5' />
                <img src={Trash.src} alt="icon" className='w-4' />
            </div>
        </div>
    </div>
  )
}

export default Inbox