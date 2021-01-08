import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Login from "../media/healthybelly-login.jpg";
import Home from "../media/healthybelly-home.jpg";
import Safe from "../media/healthybelly-safe.jpg";
import Unsafe from "../media/healthybelly-unsafe.jpg";
import Profile from "../media/healthybelly-profile.jpg";
import Allergens from "../media/healthybelly-allergens.jpg";
import Search from "../media/healthybelly-search.jpg";
import Team from "../media/healthybelly-team.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
              <img className="slide-img-phone" src={Login} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-phone" src={Home} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-phone" src={Safe} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-phone" src={Unsafe} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-phone" src={Profile} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-phone" src={Allergens} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-phone" src={Search} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-phone" src={Team} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
