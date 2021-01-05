import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Outliers from "../media/confidence-outliers.jpg";
import Intervals from "../media/confidence-intervals.jpg";
import Chart from "../media/confidence-chart.jpg";
import Percentages from "../media/confidence-percentages.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
              <img className="slide-img" src={Chart} alt="project screenshot"/>
              <img className="slide-img" src={Percentages} alt="project screenshot"/>
          </div>  
          <div className="each-slide">
              <img className="slide-img" style={{filter: "invert(0.85)"}} src={Outliers} alt="project screenshot"/>
              <img className="slide-img" style={{filter: "invert(0.85)"}} src={Intervals} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
