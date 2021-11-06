import React, { useEffect } from "react";
import ProgressData from "./ProgressData";
import './progress.css'
// import pic2 from "../../Assets/pic2.png";
import Aos from "aos";
import "aos/dist/aos.css";
import video from '../../Assets/video.mp4'


function ProgressMain() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-6" id='tilt1'></div>
          <div className="col-6" id='tilt2'></div>
        </div>
      </div>

      <div className='container-fluid main_div'>
        <div className="container text-center pt-5 pb-5">
          <span className='skills'>Skills</span>
        </div>
        <div className='container progress_container'>
          <div className="row">
            <div className="col-md-6">
              <ProgressData />
            </div>
            <div className="col-md-6 text-center">

            <video autoPlay muted className='pic2'>
  <source src={video} type="video/mp4"/>
  <source src={video} type="video/ogg"/>
  Your browser does not support HTML video.
</video>
              
{/*               
                <img
                  src={pic2}
                  alt="Hamza Siddique"
                  
                 className='pic2'
                  data-aos="fade-left"
                /> */}
             
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eedfdf"
          fill-opacity="1"
          d="M0,128L60,154.7C120,181,240,235,360,256C480,277,600,267,720,240C840,213,960,171,1080,154.7C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}

export default ProgressMain;
