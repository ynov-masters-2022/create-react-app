import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Nav from "./Nav";

const Layout = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h1>Mon super layout</h1>
      <p>Thème courant : {theme.value}</p>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
