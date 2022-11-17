import React, { useState }  from 'react'
import HeaderApp from "../../src/components/main/body/applicationPage/headerApp";
import SubAppHeader from "../../src/components/main/body/applicationPage/subAppHeader";
import All from "../../src/components/main/body/jobPage/job";
import Body from "../../src/components/main/body/jobPage/body";
import TableHead from "../../src/components/main/body/applicationPage/tableHead"
import ApplicationPage from "../../src/components/main/body/applicationPage/applicationPage"
import {ShortList} from "../../src/components/main/body/applicationPage/shortList"

const Index = () => {

  const [selected, setSelected] = useState(0);

    return (
      <div className="bg-[#E5E5E5] flex-1 pb-4">
        <HeaderApp />
        <SubAppHeader/>
        <TableHead selected={selected} setSelected={setSelected}  />
        <ShortList />
      </div>
    );
}

export default Index