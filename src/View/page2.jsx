import React from 'react';
import '../css/page2.css';
import G1 from '../assets/img/G1.jpg';
import G2 from '../assets/img/G2.jpg';
import G3 from '../assets/img/G3.jpg';
import G4 from '../assets/img/G4.jpg';
import G5 from '../assets/img/G5.jpg';
// import '../Controller/ProfileSlider';


function Page2() {

    return(
    <div className="container-page2">
        <div className='column-page2'>
            <div className="row-1">
                <div className="background1Page2"></div>
                <div className="opacityBg"></div>
                <div className="container-title-page2">
                    <h6 className='text1'>GALLERY</h6>
                    <h5 className='text2'>The Devine Feel of Taste</h5>
                    <h4 className='text3'>A person with taste is merely one who recognize the greatest beauty in the simplest things.</h4>
                </div>
                <div className="container-Gallery animate__animated animate__slideInLeft ">
                    <div className="card2 animate__animated animate__slideInLeft animate__delay-5s"><img src={G1} alt="img1"></img></div>
                    <div className="card2 animate__animated animate__slideInLeft animate__delay-4s"><img src={G2} alt="img2"></img></div>
                    <div className="card2 animate__animated animate__slideInLeft animate__delay-3s"><img src={G3} alt="img3"></img></div>
                    <div className="card2 animate__animated animate__slideInLeft animate__delay-2s"><img src={G4} alt="img4"></img></div>                
                    <div className="card2 animate__animated animate__slideInLeft animate__delay-1s"><img src={G5} alt="img4"></img></div>                
                </div>
            </div>

        <div className="row-2">
        <div class="wrapper">
            <ul class="carousel">
                <li class="card">
                <div class="img"><img src={G1} alt="img" draggable="false"></img></div>
                <h2>Farrel Shahizidan A</h2>
                <span>Sales Manager</span>
                </li>
                <li class="card">
                <div class="img"><img src={G1} alt="img" draggable="false"></img></div>
                <h2>Muhammad Andika N</h2>
                <span>Web Developer</span>
                </li>
                <li class="card">
                <div class="img"><img src={G1} alt="img" draggable="false"></img></div>
                <h2>Fauzi Ilham D</h2>
                <span>Online Teacher</span>
                </li>
                <li class="card">
                <div class="img"><img src={G1} alt="img" draggable="false"></img></div>
                <h2>Michael Mardiansyah</h2>
                <span>Freelancer</span>
                </li>
                <li class="card">
                <div class="img"><img src={G1} alt="img" draggable="false"></img></div>
                <h2>Fajar Kurniawan</h2>
                <span>Bank Manager</span>
                </li>
                <li class="card">
                <div class="img"><img src={G1} alt="img" draggable="false"></img></div>
                    <h2>Tifani Dea S</h2>
                    <span>App Designer</span>
                </li>
                <li class="card">
                <div class="img"><img src={G1} alt="img" draggable="false"></img></div>
                    <h2>Nadhira Aurell P</h2>
                    <span>App Designer</span>
                </li>
            </ul>
            </div>
                
        </div>
        </div>

        </div>
    );
}
export default Page2;