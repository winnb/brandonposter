import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Home from "../media/pooch-home.jpg";
import Pets from "../media/pooch-pets.jpg";
import Walkers from "../media/pooch-walkers.jpg";
import Boarders from "../media/pooch-boarders.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
              <img className="slide-img-tall" src={Home} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={Pets} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={Walkers} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={Boarders} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
