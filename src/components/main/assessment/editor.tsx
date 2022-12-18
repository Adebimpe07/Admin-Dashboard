import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import { useEffect } from "react";
import { useContext } from "react";
import FormContext from "../../../context/store";
import { UseFormReturnType } from "@mantine/form";

function editor({ form }) {
    const { value, onChange } = useContext(FormContext);

    useEffect(() => {
        form.values.question_text = value;
        console.log(form.values.question_text);
    }, [value]);

    return (
        <RichTextEditor
            classNames={{
                root: "h-[90%] !border-[#D0D5DD]",
                toolbarControl: "!border-none",
            }}
            value={value}
            controls={[
                ["bold", "italic", "underline", "strike", "link", "image"],
                ["unorderedList", "clean", "orderedList"],
                ["sup", "sub", "codeBlock", "h1", "h2", "h3"],
                ["alignLeft", "alignCenter", "alignRight"],
            ]}
            placeholder="For example: What is 2+2?"
            onChange={onChange}
            id="rte"
        />
    );
}

export default editor;
