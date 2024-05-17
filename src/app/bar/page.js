"use client";

import { Box } from "@mui/material";
import BarChart from "../ui/bar-chart";
import Header from "../ui/header";

export default function Page() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}
