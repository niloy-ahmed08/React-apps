import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./RootLayout";
import Home from "./Pages/Home";
import SkillsPart from "./Components/SkillsPart";
import MySErvice from "./Components/MySErvice";
import WevDettels from "./Pages/WevDettels";
import ContenntWrite from "./Pages/ContenntWrite";
import UiUx from "./Pages/UiUx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
        { path: "navitgehome", Component: Home },
      { path: "navitgateskill", Component: SkillsPart },
      { path: "navitgateservice", Component: MySErvice },
        { path: "webrelated", Component: WevDettels },
        { path: "contentrelated", Component: ContenntWrite},
         { path: "uiuxrelated", Component: UiUx},

    ],
  },
]);