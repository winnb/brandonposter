import React from "react";
import "../styles/projects.scss";

import Confidence1 from "../media/python-screen.png";
import Confidence2 from "../media/python-screen-2.png";
import Green from "../media/green.jpg";

class Confidence extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Green} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* Python Confidence Interval Project */}
            <div className="project-panel">
            <div className="project-title-black">Confidence Intervals: Data Visualization</div>
            <div className="tag-list">
                <a href="/projects" className="tag">Python</a>
                <a href="/projects" className="long-tag">Data Visualization</a>
                <a href="/projects" className="long-tag">Statistical Analysis</a>
            </div>
            <div className="subpanel-left" id="confidence+limits">
                {/* <img id="github-img" src={ConfidenceGit} alt="Github preview"/> */}
                <img id="project-img" src={Confidence1} alt="project image"/>
                <img id="project-img-invert" src={Confidence2} alt="project image"/>
                <div id="confidence-box-desc" className="project-desc">I designed an application to find the confidence intervals of sample sizes and populations in Python. 
                Mean and confidence intervals are graphed for 95% confidence levels and 99% confidence levels. A random sample mean is selected and the program 
                determines whether the true mean is contained within such a confidence interval.
                </div>
                <a href="https://github.com/winnb/confidence-interval" className="github-button">See Github</a>
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default Confidence;
