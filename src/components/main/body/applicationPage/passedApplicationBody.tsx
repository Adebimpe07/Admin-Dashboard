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
import { allApplicationColumn, passedColumn, ShortListColumn } from "../../../../layout/tableData";
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

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

const PassedApplicationBody = () => {
  const [passAssesment, setPassAssesment] = useState([]);
  const passed = useMemo(
    () =>
    passAssesment,
    [passAssesment]
);

const PassedColumn = useMemo(() => passedColumn, []);
  const fetchApplicantList = (url, setter) => {
    var config = {
      method: "get",
      url: "https://aptbk.afexats.com/api/applications" + url,
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
    fetchApplicantList("/passed", setPassAssesment);
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
      columns: PassedColumn,
      data: passed,
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
                <ActionMenuPass row={row} />
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
      <PassedSubheader
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <PassedTableHead />
      <PassedTable formData={formData} />
    </>
  );
};

export default PassedApplicationBody;
