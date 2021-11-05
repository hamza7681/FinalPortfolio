import React, { useEffect } from "react";
import './work.css'
import Aos from "aos";
import "aos/dist/aos.css";
import web1 from "../../Assets/web1.png";
import web2 from "../../Assets/web2.png";
import web3 from "../../Assets/web3.png";
import web4 from "../../Assets/web4.png";


const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className='container-fluid pt-5 pb-5 main_work'>
        <div className='contaienr text-center work_heading'>
          <span className='work'>Work & Experience</span>
        </div>
        <div
          className='container work_main_div'
          
        >
          <p className='work_para'>
            I am a Web Developer specializing in front end development.
            Experienced with Front End development formalities. Well-versed in
            numerous programming languages including HTML5, CSS, JavaScript,
            Bootstrap and ReactJS. I have also worked in
            <b> Firebase v9 (Updated Version with New Syntax) </b> and little
            bit work with <b> Redux</b>. <br /> Following are my Works and click
            on Photos to visit my Demo Web Apps...
          </p>
          <br />
          <ul className='work_list'>
            <li>
              <span className='Apps'> OLX Web App Clone </span> using
              ReactJs and Firebase v9 with <b> Firestore and Authentication </b>
              .
            </li>
            <li>
              <span className='Apps'> Todo Web App </span> using ReactJs
              and Firebase v9 with <b> Firestore and Authentication</b>.
            </li>
            <li>
              Developed Website for
              <span className='Apps'>
                Developer Student Clubs - University of Agriculture Faisalabad
                (DSC-UAF)
              </span>
              powered by Google Developers in <b>ReactJs</b>.
            </li>
            <li>
              Developed
              <span className='Apps'>Website Clone of NTU-FSD </span>
              in ReactJs in <b>Niofox Software House</b> - NTU Faisalabad
            </li>
            <li>
              Work on given templates as a fresh candidate in
              <b> Step-Up IT Solutions Faisalabad</b> as a Front End Developer
              Internee.
            </li>
            <li>
              Work as a Front End Internee in <b> MicroStarX Software House </b>
              and work on given templates
            </li>
          </ul>
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-md-4 pt-1 pb-1" data-aos="zoom-in">
                <img src={web1} className='web_pic'/>
                
                  <a href="https://dsc-uaf-react-app.herokuapp.com" className='work_link' target="_blank">
                    Click Here
                  </a>
                
              </div>
              <div className="col-md-4 pt-1 pb-1" data-aos="zoom-in">
                <img src={web2} className='web_pic'/>
                
                  <a href="https://dsc-uaf-react-app.herokuapp.com" className='work_link' target="_blank">
                    Click Here
                  </a>
                
              </div>
              <div className="col-md-4 pt-1 pb-1" data-aos="zoom-in">
                <img src={web3} className='web_pic'/>
              
                  <a href="https://dsc-uaf-react-app.herokuapp.com" className='work_link' target="_blank">
                    Click Here
                  </a>
              
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 pt-1 pb-1" data-aos="zoom-in">
                
                <img src={web4} className='web_pic'/>
                
                  <a  href="https://hamzasiddique.herokuapp.com" className='work_link' target="_blank">
                    Click Here
                  </a>
                
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
        
      </div>
     
    </>
  );
};

export default Work;
