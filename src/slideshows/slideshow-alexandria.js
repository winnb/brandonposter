import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Home from "../media/alexandria-home.jpg";
import Add from "../media/alexandria-add.jpg";
import Details from "../media/alexandria-details.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
              <img className="slide-img-tall" style={{filter: "invert(0.85)"}} src={Home} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" style={{filter: "invert(0.85)"}} src={Add} alt="project screenshot"/>
              <img className="slide-img" style={{filter: "invert(0.85)"}} src={Details} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
