"use client";

import { theme } from "@/app/ui/theme";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export function Providers({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
