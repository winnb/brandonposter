import React from "react";
import "../styles/projects.scss";

import PoochImg from "../media/pooch-portrait.png";
import Waves from "../media/waves.jpg";

class Pooch extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Waves} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

          {/* React.js Pooch Project */}
          <div className="project-panel">
            <div className="project-title">Pooch: A pet care web service</div>
            <div className="tag-list">
                <div className="tag">React.js</div>
                <div className="tag">Web Service</div>
                <div className="tag">JavaScript</div>
                <div className="tag">HTML</div>
                <div className="tag">CSS</div>
                <div className="tag">Firebase</div>
                <div className="tag">Git</div>
                <div className="tag">Agile</div>
                <div className="tag">SCRUM</div>
                <div className="tag">Web Design</div>
            </div>
            <div href="https://github.com/winnb/pooch" className="subpanel-left" id="pooch">
                <img id="project-img-lg" src={PoochImg} alt="Github preview"/> 
                <div id="pooch-box-desc" className="project-desc">I led a team of six members in the design, production, and launch of a pet services web application with 31 user features using React.js. 
                    The development process followed industry-standard, Agile methodologies including all SCRUM ceremonies. I led daily SCRUM meetings 
                    where I assigned tasks to team members.
                </div>
            </div>
          </div>
   
        </div>
      </div>
    );
  };
}

export default Pooch;
