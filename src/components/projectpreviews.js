import React from "react";
import "../styles/projects.scss";

import Alexandria from "../media/alexandria-preview.jpg";
import Confidence from "../media/python-screen-2.png";
import Outliers from "../media/confidence-outliers.jpg";
import Divide from "../media/divide+conquer.jpg";
import Maternal from "../media/1-baby-weight-estimator.jpg";
import Pooch from "../media/pooch-preview.jpg";
import SQL from "../media/sql-screen-3.png";

class ProjectPreviews extends React.Component {

  render() {
    return (
        <div id="all-projects">
          {/* Alexandria Project Preview */}
          <a href="/alexandria" className="preview-box" id="C#,ASP.NET Core,WCF,Web Service,MVC,Web API">
            <div>Alexandria</div>
            <img className="project-preview-img-lg" style={{filter: "invert(0.85)"}} src={Alexandria} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag">C#</div>
              <div className="preview-tag-long">ASP.NET Core</div>
              <div className="preview-tag">WCF</div>
              <div className="preview-tag-long">Web Service</div>
              <div className="preview-tag">MVC</div>
              <div className="preview-tag-long">Web API</div>
            </div>
          </a>
          {/* Confidence Interval Project Preview */}
          <a href="/confidence_limits" className="preview-box" id="Python,Data Visualization,Statistical Analysis">
            <div>Confidence Limits</div>
            <img className="project-preview-img-lg" src={Outliers} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-long">Python</div>
              <div className="preview-tag-xl">Data Visualization</div>
              <div className="preview-tag-xl">Statistical Analysis</div>
            </div>
          </a>
          {/* Divide & Conquer Project Preview */}
          <a href="/divide+conquer" className="preview-box" id="Java,Algorithm,Optimization">
            <div>Divide & Conquer</div>
            <img className="project-preview-img-lg" src={Divide} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-long">Java</div>
              <div className="preview-tag-long">Algorithm</div>
              <div className="preview-tag-long">Optimization</div>
            </div>
          </a>
          {/* Maternal Project Preview */}
          <a href="/maternal" className="preview-box" id="Machine Learning,Tensor Flow,GCP,Big Data,Cloud Computing">
            <div>Maternal</div>
            <img className="project-preview-img-lg" src={Maternal} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-xl">Machine Learning</div>
              <div className="preview-tag-long">Tensor Flow</div>
              <div className="preview-tag-long">GCP</div>
              <div className="preview-tag-long">Big Data</div>
              <div className="preview-tag-xl">Cloud Computing</div>
            </div>
          </a>
          {/* Pooch Project Preview */}
          <a href="/pooch" className="preview-box" id="React.js,Web Service,JavaScript,HTML,CSS,Firebase,Git,Agile,SCRUM,Web Design">
            <div>Pooch</div>
            <img className="project-preview-img-lg" src={Pooch} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-long">React.js</div>
              <div className="preview-tag-long">Web Service</div>
              <div className="preview-tag-long">JavaScript</div>
              <div className="preview-tag-long">HTML</div>
              <div className="preview-tag">CSS</div>
              <div className="preview-tag-long">Firebase</div>
              <div className="preview-tag">Git</div>
              <div className="preview-tag">Agile</div>
              <div className="preview-tag-long">SCRUM</div>
              <div className="preview-tag-long">Web Design</div>
            </div>
          </a>
          {/* Restaurateur Project Preview */}
          <a href="/Restaurateur" className="preview-box" id="SQL,MySQL,Database,Data Integrity">
            <div>Restaurateur</div>
            <img className="project-preview-img" src={SQL} alt="project preview"/>
            <div className="box-tag-holder">
              <div className="preview-tag-long">SQL</div>
              <div className="preview-tag-long">MySQL</div>
              <div className="preview-tag-long">Database</div>
              <div className="preview-tag-long">Data Integrity</div>
            </div>
          </a>
        </div>
    );
  };
}

export default ProjectPreviews;