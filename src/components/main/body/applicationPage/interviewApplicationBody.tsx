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
import CryptoJS, { SHA256 } from "crypto-js";
import InterviewTable from "./interviewTable";
import Loading from "../../../loading";

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
    UsePaginationInstanceProps<T> &
    UseSortByInstanceProps<T> & {
        state: UsePaginationState<T>;
    };

const InterviewApplicationBody = () => {
    const [interview, setInterview] = useState([]);
    const Interview = useMemo(() => interview, [interview]);
    const [loading, setLoading] = useState(false);
    var key = CryptoJS.enc.Base64.parse(
        "HmYOKQj7ZzF8cbeswYY9uLqbfMSUS2tI6Pz45zjylOM="
    );
    var iv = CryptoJS.enc.Base64.parse("PL2LON7ZBLXq4a32le+FCQ==");

    const InterviewColumn = useMemo(() => interviewColumn, []);
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
            <Loading loading={loading} />
        </>
    );
};

export default InterviewApplicationBody;
