import { Menu } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form"
import moment from "moment";

const ActionMenuCreated = ({created_on}) => {

 
  return (
   <div>{moment(created_on).format("YYYY-MM-DD")}</div>
  );
};

export default ActionMenuCreated;
