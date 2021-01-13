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
            <a href="/projects" className="tag">Bash</a>
                <a href="/projects" className="long-tag">Cyber Security</a>
                <a href="/projects" className="long-tag">Data Integrity</a>
                <a href="/projects" className="long-tag">Denial of Service</a>
                <a href="/projects" className="long-tag">Distributed Networks</a>
                <a href="/projects" className="long-tag">Firebase</a>
                <a href="/projects" className="long-tag">Java</a>
                <a href="/projects" className="long-tag">Virtual Machine</a>
            </div>
            <div className="subpanel" id="DDoS">
                <Slideshow/>
                <div id="confidence-box-desc" className="project-desc">
                I planned, tested, and deployed a DDoS attack which successfully crashed the target website. 
                I wrote a Bash script to endlessly ping a target as a proof of concept. I wrote a Java program 
                to which collected the IP address of potential victims. I used Low Orbit Ion Cannon in a VM 
                to send a huge volume of packets which overwhelmed the victim.
                </div>
                <a href="/" className="github-button" style={{opacity: "0%"}}></a>
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default DDoS;
