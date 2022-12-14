import axios, { AxiosRequestConfig } from "axios";
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
import Loading from "../../../loading";
import CryptoJS, { SHA256 } from "crypto-js";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
    UsePaginationInstanceProps<T> &
    UseSortByInstanceProps<T> & {
        state: UsePaginationState<T>;
    };

const PassedApplicationBody = () => {
    const [passAssesment, setPassAssesment] = useState([]);
    const passed = useMemo(() => passAssesment, [passAssesment]);
    const [loading, setLoading] = useState(false);
    var key = CryptoJS.enc.Base64.parse(
        "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
    );
    var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

    const PassedColumn = useMemo(() => passedColumn, []);
    const fetchApplicantList = (url, setter) => {
        const requestTs = String(Date.now());
        setLoading(true);

        var config: AxiosRequestConfig = {
            method: "get",
            baseURL: process.env.NEXT_PUBLIC_BASE_URL,
            url: `/api/applications` + url,
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

        axios(config)
            .then(function (response) {
                console.log(response.data);
                let decrypted_data = JSON.parse(
                    CryptoJS.AES.decrypt(response.data.data, key, {
                        iv: iv,
                    }).toString(CryptoJS.enc.Utf8)
                );
                setter(decrypted_data.results);
                setLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false);
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
            <Loading loading={loading} />
        </>
    );
};

export default PassedApplicationBody;
