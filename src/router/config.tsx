
import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Portfolio from "../pages/portfolio/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
