import { createTheme, ThemeProvider } from "@mui/material";
import React, { useState } from "react";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import reportWebVitals from "./reportWebVitals";

const DEFAULT_THEME = "light";

const getDesignPalette = (mode) => ({
  palette: {
    mode,
    ...(mode === DEFAULT_THEME
      ? {
          primary: {
            main: "#0a95ff",
          },
          secondary: {
            main: "#ffffff",
          },
        }
      : {
          primary: {
            main: "#0a95ff",
          },
          secondary: {
            main: "#000000",
          },
        }),
  },
});

export const ThemeContext = createContext({
  theme: DEFAULT_THEME,
  changeTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const changeTheme = () =>
    setTheme(theme === DEFAULT_THEME ? "dark" : DEFAULT_THEME);

  return (
    <>
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <ThemeProvider theme={createTheme(getDesignPalette(theme))}>
          <Home />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

/*const themeDark = createTheme({
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
});*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
