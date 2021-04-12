import React from "react";
import "../styles/personal-recommendations.scss";

import Liver from "../media/liver.jpg";
import SteveGold from "../media/stevegold.pdf";
import ShuiLam from "../media/shuilam.pdf";

class PersonalRecommendations extends React.Component {
  render() {
    return (
      <div id="personal-recommendations-page">
        <img className="home-background" src={Liver} alt="Abstract background"/> 
        <a id="home-hint" href="/#color-blocks">◀ Go back home</a>       
        <div id="resume-holder">
          <object id="resume" data={SteveGold} type="application/pdf">
            <div id="download-holder"><a id="resume-download" href={SteveGold} download>Download Letter</a></div>
          </object>
          <object id="resume" data={ShuiLam} type="application/pdf">
            <div id="download-holder"><a id="resume-download" href={ShuiLam} download>Download Letter</a></div>
          </object>
        </div>
    </div>
    );
  };
}

export default PersonalRecommendations;
