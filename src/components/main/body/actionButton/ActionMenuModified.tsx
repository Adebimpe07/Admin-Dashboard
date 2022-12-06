import { Menu } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "@mantine/form"
import moment from "moment";

const ActionMenuModified = ({last_modified}) => {

 
  return (
   <div>{moment(last_modified).format("YYYY-MM-DD")}</div>
  );
};

export default ActionMenuModified;
