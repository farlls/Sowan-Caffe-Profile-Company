import "../css/Navigation.css";
import "../css/Reservation.css";
import logoSecond from "../assets/icons/secondLogo.svg";
import React,{useEffect, useState} from "react";
import BtnMenu from "../Controller/NavbarBtn.jsx";
import ReservationBtn from "../Controller/ReservationBtn";
import { Link } from "react-router-dom";

function Navigation() {
  const [navbarClass, setNavbarClass] = useState("navigation transparent");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarClass("navigation solid");
      } else {
        setNavbarClass("navigation transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            <Link to="/" className="active" href="#">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/aboutus" href="#">ABOUT US</Link>
          </li>
          <li>
            <Link to="/menu" href="#">MENU</Link>
          </li>
          <li>
            <Link to="/contactus" href="#" >
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
