import { Icon } from "@iconify/react";
import { Checkbox } from "@mantine/core";
import { createFormContext } from "@mantine/form";
import React, { useState } from "react";
import CreatePage from "./createPage";
import CreateQuestions from "./createQuestions";

const [FormProvider, useFormContext, useForm] = createFormContext<{
  categoryName: string;
  questionTitle: string;
  questionSummary: string;
  choices: Array<{ text: string; isCorrect: boolean }>;
}>();

const index = () => {
  const [active, setActive] = useState(1);

  const form = useForm({
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

  return (
    <FormProvider form={form}>
      <form className="h-screen flex-1 py-6 flex flex-col  bg-[#e5e5e5]">
        {active === 0 ? (
          <CreatePage setActive={setActive} />
        ) : (
          <CreateQuestions />
        )}
      </form>
    </FormProvider>
  );
};

export { useFormContext, index as default };
