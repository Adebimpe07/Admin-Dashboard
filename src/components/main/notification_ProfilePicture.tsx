import { StaticImageData } from "next/image";
import ProfilePicture from "../../assets/PM_Tosin.png";

type headerprops = {
  notificationCount: string;
  adminProfilePicture: StaticImageData;
};

const HeaderData: headerprops = {
  notificationCount: "2",
  adminProfilePicture: ProfilePicture,
};

export default HeaderData;
