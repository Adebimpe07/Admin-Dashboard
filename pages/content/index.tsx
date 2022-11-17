import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import ContentGallery from '../../src/components/main/body/contentPage/contentGallery';
import ContentHeader from '../../src/components/main/body/contentPage/contentHeader';

const ContentSubHeader = dynamic(() => import('../../src/components/main/body/contentPage/contentSubHeader'), {
  ssr: false
})

const ContentTable = dynamic(() => import('../../src/components/main/body/contentPage/contentTable'), {
  ssr: false
})

const Index = () => {

    const [selected, setSelected] = useState(0);



  return (
    <div className='flex-1 bg-[#E5E5E5] pb-4'>
        <ContentHeader />
        <ContentSubHeader selected={selected} setSelected={setSelected}  />
        {selected !== 2 ?
        <ContentTable selected={selected} /> :
        <ContentGallery selected={selected} setSelected={setSelected}  />
    }
        
    </div>
  )
}

export default Index