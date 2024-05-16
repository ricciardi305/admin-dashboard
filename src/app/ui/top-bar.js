'use client'

import { LightModeOutlined, NotificationsOutlined, PersonOutlined, Search, SettingsOutlined } from "@mui/icons-material";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { tokens } from "./theme";

export default function TopBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display={"flex"}
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase className="ml-2 flex-1" placeholder="Search"/>
        <IconButton type="button" className="p-1">
          <Search />
        </IconButton>
      </Box>

      <Box display={"flex"}>
      <IconButton type="button" className="p-1">
          <LightModeOutlined />
        </IconButton>
        <IconButton type="button" className="p-1">
          <NotificationsOutlined />
        </IconButton>
        <IconButton type="button" className="p-1">
          <SettingsOutlined />
        </IconButton>
        <IconButton type="button" className="p-1">
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
}
