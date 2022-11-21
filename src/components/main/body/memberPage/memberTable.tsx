import React, { useMemo } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import {
  contentColumn,
  blogColumn,
  atsMemberColumn,
  atsTestimonialColumn,
  atsAttendanceColumn,
} from "../../../../layout/tableData";
import Content from "../../../../layout/contentData.json";
import ContentBlog from "../../../../layout/contentBlogData.json";
import ATSMember from "../../../../layout/atsMemberData.json";
import Testimonial from "../../../../layout/atsTestimonialData.json";
import Attendance from "../../../../layout/atsAttendanceData.json";
import ActionMenuEditContent from "../actionButton/ActionMenuEditContent";
import ActionMenuDeleteContent from "../actionButton/ActionMenuDeleteContent";
import ActionMenuEditBlogContent from "../actionButton/ActionMenuEditBlogContent";
import ActionMenuDeleteBlogContent from "../actionButton/ActionMenuDeleteBlogContent";
import ActionMenuTestimonial from "../actionButton/ActionMenuTestimonial";
import ActionMenuMemberImg from "../actionButton/ActionMenuMemberImg";

const MemberTable = ({ selected }) => {
  const ATSColumn = useMemo(() => atsMemberColumn, []);
  const TestimonialColumn = useMemo(() => atsTestimonialColumn, []);
  const AttendanceColumn = useMemo(() => atsAttendanceColumn, []);

  const atsData = useMemo(
    () =>
      ATSMember.map((content, idx) => ({
        ...content,
        image: <ActionMenuMemberImg />,
        edit: <ActionMenuEditContent />,
        delete: <ActionMenuDeleteContent />,
      })),
    []
  );

  const testimonialData = useMemo(
    () =>
      Testimonial.map((item, idx) => ({
        ...item,
        image: <ActionMenuMemberImg />,
        action: <ActionMenuTestimonial />,
      })),
    []
  );

  const attendanceData = useMemo(() => Attendance, []);


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
          ? ATSColumn
          : selected === 1
          ? TestimonialColumn
          : AttendanceColumn,
      data:
        selected === 0
          ? atsData
          : selected === 1
          ? testimonialData
          : attendanceData,
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
          <thead className="sticky top-0 text-[#514747]  font-normal">
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
                  className=" border-y-[1px] border-y-[#F5F5F5] text-left"
                >
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="py-3 text-left pl-6"
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

export default MemberTable;
