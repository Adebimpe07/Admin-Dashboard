import dynamic from 'next/dynamic'
import React from 'react'
import ContentHeader from '../../src/components/main/body/contentPage/contentHeader'

const ContentSubHeader = dynamic(() => import('../../src/components/main/body/contentPage/contentSubHeader'), {ssr: false})


const NewsTable = dynamic(() => import('../../src/components/main/body/contentPage/newsTable'), {ssr: false})


const news = () => {
  return (
    <div  className="flex-1 bg-[#E5E5E5] flex flex-col overflow-auto  h-full">
<ContentHeader />
      <ContentSubHeader route='news' />
    <NewsTable />
    </div>
  )
}

export default news