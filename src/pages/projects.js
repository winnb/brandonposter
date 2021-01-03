import React from "react";
import "../styles/projects.scss";

import Purple from "../media/purple.jpg";
import Tags from "../components/tags";
import ProjectPreviews from "../components/projectpreviews";

class Projects extends React.Component {

  render() {
    return (
      <div id="projects-page">
        <img className="project-background" src={Purple} style={{height: "90vw"}}alt="Abstract background"/>
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a> 
        <div className="tag-title">Projects</div>
        <div className="tag-subtitle">Select the tags for projects you'd like to see</div>
        <Tags/>
        <div id="selected-tags"></div>
        <div id="projects-title">Matching Projects</div>
        <ProjectPreviews/>
      </div>
    );
  };
}

export default Projects;
