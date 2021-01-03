import React from "react";
import "../styles/projects.scss";

import Tensor1 from "../media/tensorflow-screen.png";
import Tensor2 from "../media/tensorflow-screen-3.png";
import Sapphire from "../media/sapphire.jpg";

class Maternal extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Sapphire} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* Baby Weight ML Project */}
            <div className="project-panel">
            <div className="project-title-black">Maternal: ML model for newborn baby weight</div>
            <div className="tag-list">
                <div className="long-tag">Machine Learning</div>
                <div className="long-tag">Tensor Flow</div>
                <div className="long-tag">GCP</div>
                <div className="long-tag">Big Data</div>
                <div className="long-tag">Cloud Computing</div>
            </div>
            <div className="subpanel-left" id="maternal">
                <img id="project-img-invert" src={Tensor1} alt="project image"/>
                <img id="project-img-invert" src={Tensor2} alt="project image"/>
                <div id="confidence-box-desc" className="project-desc">I designed, trained, and deployed a machine learning model which predicts a newborn baby's weight given 
                certain factors like age of the mother, sex, how many weeks of gestation have occurred, the presence of twins, and more. I created this tool to help medical 
                professionals assess the health of a newborn.
                </div>
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default Maternal;
