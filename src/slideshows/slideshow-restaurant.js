import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import SQL1 from "../media/sql-screen.png";
import SQL2 from "../media/sql-screen-2.png";
import Database from "../media/database.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
          <img className="slide-img-short" src={Database} alt="project screenshot"/>
              <img className="slide-img" style={{overflow:"auto"}} src={SQL1} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" style={{overflow:"auto"}} src={SQL2} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
