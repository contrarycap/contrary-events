import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3065FE",
      light: "#e4ecf7",
      dark: "#0d0e29"
    },
    background: {
      default: "#fff",
      dark: '#000',
    },
    text: {
      primary: "#000",
    }
  },
  typography: {
    fontFamily: "Work Sans",
    h1: {
      fontSize: 68,
      fontWeight: 700,
      lineHeight: 1.2
    },
    h3: {
      fontWeight: 600,
      fontSize: 36
    },
    h2: {
      fontWeight: 600,
      fontSize: 48
    },
    body1: {
      fontSize: 18,
      lineHeight: 1.8
    },
    button: {
      fontSize: 15,
      lineHeight: 1
    }
  },
  shape: {
    borderRadius: 0
  }
});

export default theme;
