import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Map from "../pages/Map/Map";
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/map", component: Map },
  { path: "/login", component: Login },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
