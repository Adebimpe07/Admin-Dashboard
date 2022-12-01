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
import { allApplicationColumn } from "../../../../layout/tableData";
import SubAppHeader from "./subAppHeader";
import TableHead from "./tableHead";
import ApplicationPage from "./applicationPage";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
  UsePaginationInstanceProps<T> &
  UseSortByInstanceProps<T> & {
    state: UsePaginationState<T>;
  };

const ApplicationBody = () => {
  const [MOCK_DATA, setMOCK_DATA] = useState([]);
  const AllapplicationColumns = useMemo(() => allApplicationColumn, []);

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
    fetchApplicantList(" ", setMOCK_DATA);
  }, []);

  const data = useMemo(() => MOCK_DATA, [MOCK_DATA]);

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
      columns: AllapplicationColumns,
      data: data,
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
              <ActionMenuApplication row={row} />
              // <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
        ];
      });
    }
  ) as TableInstanceWithHooks<object>;

  
  const { pageIndex, globalFilter }: any = state;

  useEffect(() => {
    console.log(selectedFlatRows.map((row) => row.original));
  }, [selectedFlatRows]);

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
      <SubAppHeader
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <TableHead />
      <ApplicationPage formData={formData} />
    </>
  );
};

export default ApplicationBody;
