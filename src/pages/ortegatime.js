import React from "react";
import "../styles/projects.scss";

import Waves from "../media/waves.jpg";
import Slideshow from "../slideshows/slideshow-ortega+time";

class OrtegaTime extends React.Component {
  
  render() {
    return (
      <div>
        <img className="project-background" src={Waves} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* React.js Ortega Time Project */}
            <div className="project-panel">
            <div className="project-title">Ortega Time: An educational tool</div>
            <div className="tag-list">
                <a href="/projects" className="tag">React.js</a>
                <a href="/projects" className="tag">Web Service</a>
                <a href="/projects" className="tag">JavaScript</a>
                <a href="/projects" className="tag">HTML</a>
                <a href="/projects" className="tag">CSS</a>
                <a href="/projects" className="tag">Firebase</a>
                <a href="/projects" className="tag">Git</a>
                <a href="/projects" className="tag">PowerShell</a>
                <a href="/projects" className="tag">Web Design</a>
            </div>
            <div  className="subpanel" id="ortega-time">
                <Slideshow/>
                <div id="ortega-time-box-desc" className="project-desc">I created a web service which shows students, teachers, and parents which class period is currently 
                in session at Santa Ana High School. The period lengths change according to the day of the week and accounts for schedule adjustments during holidays 
                and finals. The website also includes Zoom links to class meetings and connects to the main school website.
                </div>
                <a href="https://github.com/winnb/ortegatime" className="github-button">See Github</a>
            </div>
            </div>
        </div>
      </div>
    );
  };
}

export default OrtegaTime;
