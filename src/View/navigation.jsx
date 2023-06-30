import "../css/Navigation.css";
import "../css/Reservation.css";
import logoSecond from "../assets/img/Logo Two.svg";
import React, { useEffect, useState } from "react";
import BtnMenu from "../Controller/NavbarBtn.jsx";
import ReservationBtn from "../Controller/ReservationBtn";
import { Link } from "react-router-dom";

function Navigation() {
  const [navbarClass, setNavbarClass] = useState("navigation transparent");
  const [activePage, setActivePage] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarClass("navigation solid");
      } else {
        setNavbarClass("navigation transparent");
      }
    };
    const handlePageChange = () => {
      setActivePage(window.location.pathname);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handlePageChange);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handlePageChange);
    };
  }, []);

  return (
    <nav className={navbarClass}>
      <div className="container-logo">
        <img className="logo" alt="Logo Sowan Caffe" src={logoSecond}></img>
      </div>
      <div className="container-navigation-menu">
        <ul className="navigation-menu">
          <li>
            <Link
              to="/"
              className={activePage === "/" ? "active" : ""}
              onClick={() => setActivePage("/")}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              className={activePage === "/aboutus" ? "active" : ""}
              onClick={() => setActivePage("/aboutus")}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={activePage === "/menu" ? "active" : ""}
              onClick={() => setActivePage("/menu")}
            >
              MENU
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              className={activePage === "/contactus" ? "active" : ""}
              onClick={() => setActivePage("/contactus")}
            >
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <ReservationBtn />
        <BtnMenu />
      </div>
    </nav>
  );
}

export default Navigation;
