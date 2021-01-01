import React from "react";
import "../styles/about.scss";

import Banner from "../media/lb-banner.jpg";
import Brandon from "../media/forest-brandon.jpg";
import LinkedIn from "../media/linkedin.png";

class AboutMe extends React.Component {
  render() {
    return (
      <div id="about-me">
        <a href="https://www.linkedin.com/in/brandon-winn/">
            <img id="linkedin" src={LinkedIn} alt="LinkedIn profile link"/>
        </a>
        <div id="about-box">
            <img id="banner" src={Banner} alt="LinkedIn banner" />
            <img id="brandon" src={Brandon} alt="LinkedIn profile" />
            <div id="bio-text">
                <div style={{fontSize: "2vw"}}>Brandon Winn</div>
                <div style={{fontSize: "1vw"}}>Aspiring Software Engineer | Fullstack Developer</div>
                <div style={{fontSize: "1vw", color: "rgb(210,210,210)"}}>Long Beach, California, United States</div>
                <div style={{fontSize: "1.5vw", marginTop: "1vw", marginLeft: "-25%"}}>Summary</div>
                <div style={{fontSize: "1vw", marginTop: "1vw", marginLeft: "-25%", marginRight: "20%"}}>I'm an aspiring Software Engineer with a background in web
                applications. I have experience building front-end designs, as well as
                working with internal and third-party APIs. My goal is to help people
                build solutions for tomorrow while working alongside great people!</div>
                <div style={{fontSize: "1.5vw", marginTop: "1vw", marginLeft: "-20%"}}>—</div>
                <div style={{fontSize: "1.5vw", marginTop: "1vw", marginLeft: "-25%"}}>Education</div>
                <div style={{fontSize: "1vw", marginTop: "1vw", marginLeft: "-25%"}}>California State University, Long Beach</div>
                <div style={{fontSize: "1vw", marginTop: "1vw", marginLeft: "-25%"}}>Bachelor's degree, Computer Science · (2016 - 2020)</div>
            </div>
        </div>
        <a id="scroll-hint" href="/#color-blocks">Scroll down to see my projects ▼</a>
      </div>
    );
  };
}

export default AboutMe;
