import React from "react";
import "../styles/projects.scss";

import Liver from "../media/liver.jpg";

import Slideshow from "../slideshows/slideshow-ddos";

class DDoS extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Liver} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* DDoS Project */}
            <div className="project-panel">
            <div className="project-title">Website Killer: Denial of service cyberattack</div>
            <div className="tag-list">
                <a href="/projects" className="long-tag">Cyber Security</a>
                <a href="/projects" className="long-tag">Data Integrity</a>
                <a href="/projects" className="long-tag">Denial of Service</a>
                <a href="/projects" className="long-tag">Distributed Networks</a>
                <a href="/projects" className="long-tag">Firebase</a>
                <a href="/projects" className="long-tag">Java</a>
                <a href="/projects" className="long-tag">Virtual Machine</a>
            </div>
            <div className="subpanel-left" id="DDoS">
                <Slideshow/>
                <div id="confidence-box-desc" className="project-desc">
                I designed, trained, and deployed a deep neural network (DNN) machine learning model which predicts a newborn baby's weight given 
                factors like mother's age, weeks of gestation, the presence of twins, and baby's sex. I created this tool as part of a certification 
                offered by Google. This model can be used to assist medical professionals in estimating baby weight with a data-backed solution.
                </div>
                {/* <a href="" className="github-button">See Github</a> */}
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default DDoS;
