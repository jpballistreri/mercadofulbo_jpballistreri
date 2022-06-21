import React from "react";
import { ThemeProvider, createTheme, Box, Typography } from "@mui/material";
import remeras_banner from "./remeras.jpg";
import "./welcome.css";

const welcomeTheme = createTheme({
  typography: {
    fontFamily: ["Days One", "cursive"].join(","),
  },
});

function Welcome({ greeting }) {
  return (
    <ThemeProvider theme={welcomeTheme}>
      <Box
        sx={{
          background: `url(${remeras_banner})`,
          width: "100%",
          height: "200px",
          textAlign: "center",
          paddingY: "15px",
          color: "whitesmoke",
          backgroundSize: "cover",
          backgroundPosition: "fixed",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            padding: "10px",
            width: "100%",
            typography: { sm: "h5", xs: "h6" },
            backgroundColor: "#00000096",
            fontFamily: "Arial",
          }}
        >
          {greeting}
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default Welcome;
