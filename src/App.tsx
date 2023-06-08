import React, { useState } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { ThemeContext } from "./contexts/themeContext";
import GlobalStyles from "./styles/globalStyles";

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
    {
      path: "/portfolio",
    },
  ]);

  const NavBar = () => {
    return (
      <div>
        <li>
          <Link to={"/portfolio"}>Portfolio</Link>
        </li>
      </div>
    );
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
