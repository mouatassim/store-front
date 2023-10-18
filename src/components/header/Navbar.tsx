import Toggler from "./Toggler";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [openMenue, setOpenMenue] = useState(false);
  const breakpoint = 780;
  const showMenue = () => {
    setOpenMenue(!openMenue);
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setOpenMenue(false);
    };
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const navType =
    width > breakpoint ? "nav__list" : openMenue ? "nav__block" : "nav__hidden";

  return (
    <div className="header collapsible">
      <h2 style={{ color: "#fff" }}>Books</h2>
      <Toggler showMenue={showMenue} />
      <ul
        className={`list ${navType}`}
        style={openMenue ? { transition: "display 3s ease-in-out" } : {}}
      >
        <li className="nav__item">
          <NavLink className="nav__itemlink" to="/">
            Store
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__itemlink" to="/cart">
            Cart
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__itemlink" to="/order">
            Orders
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink className="nav__itemlink" to="/admin">
            Admin
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
