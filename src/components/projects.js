import React from "react";
import "../styles/home.scss";

import PoochGit from "../media/pooch-github.png";
import MCVGit from "../media/mvc-github.png";
import JavaGit from "../media/java-github.JPG";
import ConfidenceGit from "../media/confidence-github.jpg";

class Projects extends React.Component {
  render() {
    return (
      <div>
        {/* React.js Pooch Project */}
        <a href="https://github.com/winnb/pooch" className="white-box-tall" id="pooch-box-lg">
          <img id="MT" src={PoochGit}/>
        </a>
        <a className="white-box-tall" id="pooch-box-desc">
          <div className="project-desc">I led a team of six members in the design, production, and launch of a pet services web application with 31 user features using React.js. 
            The development process followed industry-standard, Agile methodologies including all SCRUM ceremonies. I led daily SCRUM meetings 
            where I assigned tasks to team members. Every two weeks, I hosted sprint planning meetings to determine the goals of each sprint.
            This included writing new user stories and reassigning incomplete stories from the previous sprint. I performed sprint retrosepctives
            to regularly assess what worked and what needed improvement. I performed code reviews where I performed black block testing to ensure
            all user features worked as intended before they shipped into production.</div>
        </a>
        {/* C# MVC Project */}
        <a href="https://github.com/winnb/csharp-mvc" className="white-box-tall" id="mvc-box-lg">
          <img id="MT" src={MCVGit}/>
        </a>
        <a className="white-box-tall" id="mvc-box-desc">
          <div className="project-desc">I created a web service for users to view an online library's database of books written in C# ASP.NET Core. The application uses an MVC 
          pattern to organize the code. The code for the user interface is contained within the view, the program operations are contained within the controllers, and the 
          business logic is contained within the model. I used a web API to handle requests between users and the server. I implemented unit testing to validate each user feature.
          I decided on an architecture for this application that is highly scalable and testable, which will allow me to add additonal modules as the clients' needs change over time. </div>
        </a>
        {/* Java Divide and Conquer Project */}
        <a className="white-box-tall" id="conquer-box-lg">
          <img id="TF" src={JavaGit}/>
        </a>
        <a href="https://github.com/winnb/divide-and-conquer-java" className="white-box-tall" id="conquer-box-desc">
          <div className="project-desc">I wrote the code for an implementation of the divide and conquer algorithm in Java. Given an array of tasks to perform, the application 
          recursively breaks down the problem into subtasks until each individual task can be completed with a time complexity of O(1). At each recursive call, the program 
          splits the current task into two smaller ones. With this pattern, the time complexity for this implementation is O(nlogn) as there are n base cases and logn steps. This 
          application can be used to reduce the runtime of pipeline workloads, freeing up resources and increasing the quality experience for end users.
          </div>
        </a>
        {/* Python Confidence Interval Project */}
        <a href="https://github.com/winnb/confidence-interval" className="white-box-tall" id="confidence-box-lg">
          <img id="W" src={ConfidenceGit}/>
        </a>
        <a className="white-box-tall" id="confidence-box-desc">
          <div className="project-desc">I wrote a Python program to find the confidence intervals of sample sizes and populations. In the first section, the means 
          and confidence intervals are found and graphed for a 95% confidence level and a 99% confidence level. In the second section, a table is populated with the 
          probabilities of a given sample size of data and confidence level. A random sample mean and sample confidence interval is selected. The application 
          determines whether the true mean is contained within such a confidence interval. A normally-distributed population of one million ball bearings was generated,
          two-hundred sample sizes were generated from 1 to 200, a random sample population of each size was selected, The sample mean, minimum, and maximum confidence 
          levels were calculated, and the two-hundred sample means and confidence intervals were graphed.
          </div>
        </a>
      </div>
    );
  };
}

export default Projects;
