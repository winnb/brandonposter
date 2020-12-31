import React from "react";
import "../styles/projects.scss";

import Backgrounds from "../components/backgrounds";
import GithubPanels from "../components/githubpanels";

class Projects extends React.Component {
  render() {
    return (
      <div id="projects-page">
        <Backgrounds />
        <GithubPanels />
      </div>
    );
  };
}

export default Projects;
