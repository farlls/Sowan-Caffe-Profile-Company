import React, { useState } from 'react';
import menu from '../assets/icons/Menu.svg';
import close from '../assets/icons/close.svg';
import '../css/Navigation.css';
const BtnMenu = () => {
const [icon, setIcon] = useState(menu);
  
const Btnhamburger = () => {
  const navbar = document.querySelector('.container-navigation-menu');
  navbar.classList.toggle('show');
      if (icon === menu) {
        setIcon(close)
      } else {
        setIcon(menu)
    };
    
  };
  return(
    <div onClick={Btnhamburger} id="hamburger">
    <img alt='Icon Hamburger' src={icon}></img>
    </div>
  );

};

export default BtnMenu;