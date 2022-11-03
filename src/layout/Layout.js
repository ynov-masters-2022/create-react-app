import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Layout = () => (
  <div>
    <h1>Mon super layout</h1>
    <Nav />
    <Outlet />
  </div>
);

export default Layout;
