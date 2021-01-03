import React from "react";
import "../styles/projects.scss";

class Tags extends React.Component {

  // Invert colors of tag when selected/unselected
  selectTag(tagName) {
    if (document.getElementById(tagName).style.backgroundColor!=="rgb(40, 40, 40)") {
      document.getElementById(tagName).style.backgroundColor="rgb(40, 40, 40)";
      document.getElementById(tagName).style.color="rgb(210, 210, 210)";
      document.getElementById(tagName).style.textShadow="0.1vw 0.1vw 0.1vw rgb(60, 60, 60)";
      document.getElementById(tagName).style.boxShadow="0.2vw 0.2vw 0vw rgb(120, 120, 120)";
      document.getElementById("selected-tags").innerText=document.getElementById("selected-tags").innerText+tagName+",";
    }
    else {
      document.getElementById(tagName).style.backgroundColor="white";
      document.getElementById(tagName).style.color="black";
      document.getElementById(tagName).style.textShadow="0.1vw 0.1vw 0.1vw rgb(185, 185, 185)";
      document.getElementById(tagName).style.boxShadow="0.2vw 0.2vw 0vw rgb(150, 150, 150)";
      document.getElementById("selected-tags").innerText=document.getElementById("selected-tags").innerText.replace(tagName+",","");
    }
    
    // Search projects for matching tags
    var selectedTags = document.getElementById("selected-tags").innerText.split(","); // Get selected tags
    selectedTags = selectedTags.slice(0,selectedTags.length-1); // Trim last value which is always empty
    var projects = document.getElementById("all-projects").childNodes;
    for (var i=0; i<projects.length; i++) { // Loop through each project
      var tagsMatch = false;
      var projectTags = projects[i].id;
      for (var j=0; j<selectedTags.length; j++) { // Loop through each selected tag
        if (projectTags.includes(selectedTags[j]))
          tagsMatch = true;
      }
      if (tagsMatch) 
        document.getElementById(projectTags).style.display="block";
      else
      document.getElementById(projectTags).style.display="none";
    }

    // Check whether any tags are selected and if none, then hide "Matching Projects" title
    if (selectedTags.length>0)
      document.getElementById("projects-title").style.display="block";
    else
    document.getElementById("projects-title").style.display="none";
  }

  render() {
    return (
        <div id="all-tags">
            <div className="long-tag" id="React.js" onClick={()=>this.selectTag("React.js")}>React.js</div>
            <div className="long-tag" id="Web Service" onClick={()=>this.selectTag("Web Service")}>Web Service</div>
            <div className="long-tag" id="JavaScript" onClick={()=>this.selectTag("JavaScript")}>JavaScript</div>
            <div className="long-tag" id="HTML" onClick={()=>this.selectTag("HTML")}>HTML</div>
            <div className="long-tag" id="CSS" onClick={()=>this.selectTag("CSS")}>CSS</div>
            <div className="long-tag" id="Firebase" onClick={()=>this.selectTag("Firebase")}>Firebase</div>
            <div className="long-tag" id="Git" onClick={()=>this.selectTag("Git")}>Git</div>
            <div className="long-tag" id="Agile" onClick={()=>this.selectTag("Agile")}>Agile</div>
            <div className="long-tag" id="SCRUM" onClick={()=>this.selectTag("SCRUM")}>SCRUM</div>
            <div className="long-tag" id="Web Design" onClick={()=>this.selectTag("Web Design")}>Web Design</div>
            <div className="long-tag" id="C#" onClick={()=>this.selectTag("C#")}>C#</div>
            <div className="long-tag" id="ASP.NET Core" onClick={()=>this.selectTag("ASP.NET Core")}>ASP.NET Core</div>
            <div className="long-tag" id="WCF" onClick={()=>this.selectTag("WCF")}>WCF</div>
            <div className="long-tag" id="MVC" onClick={()=>this.selectTag("MVC")}>MVC</div>
            <div className="long-tag" id="Web API" onClick={()=>this.selectTag("Web API")}>Web API</div>
            <div className="long-tag" id="Java" onClick={()=>this.selectTag("Java")}>Java</div>
            <div className="long-tag" id="Algorithm" onClick={()=>this.selectTag("Algorithm")}>Algorithm</div>
            <div className="long-tag" id="Optimization" onClick={()=>this.selectTag("Optimization")}>Optimization</div>
            <div className="long-tag" id="Python" onClick={()=>this.selectTag("Python")}>Python</div>
            <div className="long-tag" id="Data Visualization" onClick={()=>this.selectTag("Data Visualization")}>Data Visualization</div>
            <div className="long-tag" id="Statistical Analysis" onClick={()=>this.selectTag("Statistical Analysis")}>Statistical Analysis</div>
            <div className="long-tag" id="SQL" onClick={()=>this.selectTag("SQL")}>SQL</div>
            <div className="long-tag" id="MySQL" onClick={()=>this.selectTag("MySQL")}>MySQL</div>
            <div className="long-tag" id="Database" onClick={()=>this.selectTag("Database")}>Database</div>
            <div className="long-tag" id="Data Integrity" onClick={()=>this.selectTag("Data Integrity")}>Data Integrity</div>
            <div className="long-tag" id="Machine Learning" onClick={()=>this.selectTag("Machine Learning")}>Machine Learning</div>
            <div className="long-tag" id="Tensor Flow" onClick={()=>this.selectTag("Tensor Flow")}>Tensor Flow</div>
            <div className="long-tag" id="GCP" onClick={()=>this.selectTag("GCP")}>GCP</div>
            <div className="long-tag" id="Big Data" onClick={()=>this.selectTag("Big Data")}>Big Data</div>
            <div className="long-tag" id="Cloud Computing" onClick={()=>this.selectTag("Cloud Computing")}>Cloud Computing</div>
        </div>
    );
  };
}

export default Tags;
