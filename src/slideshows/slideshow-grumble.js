import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Spring from "../media/grumble-initializer.jpg";
import Discovery from "../media/grumble-service-discovery.jpg";
import Compare from "../media/grumble-compare.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
              <img className="slide-img-tall" src={Spring} alt="project screenshot"/>
          </div>
          <div className="each-slide">
          <img className="slide-img" src={Compare} alt="project screenshot"/>
              <img className="slide-img" src={Discovery} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
