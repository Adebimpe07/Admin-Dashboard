import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import {
  TableInstance,
  useGlobalFilter,
  usePagination,
  UsePaginationInstanceProps,
  UsePaginationState,
  useRowSelect,
  UseSortByInstanceProps,
  useTable,
} from "react-table";
import ActionMenuApplication from "../actionButton/ActionMenuApplication";
import {
  allApplicationColumn,
  failedColumn,
  interviewColumn,
  passedColumn,
  ShortListColumn,
} from "../../../../layout/tableData";
import SubAppHeader from "./subAppHeader";
import TableHead from "./tableHead";
import ApplicationPage from "./applicationPage";
import ShortlistSubheader from "./shortlistSubheader";
import ShortlistTableHead from "./shortlistTableHead";
import ShortListTable from "./shortlistTable";
import ActionMenuShortlist from "../actionButton/ActionMenuShortlist";
import ActionMenuPass from "../actionButton/ActionMenuPass";
import PassedSubheader from "./passedSubheader";
import PassedTableHead from "./passedTableHead";
import PassedTable from "./passedTable";
import ActionMenuFail from "../actionButton/ActionMenuFail";
import FailedSubheader from "./failedSubheader";
import FailedTableHead from "./failedTableHead";
import FailedTable from "./failedTable";
import ActionMenuInterview from "../actionButton/ActionMenuInterview";
import InterviewSubheader from "./interviewSubbheader";
import InterviewTableHead from "./interviewTableHead";
import InterviewTable from "./interviewTable";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

const InterviewApplicationBody = () => {
  const [interview, setInterview] = useState([]);
  const Interview = useMemo(() => interview, [interview]);

  const InterviewColumn = useMemo(() => interviewColumn, []);
  const fetchApplicantList = (url, setter) => {
    var config = {
      method: "get",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/applications` + url,
      headers: {
        "api-key":
          "qsMNjvnWL4aqOATjtjLoaoaRPw2Fec0jf43J5oB02Sv7hMELvfcwnOdzS9FQHOvW",
        "request-ts": "1667549939702",
        "hash-key":
          "ffefa32cfa2df9944ce9ad0212cc80169b1f7574fe09631a46756600d33238ba",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setter(response.data.data.results);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchApplicantList("/invited-for-interview", setInterview);
  }, []);

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
    setGlobalFilter,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns: InterviewColumn,
      data: Interview,
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns): any => {
        return [
          ...columns,
          {
            // Header: ({ getToggleAllRowsSelectedProps }: any) => (
            //     <Checkbox {...getToggleAllRowsSelectedProps()} />
            // ),
            Cell: ({ row }: any) => (
              <ActionMenuInterview row={row} />
              // <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
        ];
      });
    }
  ) as TableInstanceWithHooks<object>;

  const { pageIndex, globalFilter }: any = state;

  const formData = {
    pageIndex,
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
    prepareRow,
    selectedFlatRows,
  };

  return (
    <>
      <InterviewSubheader
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <InterviewTableHead />
      <InterviewTable formData={formData} />
    </>
  );
};

export default InterviewApplicationBody;
