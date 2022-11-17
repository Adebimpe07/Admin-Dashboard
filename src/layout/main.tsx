import { Briefcase, FolderMinus, Notepad2 } from "iconsax-react";
import PictureArt from "../assets/articlePic.svg";

export const CardData = [
  {
    title: "TOTAL APPLICANTS",
    value: "2,426",
    valueCount: "36%",
  },
  {
    title: "TOTAL ASSESSMENTS TAKEN",
    value: "485",
    valueCount: "14%",
  },
  {
    title: "JOBS VIEW",
    value: "84,382",
    valueCount: "36%",
  },
  {
    title: "SUB ADMINS CREATED",
    value: "3",
    valueCount: "",
  },
];

export const AsideMainData = [
  {
    title: "FrontEnder",
    subtitle: "Admin22",
    views: "123",
    timestamp: "2d ago",
  },
  {
    title: "FrontEnder",
    subtitle: "Admin22",
    views: "123",
    timestamp: "2d ago",
  },
  {
    title: "FrontEnder",
    subtitle: "Admin22",
    views: "123",
    timestamp: "2d ago",
  },
  {
    title: "FrontEnder",
    subtitle: "Admin22",
    views: "123",
    timestamp: "2d ago",
  },
  {
    title: "FrontEnder",
    subtitle: "Admin22",
    views: "123",
    timestamp: "2d ago",
  },
];
type durationprops = Array<string>;
export const Duration: durationprops = ["1 wk", "2 wk", "3 wk", "4 wk"];

type chartprops = Array<string>;
export const Chart: chartprops = ["12 Months", "6 Months", "30 Days", "7 Days"];

export const ActivitiesData = [
  {
    icon: (
      <Briefcase
        size="17"
        color="#30AD74"
        className="bg-[#EBFAF3]"
        variant="Outline"
      />
    ),
    title: "New job post",
    subtitle: "Admin22",
    timestamp: "2d ago",
    name: "briefcase",
  },
  {
    icon: (
      <FolderMinus className="" size="17" color="#6530BC" variant="TwoTone" />
    ),
    title: "New job post",
    subtitle: "Admin22",
    timestamp: "2d ago",
    name: "folderminus",
  },
  {
    icon: <Notepad2 size="17" color="#E1891C" variant="Outline" />,
    title: "New job post",
    subtitle: "Admin22",
    timestamp: "2d ago",
    name: "notepad2",
  },
  {
    icon: <FolderMinus size="17" color="#6530BC" variant="TwoTone" />,
    title: "New job post",
    subtitle: "Admin22",
    timestamp: "2d ago",
    name: "folderminus",
  },
  {
    icon: <Briefcase color="#30AD74" size="17" variant="Outline" />,
    title: "New job post",
    subtitle: "Admin22",
    timestamp: "2d ago",
    name: "briefcase",
  },
];

export const ArticleData = [
  {
    picture: PictureArt,
    title: "How to apply for job interviews remotely",
    subtitle: "Admin22",
    link: "NEWS",
    timestamp: "2d ago",
  },
  {
    picture: PictureArt,
    title: "How to apply for job interviews remotely",
    subtitle: "Admin22",
    link: "GENERAL",
    timestamp: "2d ago",
  },
  {
    picture: PictureArt,
    title: "How to apply for job interviews remotely",
    subtitle: "Admin22",
    link: "COMPLETED",
    timestamp: "2d ago",
  },
  {
    picture: PictureArt,
    title: "How to apply for job interviews remotely",
    subtitle: "Admin22",
    link: "COMPLETED",
    timestamp: "2d ago",
  },
  {
    picture: PictureArt,
    title: "How to apply for job interviews remotely",
    subtitle: "Admin22",
    link: "COMPLETED",
    timestamp: "2d ago",
  },
];

export const NotificationData = [
  {
    icon: (
      <Briefcase
        size="17"
        color="#30AD74"
        className="bg-[#EBFAF3]"
        variant="Outline"
      />
    ),
    title: "New Application",
    subtitle: "Admin22",
    timestamp: "2d ago",
    name: "briefcase",
  },
  {
    icon: (
      <FolderMinus className="" size="17" color="#6530BC" variant="TwoTone" />
    ),
    title: "Assessment Completed",
    subtitle: "Admin22",
    timestamp: "2d ago",
    name: "folderminus",
  },
  {
    icon: <Notepad2 size="17" color="#E1891C" variant="Outline" />,
    title: "New Application",
    subtitle: "Admin22",
    timestamp: "2d ago",
    name: "notepad2",
  },
  {
    icon: <FolderMinus size="17" color="#6530BC" variant="TwoTone" />,
    title: "Assessment Completed",
    subtitle: "Admin22",
    timestamp: "2d ago",
    name: "folderminus",
  },
  {
    icon: <Briefcase color="#30AD74" size="17" variant="Outline" />,
    title: "Assessment Completed",
    subtitle: "Admin22",
    timestamp: "2d ago",
    name: "briefcase",
  },
];