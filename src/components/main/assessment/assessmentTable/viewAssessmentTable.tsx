import React, { useMemo, useState, useEffect } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import { viewAssessmentColumn } from "../../../../layout/tableData";
import ViewAssessmentData from "../../../../layout/viewAssessmentData";
import { Checkbox } from "../assessment/checkbox";
import ActionMenuPass from "../../body/actionButton/actionViewAsess";
import axios from "axios";
import CryptoJS, { SHA256 } from "crypto-js";
import Loading from "@/src/components/loading";

const ViewAssessmentTable = () => {
    const AssessmentColumn = useMemo(() => viewAssessmentColumn, []);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const key = CryptoJS.enc.Base64.parse(
        "wjqy62fB+dwz2gyz4sMePe9u2RsMVIyuaA6wPgUeXjw="
    );
    const iv = CryptoJS.enc.Base64.parse("gNyBAsNdWQEwHvbAm8g5Jg==");
    let requestTs = String(Date.now());
    var config = {
        method: "get",
        url: process.env.NEXT_PUBLIC_BASE_URL_2 + `/api/result/all`,
        headers: {
            "api-key": process.env.NEXT_PUBLIC_API_KEY_2,
            "request-ts": requestTs,
            "hash-key": SHA256(
                process.env.NEXT_PUBLIC_API_KEY_2 +
                    process.env.NEXT_PUBLIC_SECRET_KEY_2 +
                    requestTs
            ).toString(CryptoJS.enc.Hex),
        },
    };

    const fetchResult = async (): Promise<[]> => {
        setLoading(true);
        try {
            await axios(config).then((response) => {
                let decrypted_data = JSON.parse(
                    CryptoJS.AES.decrypt(response.data.data, key, {
                        iv: iv,
                    }).toString(CryptoJS.enc.Utf8)
                );
                // console.log(decrypted_data.results);
                setData(decrypted_data.results);
                setLoading(false);
            });
        } catch (error) {
            console.log("request_error=> ", error.response.data);
            setLoading(false);
            return error.message;
        }
    };

    useEffect(() => {
        fetchResult();
    }, []);
    const AssessmentData = useMemo(
        () => data,

        [data]
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
            columns: AssessmentColumn,
            data: AssessmentData,
        },
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns): any => {
                return [
                    {
                        Header: ({ getToggleAllRowsSelectedProps }) => (
                            <Checkbox {...getToggleAllRowsSelectedProps()} />
                        ),
                        Cell: ({ row }) => (
                            <Checkbox {...row.getToggleRowSelectedProps()} />
                        ),
                    },
                    ...columns,
                ];
            });
        }
    );

    const { pageIndex } = state;

    return (
        <div className="overflow-auto grid grid-rows-[1fr_auto]">
            <div className="overflow-auto">
                <table
                    {...getTableProps()}
                    className="bg-[white] text-sm font-normal text-[#514747] mx-auto w-[95%]">
                    <thead className=" text-[#514747] font-normal sticky top-0">
                        {headerGroups.map((headerGroups) => (
                            <tr {...headerGroups.getHeaderGroupProps()}>
                                {headerGroups.headers.map((columns) => (
                                    <th
                                        {...columns.getHeaderProps()}
                                        className="py-4 text-[#514747] pl-4 text-left font-normal bg-[#F5F5F5]">
                                        {columns.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody
                        {...getTableBodyProps()}
                        className="flex-1 overflow-auto">
                        {page.map((row) => {
                            prepareRow(row);
                            return (
                                //
                                <tr
                                    {...row.getRowProps()}
                                    className=" border-y-[1px] border-y-[#F5F5F5] text-left ">
                                    {row.cells.map((cell) => {
                                        return cell.column.Header !== "" ? (
                                            <td
                                                {...cell.getCellProps()}
                                                className="py-3 text-left pl-4">
                                                {cell.render("Cell")}
                                            </td>
                                        ) : (
                                            <td
                                                {...cell.getCellProps()}
                                                className="py-3 text-left pl-4">
                                                <ActionMenuPass
                                                    rowdetail={row.original}
                                                />
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="bg-[white] mx-6 mt-4 py-4 px-2 flex justify-between">
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
            <Loading loading={loading} />
        </div>
    );
};

export default ViewAssessmentTable;
