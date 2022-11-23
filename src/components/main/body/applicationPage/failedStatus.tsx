import React from 'react'
import Red from '../../../../assets/Red.png'

const FailedStatus = () => {
  return (
    <div className='flex items-center text-[#873031] text-xs font-medium gap-3 bg-[#FBD6D6] py-1.5 w-[103px] pl-3 rounded-lg'>
        <img src={Red.src} className="w-2" />
        <p>Failed</p>
    </div>
  )
}

export default FailedStatus