import Home from "pages/home/Home";
import About from "pages/about/About";
import IRouteItem from "./types";


type IRouter = IRouteItem[]


const router: IRouter = [
  {
    key: "home",
    path: "/home",
    component: Home,
  },
  {
    key: "about",
    path: "/about",
    component: About,
  },
];

export default router;
