import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import PersonalStudies from "../pages/PersonalStudies";
import Header from "../components/Header";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export const router = createBrowserRouter(
  [
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/portfolio",
          element: <Portfolio />,
        },
        {
          path: "/studies",
          element: <PersonalStudies />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  },
);
