import React, { useEffect, useMemo, useState } from "react";
import {
  useTable, useRowSelect, usePagination, TableInstance,
  UsePaginationInstanceProps,
  UsePaginationState,
  UseSortByInstanceProps,
  Column,
} from "react-table";
import { dejiColumn, } from "../../../../layout/tableData";
import Content from "../../../../layout/dejiData.json";
import dejiData from "../../../../layout/dejiData.json";
import ReadMoreContent from "../actionButton/ReadMoreContent"
import TruncateContents from "../actionButton/TruncateContents";
import axios from "axios";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

const DejiTable = () => {
  const [Content, setContent] = useState([])

  // const fetchDejiSupport = () => {
  //   console.log('helloooo')
  // var config = {
  //   method: 'get',
  //   url: '`${process.env.NEXT_PUBLIC_BASE_URL_1}`/api/v1/support/contact-us-list-create/',
  //   headers: {
  //     "API=KEY": "`${process.env.NEXT_PUBLIC_APP_API_KEY_1}`",
  //     "HASH-KEY": "`${process.env.NEXT_PUBLIC_APP_HASH_KEY_1}`",
  //     "REQUEST-TS": "`${process.env.NEXT_PUBLIC_REQUEST_TS_1}`"
  //   }
  // };

  // axios(config)
  //   .then(function (response) {
  //     console.log(response.data)
  //     setContent(response.data.data.results);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

  const fetchSupp = () => {
    var config = {
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_BASE_URL_1}/api/v1/support/contact-us-list-create/`,
      headers: {
        "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY_1}`,
        "hash-key": `${process.env.NEXT_PUBLIC_APP_HASH_KEY_1}`,
        "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS_1}`,
      }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data)
        setContent(response.data.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchSupp()
  }, [])

  const DejiColumn = useMemo(() => dejiColumn, []);

  const dejiData = useMemo(
    () => Content,
    [Content]
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
  } = useTable(
    {
      columns: DejiColumn as any,

      data: dejiData
    },
    usePagination,
    useRowSelect,
    (hooks) => {

      hooks.visibleColumns.push((columns): any => {

        return [

          ...columns,

          {
            Header: ({ getToggleAllRowsSelectedProps }: any) => (
              <div>Read more</div>
            ),

            Cell: ({ row }: any) => (

              <ReadMoreContent row={row} />

            ),

          },

        ];

      });

    }
  ) as TableInstanceWithHooks<object>;

  const { pageIndex } = state;

  return (
    <div className="overflow-auto grid  grid-rows-[1fr_auto]">
      <div className="overflow-auto">
        <table
          {...getTableProps()}
          className="bg-[white] text-sm font-normal text-[#514747] ml-6 w-[96%]"
        >
          <thead className=" text-[#514747] sticky top-0  font-normal">
            {headerGroups.map((headerGroups) => (
              <tr {...headerGroups.getHeaderGroupProps()}>
                {headerGroups.headers.map((columns) => (
                  <th
                    {...columns.getHeaderProps()}
                    className="py-4 text-[#514747] pl-6 text-left font-normal bg-[#F5F5F5]"
                  >
                    {columns.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="flex-1 overflow-auto" {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className=" border-y-[1px] whitespace-nowrap border-y-[#F5F5F5]"
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="py-3 text-left pl-8"
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

export default DejiTable;
