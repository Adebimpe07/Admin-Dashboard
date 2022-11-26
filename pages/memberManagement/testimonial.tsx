import dynamic from "next/dynamic";
import React, { useState } from "react";
import MemberHeader from "../../src/components/main/body/memberPage/memberHeader";
import ContentGallery from "../../src/components/main/body/contentPage/contentGallery";
import ContentHeader from "../../src/components/main/body/contentPage/contentHeader";
import ContentTable from "../../src/components/main/body/contentPage/contentTable";
import AttendanceSubHeader from "../../src/components/main/body/memberPage/attendanceSubheader";

const TestimonialSubHeader = dynamic(
    () =>
        import(
            "../../src/components/main/body/memberPage/testimonialSubheader"
        ),
    {
        ssr: false,
    }
);
const TestimonialTable = dynamic(
    () => import("../../src/components/main/body/memberPage/testimonialTable"),
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
            <TestimonialSubHeader route={1} />
            <TestimonialTable />
        </div>
    );
};

export default Index;
