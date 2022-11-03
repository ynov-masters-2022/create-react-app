import { NavLink } from "react-router-dom";

const Nav = () => (
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
    </ul>
  </nav>
);

export default Nav;
