import React from "react";
import "../styles/projects.scss";

import Conquer1 from "../media/java-screen.png";
import Conquer2 from "../media/java-screen-2.png";
import Orange from "../media/orange.jpg";

class Divide extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Orange} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* Java Divide and Conquer Project */}
            <div className="project-panel">
            <div className="project-title">Divide & Conquer: Runtime optimization</div>
            <div className="tag-list">
                <div className="tag">Java</div>
                <div className="tag">Algorithm</div>
                <div className="tag">Optimization</div>
            </div>
            <div href="https://github.com/winnb/divide-and-conquer-java" className="subpanel-left" id="divide+conquer">
                {/* <img id="github-img" src={JavaGit} alt="Github preview"/> */}
                <img id="project-img" src={Conquer1} alt="project image"/>
                <img id="project-img-invert" src={Conquer2} alt="project image"/>
                <div id="conquer-box-desc" className="project-desc">I implemented the divide and conquer algorithm in Java. The application 
                recursively breaks down tasks into subtasks until each one can be completed with a time complexity of O(1) and the entire task finishes in O(nlogn).
                This application can be used to reduce the runtime of pipeline workloads, freeing up resources and increasing the quality experience for end users.
                </div>
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default Divide;
