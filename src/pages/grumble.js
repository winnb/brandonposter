import React from "react";
import "../styles/projects.scss";

import Tan from "../media/tan.jpg";
import Slideshow from "../slideshows/slideshow-grumble";

class Divide extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Tan} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* Grumble Project */}
            <div className="project-panel">
            <div className="project-title">Grumble: Spring Boot food microservices</div>
            <div className="tag-list">
                <a href="/projects" className="long-tag">Distributed Networks</a>
                <a href="/projects" className="tag">Git</a>
                <a href="/projects" className="tag">Java</a>
                <a href="/projects" className="tag">Maven</a>
                <a href="/projects" className="long-tag">Microservices</a>
                <a href="/projects" className="tag">MVC</a>
                <a href="/projects" className="tag">Postman</a>
                <a href="/projects" className="long-tag">PowerShell</a>
                <a href="/projects" className="long-tag">SpringBoot</a>
                <a href="/projects" className="long-tag">REST API</a>
                <a href="/projects" className="long-tag">Web Service</a>
            </div>
            <div  className="subpanel" id="grumble">
                <Slideshow/>
                <div id="grumble-box-desc" className="project-desc">I created a Java web application using Spring Boot which recommends meals using 
                four microservices. They maintain a catalog of meals, hold info on each food item, contain ratings for each meal, and discover new 
                clients. Each microservice runs on its own thread. They can be deployed across multiple different servers. Multiple instances of each 
                service can be deployed as needed.
                </div>
                <a href="https://github.com/winnb/grumble" className="github-button">See Github</a>
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default Divide;
