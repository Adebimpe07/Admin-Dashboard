import React, { useMemo, useState, useEffect } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import { viewAssessmentColumn } from "../../../../layout/tableData";
import ViewAssessmentData from "../../../../layout/viewAssessmentData";
import { Checkbox } from "../assessment/checkbox";
import ActionMenuPass from "../../body/actionButton/actionViewAsess";
import axios from "axios";

const ViewAssessmentTable = () => {
  const AssessmentColumn = useMemo(() => viewAssessmentColumn, []);
  const [data, setData] = useState([])

  var config = {
    method: "get",
    url: "https://assessbk.afexats.com/api/result/all",
    headers: {
      "Content-Type": "application/json",
      'api-key': '1F87LiFSIfulRCdxFWAPkXNoLuu8j-UkRs6QSYWm4sY',
      'request-ts': '23445567',
      'hash-key': '68fdd26d64f3374506ba0d2e30ed5e096cab6d4a1f4396c80713204609d3216e'
    },
  };

  const fetchResult = async (): Promise<[]> => {
    try {
      await axios(config).then((response) => {
        // console.log(respons)
        setData(response.data.data.results)
      })
    } catch (error) {
      console.log("request_error=> ", error.response.data)
      return error.message
    }
  }

  useEffect(() => {
    fetchResult();
  }, [])
  console.log(data)
  const AssessmentData = useMemo(
    () =>
      data.map((assessment, idx) => ({
        ...assessment,
        action: <ActionMenuPass />,
      })),

    []
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
          className="bg-[white] text-sm font-normal text-[#514747] mx-auto w-[95%]"
        >
          <thead className=" text-[#514747] font-normal sticky top-0">
            {headerGroups.map((headerGroups) => (
              <tr {...headerGroups.getHeaderGroupProps()}>
                {headerGroups.headers.map((columns) => (
                  <th
                    {...columns.getHeaderProps()}
                    className="py-4 text-[#514747] pl-4 text-left font-normal bg-[#F5F5F5]"
                  >
                    {columns.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className="flex-1 overflow-auto">
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className=" border-y-[1px] border-y-[#F5F5F5] text-left "
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="py-3 text-left pl-4"
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

export default ViewAssessmentTable;
