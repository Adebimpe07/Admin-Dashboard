import { Firstline, Python, Task, Video } from "iconsax-react";

export const SelectQuestionData = [
    {
        icon: <Firstline size="20" color="#38CB89" variant="Bold" />,
        title: "Essay",
        href: "/assessments/categories/create_essay",
        pointerEvent: "",
    },
    {
        icon: <Task size="20" color="#38CB89" variant="Bold" />,
        title: "Multiple Choice",
        href: "/assessments/categories/create_multiple_choice",
        pointerEvent: "",
    },
    {
        icon: <Task size="20" color="#38CB89" variant="Bold" />,
        title: "Multiple Response",
        href: "/assessments/categories/create_multiple_response",
        pointerEvent: "none",
    },
    {
        icon: <Python size="20" color="#38CB89" variant="Bold" />,
        title: "Code",
        href: "/assessments/categories/create_code",
        pointerEvent: "",
    },
    // { icon: <Video size="20" color="#38CB89" variant="Bold" />, title: "Video" },
];

export const AssessmentBarData = [
    "Category",
    "Add Questions",
    "Review & Upload",
];
