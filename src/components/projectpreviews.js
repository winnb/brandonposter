import React from "react";
import "../styles/preview.scss";

import Alexandria from "../media/alexandria-preview.jpg";
import Outliers from "../media/confidence-outliers.jpg";
import Divide from "../media/divide+conquer.jpg";
import Maternal from "../media/1-baby-weight-estimator.jpg";
import Pooch from "../media/pooch-preview.jpg";
import SQL from "../media/sql-screen-3.png";
import Ortega from "../media/ortega-time-preview.jpg";
import DDoS from "../media/ddos-title.jpg";
import Generic from "../media/generic-sort.jpg";

class ProjectPreviews extends React.Component {

  render() {
    return (
        <div id="all-projects">
          {/* Alexandria Project Preview */}
          <a href="/alexandria" className="preview-box" id="C#,ASP.NET Core,WCF,Web Service,MVC,Web API">
            <div>Alexandria</div>
            <img className="project-preview-img-lg" style={{filter: "invert(0.85)"}} src={Alexandria} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-long">ASP.NET Core</div>
              <div className="preview-tag">C#</div>
              <div className="preview-tag">MVC</div>
              <div className="preview-tag">WCF</div>
              <div className="preview-tag-long">Web API</div>
              <div className="preview-tag-long">Web Service</div>
            </div>
          </a>
          {/* Confidence Interval Project Preview */}
          <a href="/confidence_limits" className="preview-box" id="Python,Data Visualization,Statistical Analysis">
            <div>Confidence Limits</div>
            <img className="project-preview-img-lg" src={Outliers} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-xl">Data Visualization</div>
              <div className="preview-tag-long">Python</div>
              <div className="preview-tag-xl">Statistical Analysis</div>
            </div>
          </a>
          {/* Divide & Conquer Project Preview */}
          <a href="/divide+conquer" className="preview-box" id="Java,Algorithm,Optimization">
            <div>Divide & Conquer</div>
            <img className="project-preview-img-lg" src={Divide} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-long">Algorithm</div>
              <div className="preview-tag-long">Java</div>
              <div className="preview-tag-long">Optimization</div>
            </div>
          </a>
          {/* Maternal Project Preview */}
          <a href="/maternal" className="preview-box" id="Machine Learning,Tensor Flow,GCP,Big Data,Cloud Computing">
            <div>Maternal</div>
            <img className="project-preview-img-lg" src={Maternal} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-long">Big Data</div>
              <div className="preview-tag-xl">Cloud Computing</div>
              <div className="preview-tag-long">GCP</div>
              <div className="preview-tag-xl">Machine Learning</div>
              <div className="preview-tag-long">Tensor Flow</div>
            </div>
          </a>
          {/* Pooch Project Preview */}
          <a href="/pooch" className="preview-box" id="React.js,Web Service,JavaScript,HTML,CSS,Firebase,Git,Agile,SCRUM,Web Design,PowerShell">
            <div>Pooch</div>
            <img className="project-preview-img-lg" src={Pooch} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag">Agile</div>
              <div className="preview-tag">CSS</div>
              <div className="preview-tag-long">Firebase</div>
              <div className="preview-tag">Git</div>
              <div className="preview-tag-long">HTML</div>
              <div className="preview-tag-long">JavaScript</div>
              <div className="preview-tag-long">PowerShell</div>
              <div className="preview-tag-long">React.js</div>
              <div className="preview-tag-long">SCRUM</div>
              <div className="preview-tag-long">Web Design</div>
              <div className="preview-tag-long">Web Service</div>           
            </div>
          </a>
          {/* Restaurateur Project Preview */}
          <a href="/Restaurateur" className="preview-box" id="SQL,MySQL,Database,Data Integrity">
            <div>Restaurateur</div>
            <img className="project-preview-img" src={SQL} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-long">Database</div>
              <div className="preview-tag-long">Data Integrity</div>
              <div className="preview-tag-long">MySQL</div>
              <div className="preview-tag-long">SQL</div>
            </div>
          </a>
          {/* Ortega Time Project Preview */}
          <a href="/ortega+time" className="preview-box" id="CSS,Firebase,Git,HTML,JavaScript,React.js,Web Design,Web Service,PowerShell">
            <div>Ortega Time</div>
            <img className="project-preview-img-lg" src={Ortega} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag">CSS</div>
              <div className="preview-tag-long">Firebase</div>
              <div className="preview-tag">Git</div>
              <div className="preview-tag-long">HTML</div>
              <div className="preview-tag-long">JavaScript</div>
              <div className="preview-tag-long">PowerShell</div>
              <div className="preview-tag-long">React.js</div>
              <div className="preview-tag-long">Web Design</div>
              <div className="preview-tag-long">Web Service</div>
            </div>
          </a>
          {/* Generic Sort Project Preview */}
          <a href="/shuffle" className="preview-box" id="Algorithm,C++,Optimization">
            <div>Shuffle</div>
            <img className="project-preview-img-lg" src={Generic} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-long">Algorithm</div>
              <div className="preview-tag-long">C++</div>
              <div className="preview-tag-long">Optimization</div>
            </div>
          </a>
          {/* DDoS Project Preview */}
          <a href="/ddos" className="preview-box" id="Cyber Security,Data Integrity,Distributed Networks,Denial of Service,Firebase,Java,Virtual Machine,Bash">
            <div>Website Killer</div>
            <img className="project-preview-img-lg" src={DDoS} alt="project preview"/>
            <div className="box-tag-holder">
            <div className="preview-tag">Bash</div>
              <div className="preview-tag-xl">Cyber Security</div>
              <div className="preview-tag-xl">Data Integrity</div>
              <div className="preview-tag-xl">Distributed Networks</div>
              <div className="preview-tag-xl">Denial of Service</div>
              <div className="preview-tag-long">Firebase</div>
              <div className="preview-tag">Java</div>
              <div className="preview-tag-xl">Virtual Machine</div>
            </div>
          </a>
        </div>
    );
  };
}

export default ProjectPreviews;