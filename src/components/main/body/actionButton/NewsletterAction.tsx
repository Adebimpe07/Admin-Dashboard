import React from 'react'
import ConfirmSendNewsLetterMessage from './ConfirmSendNewsLetterMessage'
import ViewMoreNewsMessage from './ViewMoreNewsMessage'

const NewsletterAction = ({row}) => {
  return (
    <div className='flex gap-3 items-center'>
          <ViewMoreNewsMessage rowDetail={row.original} />
          <ConfirmSendNewsLetterMessage />
    </div>
  )
}

export default NewsletterAction