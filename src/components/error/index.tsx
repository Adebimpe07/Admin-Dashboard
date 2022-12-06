import { Alert } from "@mui/material";
import React from "react";

const Error = ({ children }) => {
  return <Alert severity="error">{children}</Alert>;
};

export default Error;
