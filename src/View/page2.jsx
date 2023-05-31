import React from 'react';
import '../css/page1.css';
import img from '../assets/img/picture.png';
function Page2() {
    return (
      <div className="container-page1">
        <div className="container-menu">
            <div className="container-title-menu">
                <h4>Menu</h4>
                <h3>Delicious Food</h3>
                <p>Part of the secret of success in life is to eat what you like and let the food fight it out inside.</p>
                <p>read more...</p>
            </div>
            <div className="container-card-menu">
                <div className="card"><img src={img}></img></div>
                <div className="card"><img src={img}></img></div>
                <div className="card"><img src={img}></img></div>
            </div>
        </div>

            <div className="container-list-menu "></div>

          </div>
    );
  }
  export default Page2