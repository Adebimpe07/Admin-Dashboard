import React, { useContext, useMemo } from "react";

const PassedTable = ({formData}) => {

  return (
    <div className="overflow-auto grid grid-rows-[1fr_auto]">
      <div className="overflow-auto">
        <table
          {...formData.getTableProps()}
          className="bg-[white] text-sm font-normal text-[#514747] ml-6 w-[96%]"
        >
          <thead className="sticky top-0 text-[#514747]  font-normal">
            {formData.headerGroups.map((headerGroup: any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((columns: any) => (
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
          <tbody
            className="flex-1 overflow-auto"
            {...formData.getTableBodyProps()}
          >
            {formData.page.map((row: any) => {
              formData.prepareRow(row);
              return (
                <tr
                  {...row.getRowProps()}
                  className=" border-y-[1px] border-y-[#F5F5F5] text-left"
                >
                  {row.cells.map((cell: any) => {
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
      <div className="bg-[white] mx-6 mt-4 py-4 px-2 w-[96%] flex justify-between">
        <div>
          <span>
            Page{" "}
            <strong>
              {formData.pageIndex + 1} of {formData.pageOptions.length}
            </strong>{" "}
          </span>
          <span className="pl-2">
            | Go to Page:{" "}
            <input
              className="bg-[#F5F5f5] w-10 border-[1px] border-[black] text-center rounded-lg"
              type="number"
              defaultValue={formData.pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                formData.gotoPage(pageNumber);
              }}
            />
          </span>
          <button
            className="border-[1px] border-[black] rounded bg-[#f5f5f5] px-2 ml-4 mr-2"
            onClick={() => formData.gotoPage(0)}
            disabled={!formData.canPreviousPage}
          >
            {"<<"}
          </button>
          <button
            className=" border-[1px] border-[black] rounded px-4"
            onClick={() => formData.previousPage()}
            disabled={!formData.canPreviousPage}
          >
            Previous
          </button>
        </div>
        <div>
          <button
            className="border-[1px] border-[black] rounded px-2 "
            onClick={() => formData.nextPage()}
            disabled={!formData.canNextPage}
          >
            Next
          </button>
          <button
            className="border-[1px]  border-[black] rounded ml-2 bg-[#f5f5f5] px-2"
            onClick={() => formData.gotoPage(formData.pageCount - 1)}
            disabled={!formData.canNextPage}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  )
};

export default PassedTable;
