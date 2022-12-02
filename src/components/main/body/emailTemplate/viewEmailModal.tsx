import React, { useEffect, useState } from 'react'

const ViewEmailModal = ({rowdetail, setSubAdminViewModal}) => {
    const [checked, setChecked] = useState(false);
    const [applicantDetails, setApplicantDetails] = useState(null)

    const getApplicant = () => {
        fetch(rowdetail.url, {
          headers: {
            'api-key': 'qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW', 
      'request-ts': '1667549939702', 
      'hash-key': 'ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba'
          }
        }).then(res => res.json()).then(data => {
            console.log(data.data)
            setApplicantDetails(data.data)
        })
      }

      useEffect(() => {
        getApplicant()
      }, [])

  return (
    <div className='flex flex-col gap-2'>
        <h1 className='text-center text-lg font-semibold'>Mail Details</h1>
       <p className='border-t-[1px] border-t-[#F5F5F5]'>{applicantDetails?.subject}</p>
       <p className='border-t-[1px] border-t-[#F5F5F5]'>{applicantDetails?.body}</p>
       
       

    </div>
  )
}

export default ViewEmailModal