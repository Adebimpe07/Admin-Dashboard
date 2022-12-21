import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import {
    contentColumn,
    blogColumn,
    atsMemberColumn,
    atsTestimonialColumn,
    atsAttendanceColumn,
} from "../../../../layout/tableData";
import ActionMenuMemberImg from "../actionButton/ActionMenuMemberImg";
import ActionMenuEditAtsMember from "../actionButton/ActionMenuEditAtsmember";
import ActionMenuDeleteAtsMember from "../actionButton/ActionMenuDeleteAtsMember";
import ActionMenuMember from "../actionButton/ActionMenuMember";
import axios from "axios";
import CryptoJS from "crypto-js";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const decrypt = (element: any) => {
  return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
    CryptoJS.enc.Utf8
  );
};

const MemberTable = () => {
    const [ATSMember, setATSMember] = useState([]);

    const fetchAllAts = () => {
        var config = {
            method: 'get',
            url: 'https://atsbk.afexats.com/api/v1/tech-stars/tech-star-list-create/',
            headers: { 
                'api-key': '7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ', 
                'hash-key': '091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a', 
                'request-ts': '1669397556', 

            },

        };
        axios(config)
            .then(function (response) {
                console.log(response.data)
                setATSMember(response.data.data.results.reduce((acc, item) => {
                    acc.push({
                      full_name: decrypt(item.full_name),
                      official_email: decrypt(item.official_email),
                      profile_picture: decrypt(item.official_email),
                      cohort: decrypt(item.cohort),
                      tech_star_id: decrypt(item.tech_star_id)
                    });
                    return acc
                    
                }, []));
                })
                .catch(function (error) {
                console.log(error);
            });
        useEffect(() => {
            fetchAllAts();
        }, []);
    };

    const ATSColumn = useMemo(() => atsMemberColumn, [atsMemberColumn]);

    const atsData = useMemo(
        () =>
            ATSMember.map((content, idx) => ({
                ...content,
                image: (
                    <ActionMenuMemberImg
                        profilePicture={content.profile_picture}
                    />
                ),
                edit: <ActionMenuEditAtsMember />,
                delete: <ActionMenuDeleteAtsMember />,
                action: <ActionMenuMember />,
            })),
        [ATSMember]
    );

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        gotoPage,
        pageCount,
        state,
        prepareRow,
        selectedFlatRows,
    } = useTable(
        {
            columns: ATSColumn,
            data: atsData,
        },
        usePagination,
        useRowSelect
    );

    const { pageIndex } = state;

    return (
        <div className="overflow-auto grid grid-rows-[1fr_auto]">
            <div className="overflow-auto">
                <table
                    {...getTableProps()}
                    className="bg-[white] text-sm font-normal text-[#514747] ml-6 w-[96%]">
                    <thead className="sticky top-0 text-[#514747]  font-normal">
                        {headerGroups.map((headerGroups) => (
                            <tr {...headerGroups.getHeaderGroupProps()}>
                                {headerGroups.headers.map((columns) => (
                                    <th
                                        {...columns.getHeaderProps()}
                                        className="py-4 text-[#514747] pl-6 text-left font-normal bg-[#F5F5F5]">
                                        {columns.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody
                        className="flex-1 overflow-auto"
                        {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                <tr
                                    {...row.getRowProps()}
                                    className=" border-y-[1px] border-y-[#F5F5F5] text-left">
                                    {row.cells.map((cell) => {
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                className="py-3 text-left pl-6">
                                                {cell.render("Cell")}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="bg-[white] mx-6 mt-4 py-4 px-2 flex w-[96%] justify-between">
                <div>
                    <span>
                        Page{" "}
                        <strong>
                            {pageIndex + 1} of {pageOptions.length}
                        </strong>{" "}
                    </span>
                    <span className="pl-2">
                        | Go to Page:{" "}
                        <input
                            className="bg-[#F5F5f5] w-10 border-[1px] border-[black] text-center rounded-lg"
                            type="number"
                            defaultValue={pageIndex + 1}
                            onChange={(e) => {
                                const pageNumber = e.target.value
                                    ? Number(e.target.value) - 1
                                    : 0;
                                gotoPage(pageNumber);
                            }}
                        />
                    </span>
                    <button
                        className="border-[1px] border-[black] rounded bg-[#f5f5f5] px-2 ml-4 mr-2"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}>
                        {"<<"}
                    </button>
                    <button
                        className=" border-[1px] border-[black] rounded px-4"
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}>
                        Previous
                    </button>
                </div>
                <div>
                    <button
                        className="border-[1px] border-[black] rounded px-2 "
                        onClick={() => nextPage()}
                        disabled={!canNextPage}>
                        Next
                    </button>
                    <button
                        className="border-[1px]  border-[black] rounded ml-2 bg-[#f5f5f5] px-2"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}>
                        {">>"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemberTable;
