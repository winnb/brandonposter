import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Generic from "../media/generic-sort.jpg";
import Heap from "../media/heapsort.gif";
import Unsorted from "../media/unsorted-people.jpg";
import Sorted from "../media/sorted-people.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
                <img className="slide-img" src={Unsorted} alt="project screenshot"/>
                <img className="slide-img" src={Sorted} alt="project screenshot"/>
          </div> 
           <div className="each-slide">
                <img className="slide-img" src={Generic} alt="project screenshot"/>
                <img className="slide-img" src={Heap} alt="project screenshot"/>
          </div> 
        </Slide>
      </div>
    )
};

export default Slideshow;
