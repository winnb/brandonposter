import React from "react";
import "../styles/slideshow.scss";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Login from "../media/trak-login.jpg";
import Home from "../media/trak-home.jpg";
import NewProduct from "../media/trak-new-product.jpg";
import Products from "../media/trak-products.jpg";
import Cart from "../media/trak-cart.jpg";
import Reports from "../media/trak-reports.jpg";
import Metrics from "../media/trak-metrics.jpg";
   
  const Slideshow = () => {
    return (
      <div id="slideshow">
        <Slide easing="ease">
        <div className="each-slide">
              <img className="slide-img-tall" src={Login} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={Home} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={NewProduct} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={Products} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={Cart} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={Reports} alt="project screenshot"/>
          </div>
          <div className="each-slide">
              <img className="slide-img-tall" src={Metrics} alt="project screenshot"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;
