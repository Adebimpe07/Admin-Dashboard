import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";

const initialValue = "";

function editor() {
  const [value, onChange] = useState(initialValue);
  return (
    <RichTextEditor
      classNames={{
        root: "h-[70%] !border-[#D0D5DD]",
        toolbarControl: "!border-none",
      }}
      value={value}
      controls={[
        ["bold", "italic", "underline", "strike", "link", "image"],
        ["unorderedList", "clean", "orderedList"],
        ["sup", "sub", "codeBlock"],
        ["alignLeft", "alignCenter", "alignRight"],
      ]}
      placeholder="For example: What is 2+2?"
      onChange={onChange}
      id="rte"
    />
  );
}

export default editor;
