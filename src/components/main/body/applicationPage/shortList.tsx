import React, { useMemo } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import { `${process.env.NEXT_PUBLIC_BASE_URL_1}`a } from "../../../../layout/tableData";
import MOCK_DATA from "../../../../layout/MOCK_DATA.json";
import { Table } from "@mantine/core";
import { useState } from "react";
import { Button, Text, Modal, TextInput, Menu } from "@mantine/core";
import { Checkbox } from "./checkBox";




export const ShortList = () => {
  const columns = useMemo(() => TableData, []);
  const data = useMemo(() => MOCK_DATA, []);

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
      columns: columns,
      data: data,
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
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
    <div>
      <table
        {...getTableProps()}
        className="bg-[white] text-sm font-normal ml-6 w-[96%] "
      >
        <thead className="text-left">
          {headerGroups.map((headerGroups) => (
            <tr {...headerGroups.getHeaderGroupProps()}>
              {headerGroups.headers.map((columns) => (
                <th
                  {...columns.getHeaderProps()}
                  className="py-4 pl-6 bg-[#F5F5F5]"
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
                      className="pr-[30px] pl-6 py-4"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
                <Menu
                  classNames={{
                    item: "!text-[black]",
                  }}
                >
                  <Menu.Target>
                    <button className="py-2 pr-2 rounded-lg border-[1px] mt-[7px] pl-2">
                      Actions
                    </button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Invite for Assesment</Menu.Item>
                    <Menu.Item>Reject Applicant</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
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
}
