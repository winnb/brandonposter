import React from "react";
import "../styles/projects.scss";

import Teal from "../media/teal.jpg";
import Slideshow from "../slideshows/slideshow-maternal";

class Maternal extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Teal} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* Baby Weight ML Project */}
            <div className="project-panel">
            <div className="project-title">Maternal: ML model for newborn baby weight</div>
            <div className="tag-list">
                <a href="/projects" className="long-tag">Machine Learning</a>
                <a href="/projects" className="long-tag">Tensor Flow</a>
                <a href="/projects" className="long-tag">GCP</a>
                <a href="/projects" className="long-tag">Big Data</a>
                <a href="/projects" className="long-tag">Cloud Computing</a>
            </div>
            <div className="subpanel" id="maternal">
                <Slideshow/>
                <div id="confidence-box-desc" className="project-desc">
                I designed, trained, and deployed a deep neural network (DNN) machine learning model which predicts a newborn baby's weight given 
                factors like mother's age, weeks of gestation, the presence of twins, and baby's sex. I created this tool as part of a certification 
                offered by Google. This model can be used to assist medical professionals in estimating baby weight with a data-backed solution.
                </div>
                <a href="/" className="github-button" style={{opacity: "0%"}}></a>
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default Maternal;
