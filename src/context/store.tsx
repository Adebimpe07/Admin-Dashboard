import { createContext, useState, useEffect, useMemo } from "react";
import { useForm, UseFormReturnType } from "@mantine/form";
import {
    useTable,
    useRowSelect,
    usePagination,
    useGlobalFilter,
    TableInstance,
    UsePaginationInstanceProps,
    UseSortByInstanceProps,
    UsePaginationState,
} from "react-table";
import {
    allApplicationColumn,
    ShortListColumn,
    passedColumn,
    failedColumn,
    interviewColumn,
    hiredColumn,
    rejectedColumn,
} from "../layout/tableData";
import { Checkbox } from "../components/main/body/applicationPage/checkBox";
import MOCK_DATA from "../layout/MOCK_DATA.json";
import SHORTLISTED_DATA from "../layout/SHORTLISTED_DATA.json";
import passAssesment from "../layout/passAssesmentData.json";
import interview from "../layout/interviewData.json";
import hired from "../layout/hiredData.json";
import rejected from "../layout/rejectedData.json";
import ActionMenuApplication from "../components/main/body/actionButton/ActionMenuApplication";
import ActionMenuShortlist from "../components/main/body/actionButton/ActionMenuShortlist";
import PassedStatus from "../components/main/body/applicationPage/passedStatus";
import ActionMenuPass from "../components/main/body/actionButton/ActionMenuPass";
import FailedStatus from "../components/main/body/applicationPage/failedStatus";
import ActionMenuFail from "../components/main/body/actionButton/ActionMenuFail";
import ActionMenuInterview from "../components/main/body/actionButton/ActionMenuInterview";
import failAssesment from "../layout/failAssesmentData.json";
import { useSessionStorage } from "@mantine/hooks";

type formDataProp = {
    selected: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    pageIndex: any;
    globalFilter: any;
    getTableProps: any;
    getTableBodyProps: any;
    headerGroups: any;
    page: any;
    nextPage: any;
    previousPage: any;
    canNextPage: any;
    canPreviousPage: any;
    pageOptions: any;
    gotoPage: any;
    pageCount: any;
    setGlobalFilter: any;
    prepareRow: any;
    selectedFlatRows: any;
    questionsForm: UseFormReturnType<
        {
            question_text: string;
            question_type: string;
            question_category: string;
            question_hint: string;
            choices: any[];
        },
        (values: {
            question_text: string;
            question_type: string;
            question_category: string;
            question_hint: string;
            choices: any[];
        }) => {
            question_text: string;
            question_type: string;
            question_category: string;
            question_hint: string;
            choices: any[];
        }
    >;
    categoryID: string;
    categoryForm: UseFormReturnType<
        {
            name: string;
            category_info: string;
            test_duration: string;
            num_of_questions: number;
        },
        (values: {
            name: string;
            category_info: string;
            test_duration: string;
            num_of_questions: number;
        }) => {
            name: string;
            category_info: string;
            test_duration: string;
            num_of_questions: number;
        }
    >;
    questionType: string;
    setQuestionType: (val: string | ((prevState: string) => string)) => void;
    setCategoryID: (val: string | ((prevState: string) => string)) => void;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    assessmentForm: UseFormReturnType<
        {
            name: string;
            assessment_info: string;
            total_duration: number;
            application_type: number;
            benchmark: number;
        },
        (values: {
            name: string;
            assessment_info: string;
            total_duration: number;
            application_type: number;
            benchmark: number;
        }) => {
            name: string;
            assessment_info: string;
            total_duration: number;
            application_type: number;
            benchmark: number;
        }
    >;
};

export type TableInstanceWithHooks<T extends object> = TableInstance<T> &
    UsePaginationInstanceProps<T> &
    UseSortByInstanceProps<T> & {
        state: UsePaginationState<T>;
    };

const FormContext = createContext<formDataProp | null>(null);
export default FormContext;
export const FormProvider = ({ children }: any) => {
    const [selected, setSelected] = useState(0);

    const AllapplicationColumns = useMemo(() => allApplicationColumn, []);
    const ShortlistedColumn = useMemo(() => ShortListColumn, []);
    const PassedColumn = useMemo(() => passedColumn, []);
    const FailedColumn = useMemo(() => failedColumn, []);
    const InterviewColumn = useMemo(() => interviewColumn, []);
    const HiredColumn = useMemo(() => hiredColumn, []);
    const RejectedColumn = useMemo(() => rejectedColumn, []);
    const data = useMemo(
        () =>
            MOCK_DATA.map((mock, idx) => ({
                ...mock,
                action: <ActionMenuApplication />,
            })),
        []
    );
    const shortListed = useMemo(
        () =>
            SHORTLISTED_DATA.map((mock, idx) => ({
                ...mock,
                action: <ActionMenuShortlist />,
            })),
        []
    );
    const passed = useMemo(
        () =>
            passAssesment.map((mock, idx) => ({
                ...mock,
                status: <PassedStatus />,
                action: <ActionMenuPass />,
            })),
        []
    );
    const failed = useMemo(
        () =>
            failAssesment.map((mock, idx) => ({
                ...mock,
                status: <FailedStatus />,
                action: <ActionMenuFail />,
            })),
        []
    );
    const Interview = useMemo(
        () =>
            interview.map((mock, idx) => ({
                ...mock,
                action: <ActionMenuInterview />,
            })),
        []
    );
    const Hired = useMemo(() => hired, []);
    const Rejected = useMemo(() => rejected, []);

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
            columns:
                selected === 0
                    ? AllapplicationColumns
                    : selected === 1
                    ? ShortlistedColumn
                    : selected === 2
                    ? PassedColumn
                    : selected === 3
                    ? FailedColumn
                    : selected === 4
                    ? InterviewColumn
                    : selected === 5
                    ? HiredColumn
                    : (RejectedColumn as any),
            data:
                selected === 0
                    ? data
                    : selected === 1
                    ? shortListed
                    : selected === 2
                    ? passed
                    : selected === 3
                    ? failed
                    : selected === 4
                    ? Interview
                    : selected === 5
                    ? Hired
                    : (Rejected as any),
        },
        useGlobalFilter,
        usePagination,
        useRowSelect,
        (hooks) => {
            hooks.visibleColumns.push((columns): any => {
                return [
                    {
                        Header: ({ getToggleAllRowsSelectedProps }: any) => (
                            <Checkbox {...getToggleAllRowsSelectedProps()} />
                        ),
                        Cell: ({ row }: any) => (
                            <Checkbox {...row.getToggleRowSelectedProps()} />
                        ),
                    },
                    ...columns,
                ];
            });
        }
    ) as TableInstanceWithHooks<object>;

    const { pageIndex, globalFilter }: any = state;

    const categoryForm = useForm({
        initialValues: {
            name: "",
            category_info: "",
            test_duration: "",
            num_of_questions: 0,
        },
    });

    const questionsForm = useForm({
        initialValues: {
            question_text: "",
            question_type: "",
            question_category: "Real",
            question_hint: "face your book",
            choices: Array(4).fill({
                choice_text: "",
                is_correct: false,
            }),
        },
    });

    const assessmentForm = useForm({
        initialValues: {
            name: "",
            assessment_info: "",
            total_duration: null,
            application_type: 8,
            benchmark: null,
        },
    });
    const [questionType, setQuestionType] = useSessionStorage({
        key: "questionType",
        defaultValue: "",
    });

    const [categoryID, setCategoryID] = useSessionStorage({
        key: "categoryID",
        defaultValue: "",
    });
    const [value, onChange] = useState("");

    let formData = {
        selected,
        setSelected,
        pageIndex,
        globalFilter,
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
        setGlobalFilter,
        prepareRow,
        selectedFlatRows,
        questionsForm,
        categoryID,
        categoryForm,
        questionType,
        setQuestionType,
        setCategoryID,
        value,
        onChange,
        assessmentForm,
    };

    return (
        <FormContext.Provider value={formData}>{children}</FormContext.Provider>
    );
};

// "question_text": "Question 14?",
//     "question_type": "Multi-choice",
//     "question_category": "Real",
//     "choices": [
//         {
//             "choice_text": "A",
//             "is_correct": true
//         },
//         {
//             "choice_text": "B"
//         }
//     ]
// }
