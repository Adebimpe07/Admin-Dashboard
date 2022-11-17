import React from 'react'
import HeaderCohort from "../../src/components/main/body/cohortPage/headerCohort";
import Header from '../../src/components/main/body/cohortPage/header';
import CohortTable from '../../src/components/main/body/cohortPage/table';

const Index = () => {
  return (
    <div className='flex-1 bg-[#E5E5E5] pb-4'>
        <HeaderCohort />
        <Header />
        <CohortTable />
    </div>
  )
}

export default Index