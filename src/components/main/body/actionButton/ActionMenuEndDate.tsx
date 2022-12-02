import { Menu } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form"
import moment from "moment";

const ActionMenuEndDate = ({application_end_date}) => {

 
  return (
   <div>{moment(application_end_date).format("YYYY-MM-DD")}</div>
  );
};

export default ActionMenuEndDate;
