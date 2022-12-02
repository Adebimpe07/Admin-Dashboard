import { Menu } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form"
import moment from "moment";

const ActionMenuStartDate = ({application_start_date}) => {

 
  return (
   <div>{moment(application_start_date).format("YYYY-MM-DD")}</div>
  );
};

export default ActionMenuStartDate;
