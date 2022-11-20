import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/counter">Counter</NavLink>
        </li>
        <li>
          <NavLink to="/timer">Timer</NavLink>
        </li>
        <li>
          <NavLink to="/search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/theme">Thème</NavLink>
        </li>
        {!user.isConnected && (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
        {user.isConnected && (
          <li>
            <NavLink to="/admin/logout">Logout</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/admin/users">Admin Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
