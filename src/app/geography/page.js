"use client";

import { Box } from "@mui/material";
import GeographyChart from "../ui/geography-chart";
import Header from "../ui/header";

export default function Page() {
  return (
    <Box m="20px">
      <Header title="Geography Chart" subtitle="Simple Geography Chart" />
      <Box height="75vh">
        <GeographyChart />
      </Box>
    </Box>
  );
}
