import React, { useState, useEffect } from "react";

// import { createMuiTheme, ThemeProvider } from '@mui/private-theming';
import { createTheme, ThemeProvider } from "@mui/material/styles";

import colors from "../../assets/styles/variables/_colors.module.scss";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
        50: "#e3f2fd",
        100: "#bbdefb",
        200: "#90caf9",
        300: "#64b5f6",
        400: "#42a5f5",
        500: "#2196f3",
        600: "#1e88e5",
        700: "#1976d2",
        800: "#1565c0",
        900: "#0d47a1",
        A100: "#82b1ff",
        A200: "#448aff",
        A400: "#2979ff",
        A700: "#2962ff",
        contrastDefaultColor: "light"
      },
    primary2: {
      main: colors["main-color-2"],
      dark: colors["main-color-2-dark"],
      light: colors["main-color-2-light"],
      contrastText: colors["main-color-2-contrast"],
    },
    error: {
      main: "#EF3939",
    },
    success: {
      main: "#139608",
      light: "#1de30c",
    },
    gold: {
      main: "#FFDC64",
    },
    grey: {
      main: grey[800],
      dark: grey[900],
      light: grey[400],
      contrastText: grey[100],
    },
  },
});

const MaterialTheme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default MaterialTheme;
