import dynamic from 'next/dynamic'
import React from 'react'
import ContentHeader from '../../src/components/main/body/contentPage/contentHeader'

const BlogTable = dynamic(() => import('../../src/components/main/body/contentPage/blogTable'), {ssr: false})
const ContentSubHeader = dynamic(() => import('../../src/components/main/body/contentPage/contentSubHeader'), {ssr: false})

const blog = () => {
  return (
    <div className="flex-1 bg-[#E5E5E5] flex flex-col overflow-auto  h-full">
<ContentHeader />
      <ContentSubHeader route='blog' />
    <BlogTable />
    </div>
  )
}

export default blog