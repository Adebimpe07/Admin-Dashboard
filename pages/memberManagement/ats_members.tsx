import dynamic from "next/dynamic";
import React, { useState } from "react";
import MemberHeader from "../../src/components/main/body/memberPage/memberHeader";
import ContentGallery from "../../src/components/main/body/contentPage/contentGallery";
import ContentHeader from "../../src/components/main/body/contentPage/contentHeader";
import ContentTable from "../../src/components/main/body/contentPage/contentTable";
import AttendanceSubHeader from "../../src/components/main/body/memberPage/attendanceSubheader";

const MemberSubHeader = dynamic(
    () => import("../../src/components/main/body/memberPage/memberSubHeader"),
    {
        ssr: false,
    }
);
const MemberTable = dynamic(
    () => import("../../src/components/main/body/memberPage/memberTable"),
    {
        ssr: false,
    }
);

const Xpert = dynamic(
    () => import("../../src/components/main/body/memberPage/xpert"),
    {
        ssr: false,
    }
);

const Index = () => {
    return (
        <div className="flex-1 bg-[#E5E5E5] flex flex-col overflow-auto  gap-8 pb-4 h-full">
            <MemberHeader />
            <MemberSubHeader route={0} />
            <MemberTable />
        </div>
    );
};

export default Index;
