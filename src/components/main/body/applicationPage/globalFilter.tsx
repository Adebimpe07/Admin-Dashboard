import { TextInput } from '@mantine/core'
import React from 'react'

const GlobalFilter = ({filter, setFilter}) => {
  return (
    <div className='flex flex-col mr-5 justify-end items-end'>
        <TextInput placeholder="Search with name or id" value={filter || ''} onChange={e=> setFilter(e.target.value)} className="w-48" />
    </div>
  )
}

export default GlobalFilter