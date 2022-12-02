import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import { cohortColumn } from "../../../../layout/tableData";
// import Cohort from "../../../../layout/cohortData.json";
import ActionMenuCourses from "../actionButton/ActionMenuCourses";
import ActionMenuEdit from "../actionButton/ActionMenuEdit";
import ActionMenuDelete from "../actionButton/ActionMenuDelete";
import axios from "axios";
import ActionMenuStartDate from "../actionButton/ActionMenuStartDate";
import ActionMenuEndDate from "../actionButton/ActionMenuEndDate";

const CohortTable = () => {
  const CohortColumn = useMemo(() => cohortColumn, []);
  const [CohortData, setCohortData] = useState([]);

  const fetchAllCohorts = () => {
axios({
  method: 'get',
      url: "https://aptbk.afexats.com/api/jobs/cohorts",
      headers: {
        "api-key":
          "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
        "request-ts": "1667549939702",
        "hash-key":
          "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        setCohortData(response.data.data.results)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllCohorts()
  }, [])

  const cohortData = useMemo(
    () =>
    CohortData.map((cohort, idx) => ({
        ...cohort,
        application_start_date: <ActionMenuStartDate application_start_date={cohort.application_start_date} />,
        application_end_date: <ActionMenuEndDate application_end_date={cohort.application_end_date} />,
        number_of_courses: <ActionMenuCourses number_of_courses={cohort.number_of_courses}/>,
        edit: <ActionMenuEdit />,
        delete: <ActionMenuDelete />,
      })),
    [CohortData]
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
      columns: CohortColumn,
      data: cohortData,
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
          className="bg-[white] text-sm font-normal text-[#514747] ml-6 w-[96%]"
        >
          <thead className=" text-[#514747] sticky top-0  font-normal">
            {headerGroups.map((headerGroups) => (
              <tr {...headerGroups.getHeaderGroupProps()}>
                {headerGroups.headers.map((columns) => (
                  <th
                    {...columns.getHeaderProps()}
                    className="py-4 text-[#514747] pl-8 text-left font-normal bg-[#F5F5F5]"
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
                  className=" border-y-[1px] border-y-[#F5F5F5] text-left"
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

export default CohortTable;
