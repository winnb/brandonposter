import React from "react";
import "../styles/resume.scss";

import Crimson from "../media/crimson.jpg";
import Resume from "../media/brandonwinn-resume.pdf";

class Home extends React.Component {
  render() {
    return (
      <div id="resume-page">
        <img className="home-background" src={Crimson} alt="Abstract background"/> 
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>       
        <div id="resume-holder">
          <object id="resume" data={Resume} type="application/pdf">
            <div id="resume-contents">
                <div className="name">Brandon Winn</div>
                <div><b>EMAIL:</b> winnbrandon2@gmail.com <b>PHONE:</b> 916-947-2059 <b>LOCATION:</b> Long Beach, CA</div> 
                <div><b>LINKEDIN:</b> https://www.linkedin.com/in/brandon-winn/</div>
                <div><b>EDUCATION:</b> California State University, Long Beach	B.S. Computer Science	Graduated Dec 2020</div>
                <div><b>SKILLS:</b></div> 
                <div>API Implementation, ASP.NET Core, Agile,Algorithms, Azure Dev Ops, Big Data, Big Query, C, C#, C++, CSS, Cloud Computing, Code Optimization, Containers, Data Integrity, Data Visualization, Design Patterns, Firebase, Full stack Development, GUI, Git, Google Cloud Platform, HTML, Java, JavaScript, KubeFlow, Kubernetes, LINQ, Linux,Mac, Machine Learning, MySQL, NoSQL, Python, React, Refactoring code, Rest API, SCRUM, Statistical Analysis, Tensor Flow, Unit Testing, WCF, WPF, Web Design, Web Services, Windows</div>
                <div><b>PROJECTS:</b></div> 
                <div>1. <b>Maternal:</b> Built end-to-end machine learning model on structured data which estimates newborn baby weight. Created data set from publicly available natality data. Selected labels and features. Pre-processed data using Big Query. Trained model using Tensor Flow on Google Cloud Platform. Predicted baby weights with model. Written in Python.</div>
                <div>2. <b>Pooch:</b> Led six-person team in development of pet care web service with 31 features. Used Git for collaboration. Built following SCRUM principles. Transformed user interviews into user stories, hosted sprint planning sessions, retrospectives, and code reviews. Written in React.js, JavaScript, HTML, CSS and hosted on Firebase.</div>
                <div>3. <b>Alexandria:</b> Created library web service database for books. Application uses model-view-controller design pattern to communicate between server and multiple clients. Utilized Microsoft Communication Foundation web API to connect to clients. Written in C# using ASP.NET Core.</div>
                <div>4. <b>Confidence Interval:</b> Designed client application for data visualization of 95% and 99% confidence levels of populations based on distribution about mean. Can be used for product validation on assembly line to ensure quality is within certain threshold.</div>
                <div>5. <b>Divide and Conquer:</b> Created runtime optimization program based on divide and conquer algorithm which greatly increases speed of solving any list of tasks. The application recursively breaks down the list into simpler tasks until each can be completed in O(1) time complexity.</div> 
                <div>6. <b>Restaurateur:</b> Designed SQL database for a restaurant to manage their in-person and online orders, menus and items, guest distribution for tables and wait staff assignment, traditional customers and corporate clients, and discounts/reward programs. I wrote thousands of CREATE and INSERT statements to add and populate the tables to ensure referential integrity.</div>
                <div><b>CERTIFICATES:</b></div> 
                <div>1. End-to-End Machine Learning with TensorFlow on GCP (28 Sept 2020)</div> 
                <div>2. Production Machine Learning Systems (2 Nov 2020)</div>
                <div><b>EXPERIENCE:</b></div> 
                <div><b>Company:</b> Plant Power, Title: Shift Lead, July 2019 - Sept 2020</div>
                <div>Led team of 20+ individuals, trained employees, handled customer relations, troubleshot technical issues, created daily log of activities, fostered positive and professional environment</div>
                <div><b>Organization:</b> CSULB Programming Team, Title: Team Captain, Fall 2019 - Spring 2020</div>
                <div>Led team of 3 individuals in learning new programming skills, maintaining coding best practices, contributing to each other’s code. Learned leadership and communication skills.</div>
                <div><b>Organization:</b> Association for Computing Machinery, Title: Logistics Officer, 8/2018 - 5/2019</div>
                <div>Helped coordinate Beach Hacks 2019 CSULB hackathon. Learned organizational skills, problem solving, and time management.</div> 
            </div>
            <div id="download-holder"><a id="resume-download" href={Resume} download>Download Resume</a></div>
          </object>
          
        </div>
    </div>
    );
  };
}

export default Home;
