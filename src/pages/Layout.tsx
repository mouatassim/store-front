import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="grid">
      <Navbar />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
