"use client";

import { Box } from "@mui/material";
import Header from "../ui/header";
import PieChart from "../ui/pie-chart";

export default function Page() {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
