import { NavLink } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <NavLink to={"/"}>Home</NavLink>
        <ul>
          <li>
            <NavLink to={"/page_1"}>page 1</NavLink>
          </li>
          <li>
            <NavLink to={"/page_2"}>page 2</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
