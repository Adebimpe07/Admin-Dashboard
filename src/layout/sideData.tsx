import { Icon } from "@iconify/react";
import {
  Briefcase,
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
  },
  {
    icon: <Briefcase size="17" variant="Outline" />,

    heading: "Jobs",
  },
  {
    icon: <Notepad2 size="17" variant="Outline" />,
    heading: "Assessments",
  },
  {
    icon: <Note1 size="17" variant="Outline" />,
    heading: "Application",
  },
  {
    icon: <FolderOpen size="17" variant="Outline" />,
    heading: "Content Management",
  },
  {
    icon: <Teacher size="17" variant="Outline" />,
    heading: "Course",
  },
  {
    icon: <People size="17" variant="Outline" />,
    heading: "Cohort",
  },
  {
    icon: <UserEdit size="17" variant="Outline" />,
    heading: "Member Management",
  },
];
export const AdminData = [
  {
    icon: <People size="17" variant="Outline" />,
    heading: "Admin",
  },
  {
    icon: <Icon icon="bi:people" color="" width="17" />,
    heading: "Sub admin",
  },
  {
    icon: <Logout size="17" variant="Outline" />,
    heading: "Logout",
  },
];
