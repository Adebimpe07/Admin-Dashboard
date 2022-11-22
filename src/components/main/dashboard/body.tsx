import React, { useEffect, useState } from "react";
import HeaderMain from "./header";
import Cards from "./cards";
import { Aside_main } from "./aside_main";
import Activities from "./activities";
import Charts from "./charts";
import { Article } from "./articles";
import Assessment from "../../../../pages/assessments/categories";

const body = () => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  useEffect(() => {
    setShouldAnimate(true);
  }, []);
  return (
    <div className="flex-1 flex flex-col bg-[#e5e5e5] h-screen overflow-auto">
      <div className="sticky top-0 z-10  bg-[#e5e5e5]">
        <HeaderMain />
        <Cards />
      </div>

      <div className="grid grid-cols-[2fr_1fr] overflow-auto">
        <div className="overflow-auto flex flex-col flex-1">
          {shouldAnimate && <Charts />}
          <div className="flex overflow-auto">
            <Activities />
            <Article />
          </div>
        </div>
        <Aside_main />
      </div>
    </div>
  );
};

export default body;
