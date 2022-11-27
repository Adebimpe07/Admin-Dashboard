import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import { categoryColumn } from "../../../../layout/tableData";
import CategoryListData from "../../../../layout/categoryListData.json";
import { Checkbox } from "./checkbox";

const AssessmentCategoryTable = ({ setSelectedCategory }) => {
    const CategoryColumn = useMemo(() => categoryColumn, []);
    const [CategoryListData, setCategoryListData] = useState([]);

    const fetchAllCategories = () => {
        axios("http://assessbk.afexats.com/api/categories/")
            .then(function (response) {
                setCategoryListData(
                    response.data.data.results.reduce(
                        (
                            acc,
                            {
                                name,
                                test_duration: time,
                                questions: question,
                                id,
                            }
                        ) => {
                            time = time.split(":")[1][1];
                            question = question.length;
                            acc.push({ name, question, time, id });
                            return acc;
                        },
                        []
                    )
                );
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchAllCategories();
    }, []);

    const CategoryData = useMemo(
        () =>
            CategoryListData.map((category, idx) => ({
                ...category,
                // edit: (
                //   <Link href="createCategory">
                //     <Edit2 size="17" variant="Bulk" />
                //   </Link>
                // ),
                // delete: <DeleteIcon />,
            })),
        [CategoryListData]
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
            columns: CategoryColumn,
            data: CategoryData,
        },
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns) => {
                return [
                    {
                        id: "selection",
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

    useEffect(() => {
        setSelectedCategory(selectedFlatRows.map((row) => row.original));
    }, [selectedFlatRows]);

    const { pageIndex } = state;

    return (
        <div>
            <table
                {...getTableProps()}
                className="bg-[white] text-sm font-normal text-[#514747] ml-6 w-[96%]">
                <thead className=" text-[#514747]  font-normal">
                    {headerGroups.map((headerGroups) => (
                        <tr {...headerGroups.getHeaderGroupProps()}>
                            {headerGroups.headers.map((columns, index) => (
                                <th
                                    key={index}
                                    {...columns.getHeaderProps()}
                                    className="py-4 text-[#514747] pl-8 text-left font-normal bg-[#F5F5F5]">
                                    {columns.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
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
                                            className="py-3 text-left pl-8">
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
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
        </div>
    );
};

export default AssessmentCategoryTable;
