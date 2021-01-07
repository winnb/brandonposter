import React from "react";
import "../styles/projects.scss";

import Orange from "../media/orange.jpg";
import Slideshow from "../slideshows/slideshow-divide+conquer";

class Divide extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Orange} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* Java Divide and Conquer Project */}
            <div className="project-panel">
            <div className="project-title">Divide & Conquer: Runtime Optimization</div>
            <div className="tag-list">
                <a href="/projects" className="tag">Java</a>
                <a href="/projects" className="tag">Algorithm</a>
                <a href="/projects" className="tag">Optimization</a>
            </div>
            <div  className="subpanel" id="divide+conquer">
                <Slideshow/>
                <div id="conquer-box-desc" className="project-desc">I implemented the divide and conquer algorithm in Java. The application 
                recursively breaks down tasks into subtasks until each one can be completed with a time complexity of O(1) and the entire task finishes in O(nlogn).
                This application can be used to reduce the runtime of workloads, freeing up resources and increasing the quality experience for end users.
                </div>
                <a href="https://github.com/winnb/divide-and-conquer-java" className="github-button">See Github</a>
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default Divide;
