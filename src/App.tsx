import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { ThemeContext } from "./contexts/themeContext";

function App() {
  const [currentTheme, setCurrentTheme] = useState<any>(theme.light);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme.name === "dark" ? theme.light : theme.dark);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <RouterProvider router={router} />;
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
