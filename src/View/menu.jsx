import React from "react";

import "../css/Menu.css";
import IconBurger from "../assets/icons/burger.svg";
import IconDessert from "../assets/icons/dessert.png";
import IconDinner from "../assets/icons/dinner.png";
import IconCoffeeCup from "../assets/icons/coffee-cup.svg";
import "animate.css";

import { useEffect, useState } from "react";

// import $ from "jquery";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function Page1() {
  const [menuData, setMenuData] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState("Burger");

  const fetchMenuData = () => {
    axios
      .get(`http://localhost:3001/menu/${selectedMenu}`)
      .then((response) => {
        setMenuData(response.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan dalam permintaan API: ", error);
      });
  };

  const handleClick = (value) => {
    setSelectedMenu(value);
  };
  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };
  useEffect(() => {
    fetchMenuData();
    AOS.init();
    AOS.refresh();
  }, [selectedMenu]);

  return (
    <div id="menu" className="container-page1">
      <div className="container-menu">
        <div className="container-title-menu">
          <h4 data-aos="fade-left">Menu</h4>
          <h3 data-aos="fade-left">Delicious Food</h3>
          <p data-aos="fade-left">
            Part of the secret of success in life is to eat what you like and
            let the food fight it out inside. <span> read more...</span>
          </p>
        </div>
        <div className="container-card-menu">
          {menuData.map((item) => {
            const base64Image = arrayBufferToBase64(item.image.data);
            const imageURL = `data:${item.image.contentType};base64,${base64Image}`;
            return (
              <div key={item.id} className="card" data-aos="fade-left">
                <div className="itemBox" alt="menu">
                  <img src={imageURL} alt={item.name} />
                </div>
                <div className="container-art-menu">
                  <h5>{item.name}</h5>
                  <p>{item.deskripsi}</p>
                </div>
              </div>
            );
          })}

          <div className="container-list-menu">
            <div
              onClick={() => handleClick("Burger")}
              className={`menu ${
                selectedMenu === "Burger" ? "activemenu" : ""
              }`}
            >
              <img src={IconBurger} alt="" />
              <div className="title-list">Burger</div>
            </div>
            <div
              onClick={() => handleClick("Coffee")}
              className={`menu ${
                selectedMenu === "Coffee" ? "activemenu" : ""
              }`}
            >
              <img src={IconCoffeeCup} alt="" />
              <div className="title-list">Coffee</div>
            </div>
            <div
              onClick={() => handleClick("Main Course")}
              className={`menu ${
                selectedMenu === "Main Course" ? "activemenu" : ""
              }`}
            >
              <img src={IconDinner} alt="" />
              <div className="title-list">Main Course</div>
            </div>
            <div
              onClick={() => handleClick("Dessert")}
              className={`menu ${
                selectedMenu === "Dessert" ? "activemenu" : ""
              }`}
            >
              <img src={IconDessert} alt="" />
              <div className="title-list">Dessert</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Page1;
