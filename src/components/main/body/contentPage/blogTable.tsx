import React, { useEffect, useMemo, useState } from "react";
import { useTable, useRowSelect, usePagination, Column } from "react-table";
import { contentColumn, blogColumn } from "../../../../layout/tableData";
import Content from "../../../../layout/contentData.json";
import ContentBlog from "../../../../layout/contentBlogData.json";
import ActionMenuEditContent from "../actionButton/ActionMenuEditContent";
import ActionMenuDeleteContent from "../actionButton/ActionMenuDeleteContent";
import ActionMenuEditBlogContent from "../actionButton/ActionMenuEditBlogContent";
import ActionMenuDeleteBlogContent from "../actionButton/ActionMenuDeleteBlogContent";
import { TableInstanceWithHooks } from "./newsTable";
//
import axios from "axios";
import CryptoJS from "crypto-js";
import BlogArticleAction from "../actionButton/BlogArticleAction";
import moment from "moment";
import { contentData } from "@/src/layout/contentData";
import ActionMenuBlogImg from "../actionButton/ActionMenuBlogImage";

var key = CryptoJS.enc.Utf8.parse("bQeThWmZq4t7w9z$C&F)J@NcRfUjXn2r");
var iv = CryptoJS.enc.Utf8.parse("s6v9y$B&E)H@McQf");

const decrypt = (element: any) => {
  return CryptoJS.AES.decrypt(element, key, { iv: iv }).toString(
    CryptoJS.enc.Utf8
  );
};

const BlogTable = () => {
  const [Content, setContent] = useState([]);
  const fetchBlogArticle = () => {
    var config = {
      method: "get",
      url: `https://atsbk.afexats.com` + `/api/v1/blogs`,
      headers: {
        "api-key": process.env.NEXT_PUBLIC_APP_API_KEY_1,
        "hash-key": process.env.NEXT_PUBLIC_HASH_KEY_1,
        "request-ts": process.env.NEXT_PUBLIC_REQUEST_TS_1,
      },
    };
    axios(config)
      .then(function (response) {
        console.log(response.data.data.results);
        setContent(
          response.data.data.results.reduce((acc, item) => {
            acc.push({
              author_fullname: decrypt(item.author_fullname),
              title: decrypt(item.title),
              url: decrypt(item.url),
              author_image:
                process.env.NEXT_PUBLIC_BASE_URL_1 + decrypt(item.author_image),
              created_at: moment(decrypt(item.created_at)).format("LLL"),
              description:
                decrypt(item.description).split("").splice(0, 50).join("") +
                "...",
              id: decrypt(item.id),
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
    fetchBlogArticle();
  }, []);

  const BlogColumn = useMemo(() => blogColumn, []);

  const blogData = useMemo(
    () => Content,
    // [Content]
    ContentBlog.map((item, idx) => ({
      ...item,
      edit: <ActionMenuEditBlogContent rowDetail={undefined} />,
      delete: <ActionMenuDeleteBlogContent />,
    }))
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
      columns: BlogColumn as any,
      data: blogData,
    },
    usePagination,
    useRowSelect
  );
  //   (hooks) => {
  //     hooks.visibleColumns.push((columns): any => {
  //       return [
  //         ...columns,

  //         {
  //           Header: ({ getToggleAllRowsSelectedProps }: any) => "Action",

  //           Cell: ({ row }: any) => <BlogArticleAction row={row} />,
  //         },
  //       ];
  //     });
  //   }
  // ) as TableInstanceWithHooks<object>;

  const { pageIndex } = state;

  return (
    <div className="`overflow-auto` grid  grid-rows-[1fr_auto]">
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
                  className=" border-y-[1px] border-y-[#F5F5F5] text-left"
                >
                  {row.cells.map((cell) => {
                    return cell.column.Header !== "Profile Picture" ? (
                      <td
                        {...cell.getCellProps()}
                        className="py-3 text-left pl-8"
                      >
                        {cell.render("Cell")}
                      </td>
                    ) : (
                      <img
                        {...cell.getCellProps()}
                        className=" rounded-full ml-3 mt-12 w-[40px] h-[40px]"
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

export default BlogTable;
