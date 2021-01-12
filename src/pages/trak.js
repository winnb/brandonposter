import React from "react";
import "../styles/projects.scss";

import Green from "../media/green.jpg";
import Slideshow from "../slideshows/slideshow-trak";

class Trak extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Green} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

          {/* Trak Project */}
          <div className="project-panel">
            <div className="project-title">Trak: Enterprise inventory management</div>
            <div className="tag-list">
                <a href="/projects" className="tag">Agile</a>
                <a href="/projects" className="tag">Azure</a>
                <a href="/projects" className="tag">CSS</a>
                <a href="/projects" className="tag">Git</a>
                <a href="/projects" className="tag">HTML</a>
                <a href="/projects" className="tag">JavaScript</a>
                <a href="/projects" className="tag">NoSQL</a>
                <a href="/projects" className="tag">PowerShell</a>
                <a href="/projects" className="tag">React.js</a>
                <a href="/projects" className="tag">SCRUM</a>
                <a href="/projects" className="tag">Web Design</a>
                <a href="/projects" className="tag">Web Service</a>
            </div>
            <div className="subpanel" id="trak">
                <Slideshow/>
                <div id="trak-box-desc" className="project-desc">I created a web service to manage products, add products to shopping carts, 
                place orders, generate sales reports, and view sales metrics based on product statistics. The application is deployed per 
                enterprise and supports accounts for multiple users. I worked in a team of four according to Agile methodologies.
                </div>
                <a href="/" className="github-button" style={{opacity: "0%"}}></a>
            </div>
          </div>
   
        </div>
      </div>
    );
  };
}

export default Trak;
