import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect, usePagination } from "react-table";
import { emailColumn } from "../../../../layout/tableData";
import ActionMenuInterview from "../actionButton/ActionMenuInterview";
import emailTemplate from "../../../../layout/emailTemplateData.json";
import ActionMenuEmail from "../actionButton/ActionMenuEmail";
import axios from "axios";
import ActionMenuCreated from "../actionButton/ActionMenuCreated";
import ActionMenuModified from "../actionButton/ActionMenuModified";
import CryptoJS, { SHA256 } from "crypto-js";
import Loading from "../../../loading";

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

const EmailTemplateTable = () => {
  const [emailData, setEmailData] = useState([]);
  const [loading, setLoading] = useState(false);
  var key = CryptoJS.enc.Base64.parse(
    "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
  );
  var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

  const fetchAllCohorts = () => {
    setLoading(true);
    const requestTs = String(Date.now());
    var config = {
      method: "get",
      baseURL: process.env.NEXT_PUBLIC_BASE_URL,
      url: `/api/applications/email-templates`,
      headers: {
        "api-key": process.env.NEXT_PUBLIC_APP_API_KEY,
        "request-ts": requestTs,
        "hash-key": SHA256(
          process.env.NEXT_PUBLIC_APP_API_KEY +
            process.env.NEXT_PUBLIC_SECRET_KEY +
            requestTs
        ).toString(CryptoJS.enc.Hex),
      },
    };
    // axios({
    //   method: "get",
    //   url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/applications/email-templates`,
    //   headers: {
    //     "api-key": `${process.env.NEXT_PUBLIC_APP_API_KEY}`,
    //     "request-ts": `${process.env.NEXT_PUBLIC_REQUEST_TS}`,
    //     "hash-key": `${process.env.NEXT_PUBLIC_HASH_KEY}`,
    //     "Content-Type": "application/json",
    //   },
    // })
    axios(config)
      .then(function (response) {
        console.log(
          JSON.parse(
            CryptoJS.AES.decrypt(response.data.data, key, {
              iv: iv,
            }).toString(CryptoJS.enc.Utf8)
          ).results
        );
        setEmailData(
          JSON.parse(
            CryptoJS.AES.decrypt(response.data.data, key, {
              iv: iv,
            }).toString(CryptoJS.enc.Utf8)
          ).results
        );
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllCohorts();
  }, []);

  const EmailColumn = useMemo(() => emailColumn, []);

  const Email = useMemo(
    () =>
      emailData.map((emailData, idx) => ({
        ...emailData,
        created_on: <ActionMenuCreated created_on={emailData.created_on} />,
        last_modified: (
          <ActionMenuModified last_modified={emailData.last_modified} />
        ),
      })),
    [emailData]
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
      columns: EmailColumn,
      data: Email,
    },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns): any => {
        return [
          ...columns,
          {
            Cell: ({ row }: any) => <ActionMenuEmail row={row} />,
          },
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
          className="bg-[white] text-sm font-normal text-[#514747] ml-6 w-[96%]"
        >
          <thead className="sticky top-0 text-[black]  font-bold text-sm">
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
      <Loading loading={loading} />
    </div>
  );
};

export default EmailTemplateTable;
