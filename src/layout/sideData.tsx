import { Icon } from "@iconify/react";
import {
    Briefcase,
    Category,
    FolderOpen,
    Home3,
    Logout,
    Note1,
    Notepad2,
    People,
    Teacher,
    UserEdit,
} from "iconsax-react";

export const SideData = [
    {
        icon: <Home3 size="17" variant="Outline" />,
        heading: "Dashboard",
        href: "/",
    },
    {
        icon: <Briefcase size="17" variant="Outline" />,
        heading: "Jobs",
        href: "/jobs",
    },
    {
        icon: <Notepad2 size="17" variant="Outline" />,
        heading: "Assessments",
        href: "",
        sub_menu: [
            {
                icon: <Category size="17" variant="Outline" />,
                heading: "Categories",
                href: "/assessments/categories",
            },
            {
                icon: <Notepad2 size="17" variant="Outline" />,
                heading: "Assessments",
                href: "/assessments/assessment",
            },
        ],
    },
    {
        icon: <Note1 size="17" variant="Outline" />,
        heading: "Application",
        href: "/allapplications",
    },
    {
        icon: <FolderOpen size="17" variant="Outline" />,
        heading: "Content Management",
        href: "/content/news",
    },
    {
        icon: <Teacher size="17" variant="Outline" />,
        heading: "Course",
        href: "/courses",
    },
    {
        icon: <People size="17" variant="Outline" />,
        heading: "Cohort",
        href: "/cohorts",
    },
    {
        icon: <UserEdit size="17" variant="Outline" />,
        heading: "Member Management",
        href: "/memberManagement/ats_members",
    },
    {
        icon: <Icon icon="material-symbols:outgoing-mail-outline" width="19" />,
        heading: "Email Template",
        href: "/email",
    },
];
export const AdminData = [
    {
        icon: <People size="17" variant="Outline" />,
        heading: "Admin",
        href: "/admin",
    },
    {
        icon: <Icon icon="bi:people" color="" width="17" />,
        heading: "Sub admin",
        href: "/subadmin",
    },
    {
        icon: <Logout size="17" variant="Outline" />,
        heading: "Logout",
        href: "/logout",
    },
];
