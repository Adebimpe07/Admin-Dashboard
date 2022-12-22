import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import {
  contentColumn,
  blogColumn,
  atsMemberColumn,
  atsTestimonialColumn,
  atsAttendanceColumn,
} from "../../../../layout/tableData";
import CryptoJS from "crypto-js";

import ActionMenuTestimonial from "../actionButton/ActionMenuTestimonial";
import ActionMenuMemberImg from "../actionButton/ActionMenuMemberImg";
import axios from "axios";
var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const decrypt = (element: any) => {
  return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
    CryptoJS.enc.Utf8
  );
};

const TestimonialTable = () => {
  const [Testimonial, setTestimonial] = useState([]);

  const fetchAllTestimonial = () => {
    var config = {
      method: "get",
      url: "https://atsbk.afexats.com/api/v1/tech-stars/testimonial-list-create/",
      headers: {
        "api-key":
          "7w!z%C*F-JaNdRgUkXn2r5u8x/A?D(G+KbPeShVmYq3s6v9y$B&E)H@McQfTjWnZ",
        "hash-key":
          "091fdc6ac81fde9d5bccc8aa0e52f504a2a5a71ad51624b094c26f6e51502b5a",
        "request-ts": "1669397556",
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response.data.data.results);
        setTestimonial(
          response.data.data.results.reduce((acc, item) => {
            acc.push({
              id: decrypt(item.id),
              tech_star_full_name: decrypt(item.tech_star_full_name),
              tech_star_cohort: decrypt(item.tech_star_cohort),
              tech_star_course: decrypt(item.tech_star_course),
              testimonial: decrypt(item.testimonial),
              tech_star_profile_picture:
                process.env.NEXT_PUBLIC_BASE_URL_1 +
                decrypt(item.tech_star_profile_picture),
            });
            return acc;
          }, [])
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAllTestimonial();
  }, []);

  const TestimonialColumn = useMemo(() => atsTestimonialColumn, []);

  const testimonialData = useMemo(
    () =>
      Testimonial.map((item, idx) => ({
        ...item,
        image: <ActionMenuMemberImg profilePicture={item.profile_picture} />,
        action: <ActionMenuTestimonial />,
      })),
    [Testimonial]
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
      columns: TestimonialColumn,
      data: testimonialData,
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
                    return cell.column.Header !== "" ? (
                      <td
                        {...cell.getCellProps()}
                        className="py-3 text-left pl-8"
                      >
                        {cell.render("Cell")}
                      </td>
                    ) : (
                      <img
                        {...cell.getCellProps()}
                        className=" rounded-full w-[40px] h-[40px] ml-2"
                        src={cell.value}
                        
                      />
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

export default TestimonialTable;
