import React, { useEffect, useState } from "react";
import "../css/FullMenus.css";
import axios from "axios";
import AOS from "aos";
function FullMenus() {
  const [menuBurger, setMenuBurger] = useState([]);
  const [menuCoffee, setMenuCoffee] = useState([]);
  const [menuMainCourse, setMenuMainCourse] = useState([]);
  const [menuDessert, setMenuDessert] = useState([]);
  const fetchMenuData = () => {
    axios
      .get(`http://localhost:3001/menu/Burger`)
      .then((response) => {
        setMenuBurger(response.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan dalam permintaan API: ", error);
      });
    axios
      .get(`http://localhost:3001/menu/Coffee`)
      .then((response) => {
        setMenuCoffee(response.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan dalam permintaan API: ", error);
      });
    axios
      .get(`http://localhost:3001/menu/Main Course`)
      .then((response) => {
        setMenuMainCourse(response.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan dalam permintaan API: ", error);
      });
    axios
      .get(`http://localhost:3001/menu/Dessert`)
      .then((response) => {
        setMenuDessert(response.data);
      })
      .catch((error) => {
        console.error("Terjadi kesalahan dalam permintaan API: ", error);
      });
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
    AOS.init();
    AOS.refresh();
    fetchMenuData();
  }, []);
  return (
    <div className="container-FullMenus">
      <header className="header-FullMenus">
        <h1 className="heading-h1-menus">Menu</h1>
        <h4 className="sub-heading-menus">
          Home - <span className="span-FullMenus">MENU</span>
        </h4>
      </header>
      <div className="section-menus">
        <section className="section-menu-content">
          <div data-aos="fade-right" className="card-img-aboutus-burger">
            <h1 className="heading-detail-menu">Burger</h1>
          </div>
          <div className="container-detail-menu">
            <div className="column-detail">
              {menuBurger.map((menuBurger) => {
                const base64Image = arrayBufferToBase64(menuBurger.image.data);
                const imageURL = `data:${menuBurger.image.contentType};base64,${base64Image}`;
                return (
                  <div
                    data-aos="fade-left"
                    key={menuBurger.id}
                    className="container-detail-menus"
                  >
                    <div data-aos="zoom-in" className="row-detail-menus">
                      <div className="image-menus">
                        <img src={imageURL} alt={menuBurger.name}></img>
                      </div>
                      <div className="column-menus">
                        <h4>{menuBurger.name}</h4>
                        <p>{menuBurger.deskripsi}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section-menu-content">
          <div className="container-detail-menu">
            <div className="column-detail">
              {menuCoffee.map((menuCoffee) => {
                const base64Image = arrayBufferToBase64(menuCoffee.image.data);
                const imageURL = `data:${menuCoffee.image.contentType};base64,${base64Image}`;
                return (
                  <div
                    data-aos="fade-right"
                    key={menuCoffee.id}
                    className="container-detail-menus"
                  >
                    <div data-aos="zoom-in" className="row-detail-menus">
                      <div className="image-menus">
                        <img src={imageURL} alt={menuCoffee.name}></img>
                      </div>
                      <div className="column-menus">
                        <h4>{menuCoffee.name}</h4>
                        <p>{menuCoffee.deskripsi}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div data-aos="fade-left" className="card-img-aboutus-coffee">
            <h1 className="heading-detail-menu">Coffee</h1>
          </div>
        </section>
        <section className="section-menu-content">
          <div data-aos="fade-right" className="card-img-aboutus-MainCourse">
            <h1 className="heading-detail-menu">Main Course</h1>
          </div>
          <div className="container-detail-menu">
            <div className="column-detail">
              {menuMainCourse.map((menuMainCourse) => {
                const base64Image = arrayBufferToBase64(
                  menuMainCourse.image.data
                );
                const imageURL = `data:${menuMainCourse.image.contentType};base64,${base64Image}`;
                return (
                  <div
                    data-aos="fade-left"
                    key={menuMainCourse.id}
                    className="container-detail-menus"
                  >
                    <div data-aos="zoom-in" className="row-detail-menus">
                      <div className="image-menus">
                        <img src={imageURL} alt={menuMainCourse.name}></img>
                      </div>
                      <div className="column-menus">
                        <h4>{menuMainCourse.name}</h4>
                        <p>{menuMainCourse.deskripsi}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section className="section-menu-content">
          <div className="container-detail-menu">
            <div className="column-detail">
              {menuDessert.map((menuDessert) => {
                const base64Image = arrayBufferToBase64(menuDessert.image.data);
                const imageURL = `data:${menuDessert.image.contentType};base64,${base64Image}`;
                return (
                  <div
                    data-aos="fade-right"
                    key={menuDessert.id}
                    className="container-detail-menus"
                  >
                    <div data-aos="zoom-in" className="row-detail-menus">
                      <div className="image-menus">
                        <img src={imageURL} alt={menuDessert.name}></img>
                      </div>
                      <div className="column-menus">
                        <h4>{menuDessert.name}</h4>
                        <p>{menuDessert.deskripsi}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div data-aos="fade-left" className="card-img-aboutus-desert">
            <h1 className="heading-detail-menu">Dessert</h1>
          </div>
        </section>
      </div>
    </div>
  );
}
export default FullMenus;
