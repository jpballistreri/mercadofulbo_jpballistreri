//@ts-check
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material";
import theme from "./temaConfig";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <>
    <ThemeProvider theme={theme}>
      <Navbar />
    </ThemeProvider>
  </>
  //</React.StrictMode>
);
