"use client";

import { Box } from "@mui/material";
import Header from "../ui/header";
import LineChart from "../ui/line-chart";

export default function Page() {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
