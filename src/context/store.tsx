import { createContext, useState, useEffect } from "react";
import { useForm } from "@mantine/form";
const FormContext = createContext(null);
export default FormContext;
export const FormProvider = ({ children }) => {
  const optionsForm = useForm({
    initialValues: {
      categoryName: "",
      questionTitle: "",
      questionSummary: "",
      choices: Array(4).fill({
        text: "",
        isCorrect: true,
      }),
    },
  });

  let formData = {
    optionsForm,
  };

  return (
    <FormContext.Provider value={formData}>{children}</FormContext.Provider>
  );
};
