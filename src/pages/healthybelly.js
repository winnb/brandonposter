import React from "react";
import "../styles/projects.scss";

import Orange from "../media/orange.jpg";
import Slideshow from "../slideshows/slideshow-healthy+belly";

class HealthyBelly extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Orange} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* Healthy Belly Project */}
            <div className="project-panel">
            <div className="project-title">Healthy Belly: Pregnancy food scanner</div>
            <div className="tag-list">
                <a href="/projects" className="tag">Agile</a>
                <a href="/projects" className="tag">Android</a>
                <a href="/projects" className="tag">Database</a>
                <a href="/projects" className="tag">Firebase</a>
                <a href="/projects" className="tag">Git</a>
                <a href="/projects" className="tag">Gradle</a>
                <a href="/projects" className="tag">Java</a>
                <a href="/projects" className="tag">Kotlin</a>
                <a href="/projects" className="tag">NoSQL</a>
                <a href="/projects" className="tag">SCRUM</a>
            </div>
            <div  className="subpanel" id="healthy+belly">
                <Slideshow/>
                <div id="healthybelly-box-desc" className="project-desc">I developed an Android app which scans food bar codes and tells users whether the food is 
                safe for consumption by pregnant women. The application allows users to set their allergens on their profile and the scanner will alert the user if a 
                food item is unsafe for them. Google Vision API is used to detect barcodes in images and then they are referenced with an online database.
                </div>
                {/* <a href="" className="github-button">See Github</a> */}
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default HealthyBelly;
