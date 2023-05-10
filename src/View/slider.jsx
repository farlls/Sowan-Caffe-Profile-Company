import React from 'react';
import '../css/Slider.css';
import background  from '../assets/img/Background Cafe.jpg';

function Slider() {

    return(
        <div className="container-slider">
            <img className="background" src={background} alt="Background" />

        </div>
    );
}
export default Slider;