import React from "react";
import "../styles/projects.scss";

import Chalk from "../media/chalk.jpg";
import Slideshow from "../slideshows/slideshow-restaurant";

class Restaurateur extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Chalk} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* Restaurant Management Project */}
            <div className="project-panel">
            <div className="project-title-black">Restaurateur: SQL database for businesses</div>
            <div className="tag-list">
                <a href="/projects" className="tag">SQL</a>
                <a href="/projects" className="tag">MySQL</a>
                <a href="/projects" className="tag">Database</a>
                <a href="/projects" className="tag">Data Integrity</a>
            </div>
            <div  className="subpanel-left" id="Restaurateur">
                {/* <img id="github-img" src={ConfidenceGit} alt="Github preview"/> */}
                {/* <div id="scroll-img"><img id="project-img-lg" src={SQL2} alt="project image"/></div> */}
                <Slideshow/>
                <div id="confidence-box-desc" className="project-desc">I created a SQL database for a restaurant to manage their in-person and online orders, menu items, rewards program, 
                corporate clients, and table logistics. I designed the UML diagram which shows the dependencies and integrity contraints of the tables. I wrote thousands of 
                CREATE and INSERT statements to add and populate tables in the database.
                </div>
                <a href="https://github.com/winnb/restaurantmanager" className="github-button">See Github</a>
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default Restaurateur;
