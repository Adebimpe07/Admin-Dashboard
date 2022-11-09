import Java from "../assets/java.png";
import Html from "../assets/html.png";
import Edit from "../assets/edit.png";
import Trash from "../assets/trash.png";
import Brief from "../assets/briefcase.png";
import Vector from "../assets/Vector.png"
import { StaticImageData } from "next/image";



type JobDataType = Array<{
    icon: StaticImageData,
    jobTitle: string
}> 

export const jobData: JobDataType = [
    {
        icon: Html,
        jobTitle: 'Front-end Developer'
    },
    {
        icon: Java,
        jobTitle: 'Back-end Developer'
    },
    {
        icon: Java,
        jobTitle: 'Product Designer'
    },
    {
        icon: Java,
        jobTitle: 'Product Manager'
    },
]