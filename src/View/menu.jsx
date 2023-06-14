import React from 'react';
import '../css/Menu.css';
// import img from '../assets/img/picture.png';
import IconDinner from '../assets/icons/dinner.png';
import IconDessert from '../assets/icons/dessert.png';
import IconLunch from '../assets/icons/lunch.png';
import IconWine from '../assets/icons/wine.png';

import lunch1 from '../assets/img/burger1.jpg';
import lunch2 from '../assets/img/burger2.jpg';
import lunch3 from '../assets/img/burger3.jpg';
import lunch4 from '../assets/img/burger4.jpg';

import dessert1 from '../assets/img/dessert1.jpg';
import dessert2 from '../assets/img/dessert2.jpg';
import dessert3 from '../assets/img/dessert3.jpg';
import dessert4 from '../assets/img/dessert4.jpg';

import {useEffect } from 'react';
import $ from 'jquery'

import AOS from "aos";
import "aos/dist/aos.css";

function Page1() {
  useEffect(() => {
  
      $(".menu").click(function(){
       const value = $(this).attr("data-filter")
       if(value === 'all'){
         $(".itemBox").hide('1000');
       }else{
         $(".itemBox").not('.'+value).hide('1000');
         $(".itemBox").filter('.'+value).show('1000');
       }
       
      })

      AOS.init();
      AOS.refresh();
  }, []);

    return (
      <div className="container-page1">
        <div className="container-menu">
            <div className="container-title-menu">
                <h4 data-aos="fade-left">Menu</h4>
                <h3 data-aos="fade-left" >Delicious Food</h3>
                <p data-aos="fade-left">Part of the secret of success in life is to eat what you like and let the food fight it out inside.</p>
                <span>read more...</span>
            </div>
            <div className="container-card-menu">
                <div className="card" data-aos="fade-left">
                  <div class="itemBox dessert" alt="menu">
                  <img src={dessert1} alt="menu dessert" />
                  </div>
                  <div class="itemBox lunch" alt="menu">
                  <img src={lunch1} alt="menu dessert" />
                  </div>
                  <div className="container-art-menu">
                        <h5>Burger 1</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti eum nemo quam dolores vel, atque dignissimos nostrum quae! Eligendi</p>
                  </div>
                  </div>
                <div className="card"data-aos="fade-left">
                  <div class="itemBox dessert" alt="menu">
                  <img src={dessert2} alt="menu dessert" />
                  </div>
                  <div class="itemBox lunch" alt="menu">
                  <img src={lunch2} alt="menu dessert" />
                  </div>
                  <div className="container-art-menu">
                        <h5>Burger 2</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti eum nemo quam dolores vel, atque dignissimos nostrum quae! Eligendi</p>
                  </div>
                  </div>
              
                <div className="card"data-aos="fade-left">
                  <div class="itemBox dessert" alt="menu">
                    <img src={dessert3} alt="" /></div>
                  <div class="itemBox lunch" alt="menu">
                    <img src={lunch3} alt="" /></div>
                  <div className="container-art-menu">
                        <h5>Burger 3</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti eum nemo quam dolores vel, atque dignissimos nostrum quae! Eligendi</p>
                  </div>
                  </div>
                <div className="card"data-aos="fade-left">
                  <div class=" itemBox dessert" alt="menu">
                    <img src={dessert4} alt="" /></div>
                  <div class=" itemBox lunch" alt="menu">
                    <img src={lunch4} alt="" /></div>
                  <div className="container-art-menu">
                        <h5>Burger 4</h5>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi corrupti eum nemo quam dolores vel, atque dignissimos nostrum quae! Eligendi</p>
                  </div>
                  </div>
                
               
            <div className="container-list-menu">
              <div className=" menu" data-filter="dinner">
                <img src={IconDinner} alt="" />
                <div className="title-list">Dinner</div>
              </div>
              <div className="menu"data-filter="lunch">
                <img src={IconLunch} alt="" />
                <div className="title-list">Lunch</div>
              </div>
              <div className="menu" data-filter="dessert">
                <img src={IconDessert} alt="" />
                <div className="title-list">Dessert</div>
              </div>
              <div className="menu" data-filter="wine">
                <img src={IconWine} alt="" />
                <div className="title-list">Wine</div>
              </div>
            </div>
            </div>
        </div>
        
          </div>
    );
  }
  export default Page1