import React from "react";
import "../styles/about.scss";

import Banner from "../media/lb-banner.jpg";
import Brandon from "../media/forest-brandon.jpg";
import LinkedIn from "../media/linkedin.png";

class AboutMe extends React.Component {

  render() {
    return (
      <div id="about-me">
        <a id="linkedin-holder" href="https://www.linkedin.com/in/brandon-winn/">
            <img id="linkedin" src={LinkedIn} alt="LinkedIn profile link"/>
        </a>
        <div id="about-box">
            <img id="banner" src={Banner} alt="LinkedIn banner" />
            <img id="brandon" src={Brandon} alt="LinkedIn profile" />
            <div id="bio-text">
                <div className="bio-line" style={{fontSize: "2vw"}}>Brandon Winn</div>
                <div className="bio-line" style={{fontSize: "1vw"}}>Software Engineer</div>
                <div className="bio-line" style={{fontSize: "1vw", color: "rgb(210,210,210)"}}>Long Beach, California, United States</div>
                <div className="bio-line" style={{fontSize: "1.5vw", marginTop: "1vw", marginLeft: "-25%"}}>Summary</div>
                <div className="bio-line" style={{fontSize: "1vw", marginTop: "1vw", marginLeft: "-25%", marginRight: "20%"}}>
                I'm a software engineer with experience designing architecture with reliability, low-latency, and horizontal-scalability in mind. 
                I write code primarily in Java and Python. I have a background in machine learning and web applications. Some of my best projects 
                include designing, deploying, and performance tuning an enterprise-scale Kafka messaging application and building a deep neural 
                network for use in the NICU. My goal is to help people build solutions for tomorrow!</div>
                <div className="bio-line" style={{fontSize: "1.5vw", marginTop: "0.3vw", marginLeft: "-20%"}}>—</div>
                <div className="bio-line" style={{fontSize: "1.5vw", marginTop: "0.3vw", marginLeft: "-25%"}}>Education</div>
                <div className="bio-line" style={{fontSize: "1vw", marginTop: "1vw", marginLeft: "-25%"}}>California State University, Long Beach</div>
                <div className="bio-line" style={{fontSize: "1vw", marginTop: "1vw", marginLeft: "-25%"}}>Bachelor's degree, Computer Science · (2016 - 2020)</div>
            </div>
        </div>
        <a id="scroll-hint" href="/#color-blocks">Scroll down to see my projects ▼</a>
      </div>
    );
  };
}

export default AboutMe;
