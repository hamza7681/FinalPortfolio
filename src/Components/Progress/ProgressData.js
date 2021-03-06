import React from "react";
import { Progress } from "antd";
import "antd/dist/antd.css";
import './progress.css'

export default function ProgressData() {
  return (
    <>
      <span className='progressbar_content'>HTML/CSS</span>
      <Progress
        strokeColor={{
          "0%": "#3e0059",
          "100%": "#116fd4",
        }}
        strokeWidth={15}
        percent={90}
        status="active"
        trailColor='#a6a7ad'
        showInfo={false}
      />
      <span className='progressbar_content'>Bootstrap</span>
      <Progress
        strokeColor={{
          "0%": "#3e0059",
          "100%": "#116fd4",
        }}
        percent={85}
        strokeWidth={15}
        status="active"
        trailColor='#a6a7ad'
        showInfo={false}
      />
      <span className='progressbar_content'>JavaScript (ES6, ES7) </span>
      <Progress
       strokeColor={{
        "0%": "#3e0059",
        "100%": "#116fd4",
      }}
        percent={75}
        strokeWidth={15}
        status="active"
        trailColor='#a6a7ad'
        showInfo={false}
      />
      <span className='progressbar_content'>ReactJs</span>
      <Progress
        strokeColor={{
          "0%": "#3e0059",
          "100%": "#116fd4",
        }}
        percent={75}
        strokeWidth={15}
        status="active"
        trailColor='#a6a7ad'
        showInfo={false}
      />
      <span className='progressbar_content'>NextJs</span>
      <Progress
        strokeColor={{
          "0%": "#3e0059",
          "100%": "#116fd4",
        }}
        percent={70}
        strokeWidth={15}
        status="active"
        trailColor='#a6a7ad'
        showInfo={false}
      />
      <span className='progressbar_content'>
        Material Ui & Ant Design Frameworks
      </span>
      <Progress
       strokeColor={{
        "0%": "#3e0059",
        "100%": "#116fd4",
      }}
        percent={70}
        strokeWidth={15}
        status="active"
        trailColor='#a6a7ad'
        showInfo={false}
      />
    </>
  );
}
