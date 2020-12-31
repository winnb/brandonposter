import React from "react";
import "../styles/projects.scss";

import Coral from "../media/coral.jpg";
import Orange from "../media/orange.jpg";
import Purple from "../media/purple.jpg";
import Green from "../media/green.jpg";

class Backgrounds extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Coral} alt="Abstract background"/>
        <div id="white-bg"/>
        <img className="project-background" src={Orange} alt="Abstract background"/>
        <div id="white-bg"/>
        <img className="project-background" src={Purple} alt="Abstract background"/>
        <div id="white-bg"/>
        <img className="project-background" src={Green} alt="Abstract background"/>
      </div>
    );
  };
}

export default Backgrounds;
