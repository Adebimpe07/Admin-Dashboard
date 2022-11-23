import React from 'react'
import Circle from '../../../../assets/Ellipse 8.png'

const PassedStatus = () => {
  return (
    <div className='flex items-center text-[#14532D] text-xs font-medium gap-3 bg-[#DCFCE7] py-1.5 w-[103px] pl-3 rounded-lg'>
        <img src={Circle.src} className="w-2" />
        <p>Passed</p>
    </div>
  )
}

export default PassedStatus