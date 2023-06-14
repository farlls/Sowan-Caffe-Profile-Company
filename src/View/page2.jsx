import React from 'react';
import '../css/page2.css';
import {FaGithub} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import G1 from '../assets/img/G1.jpg';
import G2 from '../assets/img/G2.jpg';
import G3 from '../assets/img/G3.jpg';
import G4 from '../assets/img/G4.jpg';
import G5 from '../assets/img/G5.jpg';
import FT1 from '../assets/img/FT1.jpg';
import FT2 from '../assets/img/FT2.jpg';
import FT3 from '../assets/img/FT3.JPG';
import FT4 from '../assets/img/FT4.jpg';
import FT5 from '../assets/img/FT5.jpg';
import FT6 from '../assets/img/FT6.jpg';
import FT7 from '../assets/img/FT7.jpg';



function Page2() {
    // const handleClick = (url) => {
    //     window.location.href = url;
    //      };
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
                <div className="container-Gallery">
                    <div className="card2"><img src={G1} alt="img1"></img></div>
                    <div className="card2"><img src={G2} alt="img2"></img></div>
                    <div className="card2"><img src={G3} alt="img3"></img></div>
                    <div className="card2"><img src={G4} alt="img4"></img></div>                
                    <div className="card2"><img src={G5} alt="img4"></img></div>                
                 </div>
        </div>

        <div className="row-2">
        <div className="background2Page2"></div>
        <h3 className='text5'>Our Team</h3>
        <div class="wrapper">
            <ul class="carousel">
                <li class="card3">
                    <div class="img"><img src={FT1} alt="img" draggable="false"></img></div>
                    <h2 className='text4'>Farrel Shahizidan</h2>
                    <span>Founder</span>
                    <div className='icons'>
                        <a href='https://github.com/farlls'><FaGithub/></a>
                        <a href='https://www.youtube.com/@farrelshahizidan8763'><FaYoutube/></a>
                        <a href='https://www.instagram.com/_farlls/'><FaInstagram/></a>
                        {/* <a href="#" onClick={() => handleClick('https:github.com')}><FaGithub/></a>
                        <a href="#" onClick={() => handleClick('https:youtube.com')}><FaYoutube/></a>
                        <a href="#" onClick={() => handleClick('https:instagram.com')}><FaInstagram/></a> */}
                    </div>
                </li>
                <li class="card3">
                    <div class="img"><img src={FT2} alt="img" draggable="false"></img></div>
                    <h2 className='text4'>Muhammad Andika</h2>
                    <span> CoFounder</span>
                    <div className='icons'>
                        <a href='https://github.com/AndikaNugh-4330'><FaGithub/></a>
                        <a href='https://youtube.com/@muhammadandikanugroho7313'><FaYoutube/></a>
                        <a href='https://www.instagram.com/andika_nugh'><FaInstagram/></a>
                        {/* <a href="#" onClick={() => handleClick('https:github.com')}><FaGithub/></a>
                        <a href="#" onClick={() => handleClick('https:youtube.com')}><FaYoutube/></a>
                        <a href="#" onClick={() => handleClick('https:instagram.com')}><FaInstagram/></a> */}
                    </div>
                </li>
                <li class="card3">
                    <div class="img"><img src={FT3} alt="img" draggable="false"></img></div>
                    <h2 className='text4'>Fajar Kurniawan</h2>
                    <span>Chief Executive Officer</span>
                    <div className='icons'>
                        <a href='https://github.com/fajarkur219'><FaGithub/></a>
                        <a href='https://youtube.com/@fajarkurniawan3436'><FaYoutube/></a>
                        <a href='https://www.instagram.com/j4ars_'><FaInstagram/></a>
                        {/* <a href="#" onClick={() => handleClick('https:github.com')}><FaGithub/></a>
                        <a href="#" onClick={() => handleClick('https:youtube.com')}><FaYoutube/></a>
                        <a href="#" onClick={() => handleClick('https:instagram.com')}><FaInstagram/></a> */}
                    </div>
                </li>
                <li class="card3">
                    <div class="img"><img src={FT4} alt="img" draggable="false"></img></div>
                    <h2 className='text4'>Fauzi Ilham</h2>
                    <span>Manager</span>
                    <div className='icons'>
                        <a href='https://github.com/Ilhamfzd'><FaGithub/></a>
                        <a href='https://www.youtube.com/@ilhamfauzi4050'><FaYoutube/></a>
                        <a href='https://www.instagram.com/ilhamfzd/'><FaInstagram/></a>
                        {/* <a href="#" onClick={() => handleClick('https:github.com')}><FaGithub/></a>
                        <a href="#" onClick={() => handleClick('https:youtube.com')}><FaYoutube/></a>
                        <a href="#" onClick={() => handleClick('https:instagram.com')}><FaInstagram/></a> */}
                    </div>
                </li>
                <li class="card3">
                    <div class="img"><img src={FT5} alt="img" draggable="false"></img></div>
                    <h2 className='text4'>Michael Mardiansyah</h2>
                    <span>Head Cook</span>
                    <div className='icons'>
                        <a href='https://github.com/RSPFINAL'><FaGithub/></a>
                        <a href='https://www.youtube.com/@michaelmardiansyah'><FaYoutube/></a>
                        <a href='https://www.instagram.com/michael.mardiansyah'><FaInstagram/></a>
                        {/* <a href="#" onClick={() => handleClick('https:github.com')}><FaGithub/></a>
                        <a href="#" onClick={() => handleClick('https:youtube.com')}><FaYoutube/></a>
                        <a href="#" onClick={() => handleClick('https:instagram.com')}><FaInstagram/></a> */}
                    </div>
                </li>
                <li class="card3">
                    <div class="img"><img src={FT6} alt="img" draggable="false"></img></div>
                    <h2 className='text4'>Tifani Dea</h2>
                    <span>Fast Food Cook</span>
                    <div className='icons'>
                        <a href='https://github.com/TifaniDea'><FaGithub/></a>
                        <a href='https://www.youtube.com/@tifanideashafira9673'><FaYoutube/></a>
                        <a href='https://www.instagram.com/tifanids_'><FaInstagram/></a>
                        {/* <a href="#" onClick={() => handleClick('https:github.com')}><FaGithub/></a>
                        <a href="#" onClick={() => handleClick('https:youtube.com')}><FaYoutube/></a>
                        <a href="#" onClick={() => handleClick('https:instagram.com')}><FaInstagram/></a> */}
                    </div>
                </li>
                <li class="card3">
                    <div class="img"><img src={FT7} alt="img" draggable="false"></img></div>
                    <h2 className='text4'>Nadhira Aurell</h2>
                    <span>Cook Helper</span>
                    <div className='icons'>
                        <a href='https://github.com/nadhiraaurell'><FaGithub/></a>
                        <a href='https://www.youtube.com/@nadhiraaurell2913'><FaYoutube/></a>
                        <a href='https://instagram.com/nadhiraapp_'><FaInstagram/></a>
                        {/* <a href="#" onClick={() => handleClick('https:github.com')}><FaGithub/></a>
                        <a href="#" onClick={() => handleClick('https:youtube.com')}><FaYoutube/></a>
                        <a href="#" onClick={() => handleClick('https:instagram.com')}><FaInstagram/></a> */}
                    </div>
                </li>
            </ul>
            </div>
                
        </div>
        </div>

        </div>
    );
}
export default Page2;