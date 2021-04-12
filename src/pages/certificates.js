import React from "react";
import "../styles/certificates.scss";

import Violet from "../media/violet.jpg";
import End2EndML from "../media/End2EndML.pdf";
import ProductionML from "../media/ProductionML.pdf";
import ImageUnderstanding from "../media/ImageUnderstanding.pdf";

class Certificates extends React.Component {
  render() {
    return (
      <div id="certificates-page">
        <img className="home-background" src={Violet} alt="Abstract background"/> 
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>       
        <div id="resume-holder">
          <object id="certificate" data={End2EndML} type="application/pdf">
            <div id="download-holder"><a id="resume-download" href={End2EndML} download>Download Letter</a></div>
          </object>
          <object id="certificate" data={ProductionML} type="application/pdf">
            <div id="download-holder"><a id="resume-download" href={ProductionML} download>Download Letter</a></div>
          </object>
          <object id="certificate" data={ImageUnderstanding} type="application/pdf">
            <div id="download-holder"><a id="resume-download" href={ImageUnderstanding} download>Download Letter</a></div>
          </object>
        </div>
    </div>
    );
  };
}

export default Certificates;
