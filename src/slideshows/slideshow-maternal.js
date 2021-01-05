import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Estimator from "../media/1-baby-weight-estimator.jpg";
import Monitor from "../media/1-monitor-tensorflow.jpg";
import Goal from "../media/1-goal.jpg";
import Dataset from "../media/1-bigquery-dataset.jpg";
import Agenda from "../media/1-agenda.jpg";
import Labs from "../media/1-labs.jpg";
import Simple from "../media/1-bigquery-simple-ml.jpg";
import BigQuery from "../media/1-using-bigquery.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
          <div className="each-slide">
              <img className="slide-img" src={Estimator} alt="project screenshot"/>
              <img className="slide-img" src={Monitor} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" src={Goal} alt="project screenshot"/>
              <img className="slide-img" src={Dataset} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" src={Agenda} alt="project screenshot"/>
              <img className="slide-img" src={Labs} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img" src={Simple} alt="project screenshot"/>
              <img className="slide-img" src={BigQuery} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
