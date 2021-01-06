import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Home from "../media/ortega-time-home.jpg";
import Bottom from "../media/ortega-time-bottom.jpg";
import Zoom from "../media/ortega-time-zoom.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
              <img className="slide-img-tall" src={Home} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={Bottom} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={Zoom} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
