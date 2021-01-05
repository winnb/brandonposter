import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Quicksort from "../media/quicksort.gif";
import Steps from "../media/quicksort-steps.jpg";
import Quicksort2 from "../media/quicksort2.gif";
import Divide from "../media/divide+conquer.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
              <img className="slide-img" style={{filter: "invert(0.85)"}} src={Quicksort} alt="project screenshot"/>
              <img className="slide-img" style={{filter: "invert(0.85)"}} src={Steps} alt="project screenshot"/>
          </div>
          <div className="each-slide">
          <img className="slide-img" src={Quicksort2} alt="project screenshot"/>
              <img className="slide-img" src={Divide} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
