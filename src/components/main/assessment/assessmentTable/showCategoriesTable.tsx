import React, { useMemo } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import { questionList } from "../../../../layout/tableData";
import ShowCategoriesData from "../../../../layout/showCategory.json";
import DeleteIcon from "../../body/actionButton/delete_icon";
import Link from "next/link";
import { Edit2 } from "iconsax-react";

const QuestionTable = () => {
  const QuestionColumn = useMemo(() => questionList, []);

  const QuestionData = useMemo(
    () =>
      ShowCategoriesData.map((category, idx) => ({
        ...category,
        // edit: (
        //   <Link href="createCategory">
        //     <Edit2 size="17" color="#30AD74" variant="Bulk" />
        //   </Link>
        // ),
        // delete: <DeleteIcon />,
      })),
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, page, prepareRow } =
    useTable(
      {
        columns: QuestionColumn,
        data: QuestionData,
      },
      usePagination,
      useRowSelect
    );

  return (
    <div>
      <table
        {...getTableProps()}
        className="bg-white text-sm font-normal text-[#514747] w-full"
      >
        <thead className=" text-[#514747]  font-normal overflow-auto">
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
  );
};

export default QuestionTable;
