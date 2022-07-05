//@ts-check
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./temaConfig";
import App from "./App";
import CartContext from "./components/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <>
    <CartContext>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </CartContext>
  </>
  //</React.StrictMode>
);
