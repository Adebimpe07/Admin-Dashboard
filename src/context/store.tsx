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
import axios from "axios";

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
  coursesForm: UseFormReturnType<
    {
      title: string;
      image: string;
      description: string;
    },
    (values: { title: string; image: string; description: string }) => {
      title: string;
      image: string;
      description: string;
    }
  >;
  admin: any;
  setAdmin: (val: string | ((prevState: string) => string)) => void;
  token: any;
  setToken: (val: string | ((prevState: string) => string)) => void;
  isLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
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

  const [MOCK_DATA, setMOCK_DATA] = useState([]);
  const [SHORTLISTED_DATA, setSHORTLISTED_DATA] = useState([]);
  const [passAssesment, setpassAssesment] = useState([]);
  const [failAssesment, setfailAssesment] = useState([]);
  const [interview, setInterview] = useState([]);
  const [hired, setHired] = useState([]);
  const [rejected, setRejected] = useState([]);

  const AllapplicationColumns = useMemo(() => allApplicationColumn, []);
  const ShortlistedColumn = useMemo(() => ShortListColumn, []);
  const PassedColumn = useMemo(() => passedColumn, []);
  const FailedColumn = useMemo(() => failedColumn, []);
  const InterviewColumn = useMemo(() => interviewColumn, []);
  const HiredColumn = useMemo(() => hiredColumn, []);
  const RejectedColumn = useMemo(() => rejectedColumn, []);

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
    if (selected === 0) {
      fetchApplicantList(" ", setMOCK_DATA);
    } else if (selected === 1) {
      fetchApplicantList("/shortlisted", setSHORTLISTED_DATA);
    } else if (selected === 2) {
      fetchApplicantList("/accepted", setpassAssesment);
    } else if (selected === 3) {
      fetchApplicantList("/rejected", setfailAssesment);
    } else if (selected === 4) {
      fetchApplicantList("/invited-for-interview", setInterview);
    } else if (selected === 5) {
      fetchApplicantList("/accepted", setHired);
    } else if (selected === 6) {
      fetchApplicantList("/rejected", setRejected);
    }
  }, [selected]);

  const data = useMemo(
    () =>
      MOCK_DATA?.map((mock, idx) => ({
        ...mock,
        action: <ActionMenuApplication />,
      })),
    [MOCK_DATA]
  );
  const shortListed = useMemo(
    () =>
      SHORTLISTED_DATA?.map((mock, idx) => ({
        ...mock,
        action: <ActionMenuShortlist />,
      })),
    [SHORTLISTED_DATA]
  );
  const passed = useMemo(
    () =>
      passAssesment?.map((mock, idx) => ({
        ...mock,
        status: <PassedStatus />,
        action: <ActionMenuPass />,
      })),
    [passAssesment]
  );
  const failed = useMemo(
    () =>
      failAssesment?.map((mock, idx) => ({
        ...mock,
        status: <FailedStatus />,
        action: <ActionMenuFail />,
      })),
    [failAssesment]
  );
  const Interview = useMemo(
    () =>
      interview?.map((mock, idx) => ({
        ...mock,
        action: <ActionMenuInterview />,
      })),
    [interview]
  );
  const Hired = useMemo(() => hired, [hired]);
  const Rejected = useMemo(() => rejected, [rejected]);

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
      application_type: 6,
      benchmark: null,
    },
  });
  const coursesForm = useForm({
    initialValues: {
      title: "",
      image: "",
      description: "",
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
  const [admin, setAdmin] = useSessionStorage({
    key: "admin",
    defaultValue: "",
  });
  const [token, setToken] = useSessionStorage({
    key: "token",
    defaultValue: "",
  });

  const [value, onChange] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let formData = {
    isLoading,
    setIsLoading,
    admin,
    setAdmin,
    token,
    setToken,
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
    coursesForm,
  };

  return (
    <FormContext.Provider value={formData}>{children}</FormContext.Provider>
  );
};
