import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./RootLayout";
import Home from "./Pages/Home";
import SkillsPart from "./Components/SkillsPart";
import MySErvice from "./Components/MySErvice";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
        { path: "navitgehome", Component: Home },
      { path: "navitgateskill", Component: SkillsPart },
      { path: "navitgateservice", Component: MySErvice },

    ],
  },
]);