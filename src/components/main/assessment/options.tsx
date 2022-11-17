import { Icon } from "@iconify/react";
import {
  ActionIcon,
  Button,
  Checkbox,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useFormContext } from "./createAssessment1";

type OptionsProps = {
  enteries: number;
  setEntries: React.Dispatch<React.SetStateAction<number>>;
};

interface IOption {
  index: number;
}

function Option({ index }: IOption) {
  const form = useFormContext();
  return (
    <div className="flex gap-3 items-center">
      <Checkbox
        {...form.getInputProps(`choices.${index}.isCorrect`, {
          type: "checkbox",
        })}
      />
      <TextInput
        className="flex-1 focus:outline-none  placeholder:text-[#4A4C58] placeholder:text-sm font-light"
        placeholder="Enter Option"
        {...form.getInputProps(`choices.${index}.text`)}
      />

      <ActionIcon
        onClick={() => {
          form.removeListItem("choices", index);
        }}
      >
        <Icon icon="ph:x" color="#d0d5dd" width="32" />
      </ActionIcon>
    </div>
  );
}

function Options() {
  const form = useFormContext();

  return (
    <div className="flex flex-col gap-5 w-[350px]">
      <Text>Select the right answer</Text>
      <Stack spacing="lg">
        {form.values.choices.map((_, idx) => (
          <Option key={idx} index={idx} />
        ))}
      </Stack>
      <Button
        unstyled
        className="self-start"
        onClick={() => {
          form.insertListItem("choices", { text: "", isCorrect: false });
        }}
      >
        Add option
      </Button>
    </div>
  );
}

export default Options;
