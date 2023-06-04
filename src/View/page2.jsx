import React from 'react';
import '../css/page2.css';
import G1 from '../assets/img/G1.jpg';
import G2 from '../assets/img/G2.jpg';
import G3 from '../assets/img/G3.jpg';
import G4 from '../assets/img/G4.jpg';
import G5 from '../assets/img/G5.jpg';


function Page2() {

    return(
        <div className="container-page2">
            <div className="backgroundPage2"></div>
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
    );
}
export default Page2;