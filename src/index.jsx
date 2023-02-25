import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React, { useState, Suspense } from "react";
import { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/Home";
import reportWebVitals from "./reportWebVitals";
import "./i18n";
import Contact from "./components/contact/Contact";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./layout/AppLayout";

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
  toggleTheme: () => {},
});
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

function App() {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const toggleTheme = () =>
    setTheme(theme === DEFAULT_THEME ? "dark" : DEFAULT_THEME);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      <ThemeProvider theme={createTheme(getDesignPalette(theme))}>
        <CssBaseline />
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
