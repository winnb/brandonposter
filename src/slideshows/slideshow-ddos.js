import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Title from "../media/ddos-title.jpg";
import Plan from "../media/ddos-plan.jpg";
import Spamhaus from "../media/ddos-spamhaus.jpg";
import BBC from "../media/ddos-bbc.jpg";
import DYN from "../media/ddos-dyn.jpg";
import Github from "../media/ddos-github.jpg";
import Concept from "../media/ddos-concept.jpg";
import Research from "../media/ddos-research.jpg";
import ObtainIP from "../media/ddos-obtain-ip.jpg";
import Issues from "../media/ddos-issues.jpg";
import Tool from "../media/ddos-tool.jpg";
import Target from "../media/ddos-target.jpg";
import Attack from "../media/ddos-attack.jpg";
import Results from "../media/ddos-results.jpg";

   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
              <img className="slide-img" src={Title} alt="project screenshot"/>
              <img className="slide-img" src={Plan} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" src={Spamhaus} alt="project screenshot"/>
              <img className="slide-img" src={BBC} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" src={DYN} alt="project screenshot"/>
              <img className="slide-img" src={Github} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" src={Concept} alt="project screenshot"/>
              <img className="slide-img" src={Research} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" src={ObtainIP} alt="project screenshot"/>
              <img className="slide-img" src={Issues} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" src={Tool} alt="project screenshot"/>
              <img className="slide-img" src={Target} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" src={Attack} alt="project screenshot"/>
              <img className="slide-img" src={Results} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
