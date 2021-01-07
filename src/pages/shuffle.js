import React from "react";
import "../styles/projects.scss";

import Electric from "../media/electric.jpg";
import Slideshow from "../slideshows/slideshow-shuffle";

class Shuffle extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Electric} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* C++ Generic Sort Project */}
            <div className="project-panel">
            <div className="project-title">Shuffle: A generic sorting algorithm</div>
            <div className="tag-list">
                <a href="/projects" className="long-tag">Algorithm</a>
                <a href="/projects" className="tag">C++</a>
                <a href="/projects" className="long-tag">Optimization</a>
            </div>
            <div className="subpanel-left" id="shuffle">
                <Slideshow/>
                <div id="shuffle-box-desc" className="project-desc">I created an application to sort any list of items using one function.
                The function accepts unsorted numbers, letters, objects, or any other items which can be compared. Objects can be sorted in 
                multiple different ways. People can be sorted alphabetically by name, numerically by age, or in any combination of factors, 
                including by reversing certain factors.
                </div>
                <a href="https://github.com/winnb/generic-sort" className="github-button">See Github</a>
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default Shuffle;
