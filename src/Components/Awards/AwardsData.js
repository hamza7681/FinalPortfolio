import React from "react";
import './awards.css';
import cer1 from "../../Assets/cer1.png";
import cer2 from "../../Assets/cer2.png";
import cer3 from "../../Assets/cer3.png";
import cer4 from "../../Assets/cer4.png";
import cer5 from "../../Assets/cer5.jpg";
import { Carousel } from "antd";


function AwardsData() {
  return (
    <>
      <div
        className="container-fluid pb-5"
        style={{ backgroundColor: "rgb(238, 223, 223)" }}
      >
        <div className='container text-center awards_wrapper'>
          <span className='awards'>Awards & Certificates</span>
        </div>
        <div className="container text-center pb-5">
          <Carousel autoplay={true} effect="fade" dotPosition="right" dots={false}>
            <div>
              <img src={cer1} className='cer1' />
            </div>
            <div>
            <img src={cer2} className='cer1' />

            </div>
            <div>
            <img src={cer3} className='cer1' />

            </div>
            <div>
            <img src={cer4} className='cer1' />

            </div>
            <div>
            <img src={cer5} className='cer1' />

            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default AwardsData;
