import React from 'react';
import '../css/Slider.css';
import bg1 from '../assets/img/bg1.jpg';
import bg2 from '../assets/img/bg2.jpg';
import bg3 from '../assets/img/bg3.jpg';
import bg4 from '../assets/img/bg4.jpg';



function Slider() {
    return(
        <div className="container-slider">
            <div className="containerBackground">
                <div className="wrapper">
                <img src={bg1} alt='bg1'/>
                <img src={bg2} alt='bg2'/>
                <img src={bg3} alt='bg3'/>
                <img src={bg4} alt='bg4'/>
                
                </div>
            </div>
            <div className="backgroundOpacity"></div>
            <div className="subContainer">
                    <div className="containerTitle">
                        <h2>Welcome to Sowan Coffee</h2>
                        <h1>UP TO 50% OFFER</h1>
                        <div className="containerText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis itaque, corporis laudantium fugiat minus vitae commodi.</div>
                    </div>
            </div>

        </div>
    );
}
export default Slider;