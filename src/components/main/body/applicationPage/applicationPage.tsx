import React, { useMemo } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import {
  allApplicationColumn,
  ShortListColumn,
  passedColumn,
  failedColumn,
  interviewColumn,
  hiredColumn,
  rejectedColumn,
} from "../../../../layout/tableData";
import MOCK_DATA from "../../../../layout/MOCK_DATA.json";
import SHORTLISTED_DATA from "../../../../layout/SHORTLISTED_DATA.json";
import passAssesment from "../../../../layout/passAssesmentData.json";
import interview from "../../../../layout/interviewData.json";
import hired from "../../../../layout/hiredData.json";
import rejected from "../../../../layout/rejectedData.json";
import { Table } from "@mantine/core";
import { useState } from "react";
import { Button, Text, Modal, TextInput, Menu } from "@mantine/core";
import { Checkbox } from "./checkBox";
import ActionMenuApplication from "../actionButton/ActionMenuApplication";
import ActionMenuShortlist from "../actionButton/ActionMenuShortlist";
import ActionMenuPass from "../actionButton/ActionMenuPass";
import failAssesment from "../../../../layout/failAssesmentData.json";
import ActionMenuFail from "../actionButton/ActionMenuFail";
import ActionMenuInterview from "../actionButton/ActionMenuInterview";

// const Action = ({ values }) => {

//     Cell: ({ cell: { value } }) => <Action values={value} />
//   return (
//     <>
//       {values.map((action, idx) => {
//         <button key={idx}>{action}</button>;
//       })}
//     </>
//   );
// };

const ApplicationPage = ({ selected }) => {
  const AllapplicationColumns = useMemo(() => allApplicationColumn, []);
  const ShortlistedColumn = useMemo(() => ShortListColumn, []);
  const PassedColumn = useMemo(() => passedColumn, []);
  const FailedColumn = useMemo(() => failedColumn, []);
  const InterviewColumn = useMemo(() => interviewColumn, []);
  const HiredColumn = useMemo(() => hiredColumn, []);
  const RejectedColumn = useMemo(() => rejectedColumn, []);
  const data = useMemo(
    () =>
      MOCK_DATA.map((mock, idx) => ({
        ...mock,
        action: <ActionMenuApplication />,
      })),
    []
  );
  const shortListed = useMemo(
    () =>
      SHORTLISTED_DATA.map((mock, idx) => ({
        ...mock,
        action: <ActionMenuShortlist />,
      })),
    []
  );
  const passed = useMemo(
    () =>
      passAssesment.map((mock, idx) => ({
        ...mock,
        action: <ActionMenuPass />,
      })),
    []
  );
  const failed = useMemo(
    () =>
      failAssesment.map((mock, idx) => ({
        ...mock,
        action: <ActionMenuFail />,
      })),
    []
  );
  const Interview = useMemo(
    () =>
      interview.map((mock, idx) => ({
        ...mock,
        action: <ActionMenuInterview />,
      })),
    []
  );
  const Hired = useMemo(() => hired, []);
  const Rejected = useMemo(() => rejected, []);

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
      columns:
        selected === 0
          ? AllapplicationColumns
          : selected === 1
          ? ShortlistedColumn
          : selected === 2
          ? PassedColumn
          : selected === 3
          ? FailedColumn
          : selected === 4
          ? InterviewColumn
          : selected === 5
          ? HiredColumn
          : RejectedColumn,
      data:
        selected === 0
          ? data
          : selected === 1
          ? shortListed
          : selected === 2
          ? passed
          : selected === 3
          ? failed
          : selected === 4
          ? Interview
          : selected === 5
          ? Hired
          : Rejected,
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox  {...getToggleAllRowsSelectedProps()} />
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
    <div>
      <table
        {...getTableProps()}
        className="bg-[white] text-sm font-normal ml-6 w-[96%]"
      >
        <thead className="text-left">
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((columns) => (
                <th
                  {...columns.getHeaderProps()}
                  className="py-4 bg-[#F5F5F5]"
                >
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
                className=" border-y-[1px] border-y-[#F5F5F5] "
              >
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-4"
                    >
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
            disabled={!canPreviousPage}
          >
            {"<<"}
          </button>
          <button
            className=" border-[1px] border-[black] rounded px-4"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
        </div>
        <div>
          <button
            className="border-[1px] border-[black] rounded px-2 "
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </button>
          <button
            className="border-[1px]  border-[black] rounded ml-2 bg-[#f5f5f5] px-2"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationPage;
