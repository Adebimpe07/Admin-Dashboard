// import dynamic from "next/dynamic";
// import React, { useState } from "react";
// import BlogTable from "../../src/components/main/body/contentPage/blogTable";
// import ContentGallery from "../../src/components/main/body/contentPage/contentGallery";
// import ContentHeader from "../../src/components/main/body/contentPage/contentHeader";
// import NewsTable from "../../src/components/main/body/contentPage/newsTable";

// const ContentSubHeader = dynamic(
//   () => import("../../src/components/main/body/contentPage/contentSubHeader"),
//   {
//     ssr: false,
//   }
// );

// const ContentTable = dynamic(
//   () => import("../../src/components/main/body/contentPage/contentTable"),
//   {
//     ssr: false,
//   }
// );

// const Index = () => {
//   const [selected, setSelected] = useState(0);

//   return (
//     <div className="flex-1 bg-[#E5E5E5] flex flex-col overflow-auto  h-full">
      // <ContentHeader />
      // <ContentSubHeader selected={selected} setSelected={setSelected} />
//       {selected === 0 ? (
//         <NewsTable />
//       ) : selected === 1 ? (
//         <BlogTable />
//       ) : (
//         <ContentGallery selected={selected} setSelected={setSelected} />
//       )}
//     </div>
//   );
// };

// export default Index;
import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index