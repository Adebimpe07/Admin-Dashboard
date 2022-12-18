import React from 'react'
import dynamic from 'next/dynamic';

const Faqs = dynamic(() => import('../../src/components/main/body/supportPage/faq'), {ssr: false})

const faq = () => {
  return (
    <Faqs />
  )
}

export default faq
