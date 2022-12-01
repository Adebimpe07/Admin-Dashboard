import { LoadingOverlay } from "@mantine/core";
import React from "react";

const Loading = ({ loading }) => {
  return <LoadingOverlay visible={loading} overlayBlur={2} />;
};

export default Loading;
