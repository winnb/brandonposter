import React from "react";
import "../styles/projects.scss";

import Library1 from "../media/c-mvc-screen.png";
import Library2 from "../media/c-mvc-screen-2.png";
import Coral from "../media/coral.jpg";

class Alexandria extends React.Component {
  render() {
    return (
      <div>
        <img className="project-background" src={Coral} alt="Abstract background"/>  
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>
        <div id="github-panels">

            {/* C# MVC Project */}
            <div className="project-panel">
            <div className="project-title">Alexandria: A book repository web service</div>
            <div className="tag-list">
                <a href="/projects" className="tag">C#</a>
                <a href="/projects" className="tag">ASP.NET Core</a>
                <a href="/projects" className="tag">WCF</a>
                <a href="/projects" className="tag">Web Service</a>
                <a href="/projects" className="tag">MVC</a>
                <a href="/projects" className="tag">Web API</a>
            </div>
            <div href="https://github.com/winnb/preview-img-invert-mvc" className="subpanel-left" id="alexandria">
                {/* <img id="github-img" src={MCVGit} alt="Github preview"/> */}
                <img id="project-img-invert" src={Library1} alt="project image"/>
                <img id="project-img-invert" src={Library2} alt="project image"/>
                <div id="mvc-box-desc" className="project-desc">I created a web service for users to view an online library's database of books written in C# ASP.NET Core. The application uses an MVC 
                pattern to organize the code. The code for the user interface is contained within the view, the program operations are contained within the controllers, and the 
                business logic is contained within the model.
                </div>
            </div>
            </div>
   
        </div>
      </div>
    );
  };
}

export default Alexandria;
