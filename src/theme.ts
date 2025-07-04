import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "3.25rem",
      lineHeight: 1.2,
      marginBottom: "1rem",
      fontWeight: 700,
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      fontSize: "2.8rem",
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      fontSize: "2.25rem",
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      fontSize: "1.9rem",
    },
    h5: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      fontSize: "1.7rem",
    },
    h6: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 600,
      fontSize: "1.5rem",
    },
    body1: {
      fontFamily: "Inter, sans-serif",
      fontWeight: 400,
      marginBottom: "1rem",
    },
    body2: {
      fontFamily: "Inter, sans-serif",
    },
    subtitle1: {
      fontFamily: "Inter, sans-serif",
      fontSize: "1rem",
      fontWeight: 500,
      marginBottom: "0.5rem",
    },
    button: {
      fontFamily: "Inter, sans-serif",
      textTransform: "none",
      fontWeight: 600,
      padding: "0.5rem 1rem",
      fontSize: "1rem",
      backgroundColor: "red",
    },
  },
});

export default theme;
