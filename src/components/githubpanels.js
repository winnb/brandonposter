import React from "react";
import "../styles/projects.scss";

import PoochGit from "../media/pooch-github.png";
import MCVGit from "../media/mvc-github.png";
import JavaGit from "../media/java-github.JPG";
import ConfidenceGit from "../media/confidence-github.jpg";
import Pooch from "../media/pooch-portrait.png";
import Library1 from "../media/c-mvc-screen.png";
import Library2 from "../media/c-mvc-screen-2.png";
import Conquer1 from "../media/java-screen.png";
import Conquer2 from "../media/java-screen-2.png";
import Confidence1 from "../media/python-screen.png";
import Confidence2 from "../media/python-screen-2.png";
import SQL1 from "../media/sql-screen.png";
import SQL2 from "../media/sql-screen-2.png";
import Tensor1 from "../media/tensorflow-screen.png";
import Tensor2 from "../media/tensorflow-screen-3.png";

class GithubPanels extends React.Component {
  render() {
    return (
      <div id="github-panels">
        {/* React.js Pooch Project */}
        <div className="project-panel">
          <div className="github-title">Pooch: A pet care web service</div>
          <div href="https://github.com/winnb/pooch" className="subpanel-left" id="pooch">
            <img id="github-img-invert" src={Pooch} alt="Github preview"/>
              <div id="pooch-box-desc" className="project-desc">I led a team of six members in the design, production, and launch of a pet services web application with 31 user features using React.js. 
                The development process followed industry-standard, Agile methodologies including all SCRUM ceremonies. I led daily SCRUM meetings 
                where I assigned tasks to team members.
              </div>
          </div>
        </div>
        
        {/* C# MVC Project */}
        <div className="project-panel">
          <div className="github-title-black">Librarian: A book repository web service</div>
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
        
        {/* Java Divide and Conquer Project */}
        <div className="project-panel">
          <div className="github-title">Divide & Conquer: Runtime optimization</div>
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
        
        {/* Python Confidence Interval Project */}
        <div className="project-panel">
          <div className="github-title-black">Confidence Intervals: Data Visualization</div>
          <div href="https://github.com/winnb/confidence-interval" className="subpanel-left" id="confidence+limits">
            {/* <img id="github-img" src={ConfidenceGit} alt="Github preview"/> */}
            <img id="project-img" src={Confidence1} alt="project image"/>
            <img id="project-img-invert" src={Confidence2} alt="project image"/>
            <div id="confidence-box-desc" className="project-desc">I designed an application to find the confidence intervals of sample sizes and populations in Python. 
              Mean and confidence intervals are graphed for 95% confidence levels and 99% confidence levels. A random sample mean is selected and the program 
              determines whether the true mean is contained within such a confidence interval.
            </div>
          </div>
        </div>

        {/* Restaurant Management Project */}
        <div className="project-panel">
          <div className="github-title">Restaurantuer: SQL database for businesses</div>
          <div href="https://github.com/winnb/restaurantmanager" className="subpanel-left" id="restaurantuer">
            {/* <img id="github-img" src={ConfidenceGit} alt="Github preview"/> */}
            <img id="project-img" src={SQL2} alt="project image"/>
            <img id="project-img" src={SQL1} alt="project image"/>
            <div id="confidence-box-desc" className="project-desc">I created a SQL database for a restaurant to manage their in-person and online orders, menu items, rewards program, 
              corporate clients, and table logistics. I designed the UML diagram which shows the dependencies and integrity contraints of the tables. I wrote thousands of 
               CREATE and INSERT statements to add and populate tables in the database.
            </div>
          </div>
        </div>

        {/* Baby Weight ML Project */}
        <div className="project-panel">
          <div className="github-title-black">Maternal: ML model for newborn baby weight</div>
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
    );
  };
}

export default GithubPanels;
