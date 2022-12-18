const QuestionNumbers = ({ setQuestionNumber, categoryQuestions }) => {
    // const { form, categoryQuestions } = useContext(ThemeContext);

    // const setQuestionNumber = usePersistStore(
    //     (state) => state.setQuestionNumber
    // );

    // const router = useRouter();

    // useEffect(() => {
    //     console.log(router.pathname);
    // }, []);

    return (
        <ul className="flex gap-[10px]">
            {categoryQuestions?.map((item, idx) => (
                <li
                    onClick={() => setQuestionNumber(idx)}
                    key={idx}
                    className="border border-solid border-[#F1F0F0] bg-[#F1F0F0] cursor-pointer text-[#000] px-3 py-1 rounded-xl">
                    {idx + 1}
                </li>
            ))}
        </ul>
    );
};

export default QuestionNumbers;
