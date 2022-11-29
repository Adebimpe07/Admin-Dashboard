import dynamic from "next/dynamic";
import React, { useState } from "react";
import MemberHeader from "../../src/components/main/body/memberPage/memberHeader";

const AttendanceSubHeader = dynamic(
    () =>
        import("../../src/components/main/body/memberPage/attendanceSubheader"),
    {
        ssr: false,
    }
);
const AttendanceTable = dynamic(
    () => import("../../src/components/main/body/memberPage/attendanceTable"),
    {
        ssr: false,
    }
);

const Index = () => {
    return (
        <div className="flex-1 bg-[#E5E5E5] flex flex-col overflow-auto  gap-8 pb-4 h-full">
            <MemberHeader />
            <AttendanceSubHeader route={2} />
            <AttendanceTable />
        </div>
    );
};

export default Index;
