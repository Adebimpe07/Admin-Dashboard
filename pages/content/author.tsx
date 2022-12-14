import dynamic from "next/dynamic";
import React from "react";
import ContentHeader from "../../src/components/main/body/contentPage/contentHeader";

const AuthorTable = dynamic(
    () => import("../../src/components/main/body/contentPage/contentAuthor"),
    { ssr: false }
);
const AuthorSubHeader = dynamic(
    () => import("../../src/components/main/body/contentPage/authorSubheader"),
    { ssr: false }
);

const author = () => {
    return (
        <div className="flex-1 bg-mainBg flex flex-col overflow-auto  h-full">
            <ContentHeader />
            <AuthorSubHeader />
            <AuthorTable />
        </div>
    );
};

export default author;
