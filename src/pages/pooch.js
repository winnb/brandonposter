import React from "react";
import "../styles/projects.scss";

import Sapphire from "../media/sapphire.jpg";
import Slideshow from "../slideshows/slideshow-pooch";

class Pooch extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Sapphire} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

          {/* React.js Pooch Project */}
          <div className="project-panel">
            <div className="project-title-black">Pooch: A pet care web service</div>
            <div className="tag-list">
                <a href="/projects" className="tag">Agile</a>
                <a href="/projects" className="tag">CSS</a>
                <a href="/projects" className="tag">Firebase</a>
                <a href="/projects" className="tag">Git</a>
                <a href="/projects" className="tag">HTML</a>
                <a href="/projects" className="tag">JavaScript</a>
                <a href="/projects" className="tag">PowerShell</a>
                <a href="/projects" className="tag">React.js</a>
                <a href="/projects" className="tag">SCRUM</a>
                <a href="/projects" className="tag">Web Design</a>
                <a href="/projects" className="tag">Web Service</a>
            </div>
            <div href="https://github.com/winnb/pooch" className="subpanel" id="pooch">
                {/* <img id="project-img-lg" src={PoochImg} alt="Github preview"/>  */}
                <Slideshow/>
                <div id="pooch-box-desc" className="project-desc">I led a team of six members in the design, production, and launch of a pet services web application with 31 user features using React.js. 
                    The development process followed industry-standard, Agile methodologies including all SCRUM ceremonies. I led daily SCRUM meetings 
                    where I assigned tasks to team members.
                </div>
                <a href="https://github.com/winnb/pooch" className="github-button">See Github</a>
            </div>
          </div>
   
        </div>
      </div>
    );
  };
}

export default Pooch;
