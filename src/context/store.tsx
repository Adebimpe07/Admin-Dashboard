import { createContext, useState, useEffect } from "react";
import { useForm } from "@mantine/form";
import { useSessionStorage } from "@mantine/hooks";
const FormContext = createContext(null);
export default FormContext;
export const FormProvider = ({ children }) => {
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
    questionsForm,
    categoryID,
    categoryForm,
    questionType,
    setQuestionType,
    setCategoryID,
    value,
    onChange,
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
