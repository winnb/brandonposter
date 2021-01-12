import React from "react";
import "../styles/projects.scss";

import Coral from "../media/coral.jpg";
import Slideshow from "../slideshows/slideshow-alexandria";

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
                <a href="/projects" className="tag">ASP.NET Core</a>
                <a href="/projects" className="tag">C#</a>
                <a href="/projects" className="tag">MVC</a>
                <a href="/projects" className="tag">Postman</a>
                <a href="/projects" className="tag">REST API</a>
                <a href="/projects" className="tag">WCF</a>
                <a href="/projects" className="tag">Web API</a>
                <a href="/projects" className="tag">Web Service</a>
            </div>
            <div  className="subpanel" id="alexandria">
                <Slideshow/>
                <div id="mvc-box-desc" className="project-desc">I created a web service for users to view an online library's database of books written in C# ASP.NET Core. The application uses an MVC 
                pattern to organize the code. The code for the user interface is contained within the view, the program operations are contained within the controllers, and the 
                business logic is contained within the model.
                </div>
                <a href="https://github.com/winnb/alexandria" className="github-button">See Github</a>
            </div>
            </div>
        </div>
      </div>
    );
  };
}

export default Alexandria;
