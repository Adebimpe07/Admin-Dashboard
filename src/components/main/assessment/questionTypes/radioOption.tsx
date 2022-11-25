import { Icon } from "@iconify/react";
import {
  ActionIcon,
  Button,
  Checkbox,
  Radio,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { useContext } from "react";
import FormContext from "../../../../context/store";

type OptionsProps = {
  enteries: number;
  setEntries: React.Dispatch<React.SetStateAction<number>>;
};

interface IOption {
  index: number;
}

function Option({ index }: IOption) {
  const { questionsForm } = useContext(FormContext);
  console.log(questionsForm.values.choices[index].isCorrect);
  return (
    <>
      <Radio
        checked={questionsForm.values.choices[index].isCorrect}
        onChange={(event) =>
          questionsForm.setFieldValue(
            ["choices"[index]["isCorrect"]],
            event.currentTarget.checked
          )
        }
      />
      <TextInput
        className="flex-1 focus:outline-none  placeholder:text-[#4A4C58] placeholder:text-sm font-light"
        placeholder="Enter Option"
        {...questionsForm.getInputProps(`choices.${index}.text`)}
      />

      <ActionIcon
        onClick={() => {
          questionsForm.removeListItem("choices", index);
        }}
      >
        <Icon icon="ph:x" color="#d0d5dd" width="32" />
      </ActionIcon>
    </>
  );
}

function Options() {
  const { questionsForm } = useContext(FormContext);

  return (
    <div className="flex flex-col gap-5 w-[350px]">
      <Text>Select the right answer</Text>
      <Stack spacing="lg">
        <Radio.Group>
          {questionsForm.values.choices.map((_, idx) => (
            <div className="flex gap-3 items-center">
              <Option index={idx} key={idx} />
            </div>
          ))}
        </Radio.Group>
      </Stack>
      <Button
        unstyled
        className="self-start"
        onClick={() => {
          questionsForm.insertListItem("choices", {
            text: "",
            isCorrect: false,
          });
        }}
      >
        Add option
      </Button>
    </div>
  );
}

export default Options;

{
  /* <Radio.Group
  name="favoriteFramework"
  orientation="vertical"
  label="Select your favorite framework/library"
  description="This is anonymous"
  withAsterisk
>
  <Radio className="" value="" label="" />
  <Radio value="svelte" label="Svelte" />
  <Radio value="ng" label="Angular" />
  <Radio value="vue" label="Vue" />
</Radio.Group>; */
}
