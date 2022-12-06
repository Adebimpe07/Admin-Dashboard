import React, { useEffect, useState } from "react";
import { Notification } from "iconsax-react";
import { Menu } from "@mantine/core";
import Link from "next/link";
import HeaderData from "../../../src/components/main/notification_ProfilePicture";
import Notifications from "../../../src/components/main/dashboard/notifications";
import Tabs from "../../../src/layout/assessmentTabs";
import ListAssessment from "../../../src/components/main/assessment/listedAssessment";
import { AssessmentCardData } from "../../../src/layout/assessmentCardData";
import AssessmentCards from "../../../src/components/main/assessment/assessmentCard/assessmentCards";
import axios from "axios";
import Loading from "../../../src/components/loading";

export const NotificationDrop = () => {
  return (
    <Menu shadow="md" width={250}>
      <Menu.Target>
        <button className="relative">
          <Notification size="17" variant="Outline" />
          <span className="absolute top-[-3px] left-2 text-[8px] px-[2px] text-[#fff] rounded-full bg-[#65110D]">
            {HeaderData.notificationCount}
          </span>
        </button>
      </Menu.Target>

      <Menu.Dropdown className="">
        <Notifications />
      </Menu.Dropdown>
    </Menu>
  );
};

const HeaderMain = () => {
  const [AssessmentCardData, setAssessmentCardData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAllAssessment = () => {
    setLoading(true);
    axios(
      `${process.env.NEXT_PUBLIC_BASE_URL_2}/api/assessment/create-list-assessment`
    )
      .then(function (response) {
        setAssessmentCardData(response.data.data.results);
        console.log(response.data.data.results);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAllAssessment();
  }, []);

  return AssessmentCardData?.length > 0 ? (
    <AssessmentCards AssessmentCardData={AssessmentCardData} />
  ) : (
    <div className="py-6 h-screen flex-1 flex flex-col  bg-mainBg">
      <div className="flex justify-between border-b border-[#DBD9D9] px-4">
        <h1 className="text-2xl font-semibold text-[#4A4C58] pb-[1.41rem]">
          Assessments
        </h1>
        <div className="flex gap-2 items-center">
          <NotificationDrop />
          <img width="40" src={HeaderData.adminProfilePicture.src} alt="" />
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex gap-2 px-4 pt-4 font-semibold">
          {Tabs.map((item, index) => (
            <div key={index}>
              <Link href={item.href}>
                <div className="flex flex-col gap-1 cursor-pointer">
                  <p>{item.name}</p>
                  <span
                    className={
                      item.name === "Assessments"
                        ? "w-8 bg-[#30AD74] px-1 h-1 self-center rounded-lg"
                        : "bg-[#fff] self-center"
                    }
                  ></span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <ListAssessment
          link="/assessments/assessment/create_assessment"
          text="Create Assessment"
        />
        <Loading loading={loading} />
      </div>
    </div>
  );
};
export default HeaderMain;
