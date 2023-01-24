import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import reportWebVitals from "./reportWebVitals";

const themeDark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0a95ff",
    },
    secondary: {
      main: "#000000",
    },
  },
});
const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0a95ff",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={themeLight}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
