import React from "react";
import "../styles/colorblocks.scss";

import Puppy from "../media/puppy.png";
import Book from "../media/book.png";
import Visualizer from "../media/visualizer.png";
import Brain from "../media/brain.png";
import Pie from "../media/pie.png";
import Takeout from "../media/takeout.png";

class ColorBlocks extends React.Component {
  render() {
    return (
      <div id="color-blocks">
          <a href="/projects#restaurantuer" className="color-block yellow-block">
            <img className="block-img" id="takeout" src={Takeout} alt="takeout"/>
            <div className="color-block-text-1">Restaurantuer</div>
            <div className="color-block-text-1" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-1" style={{marginTop: "4vw"}}>A SQL database for managing a small business</div>
          </a>
          <a href="/projects#divide+conquer" className="color-block orange-block">
            <img className="block-img" id="pie" src={Pie} alt="pie" />
            <div className="color-block-text-1">Divide and Conquer</div>
            <div className="color-block-text-1" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-1" style={{marginTop: "4vw"}}>A Java runtime optimization algorithm</div>
          </a>
          <a href="/projects#confidence+limits" className="color-block red-block">
            <img className="block-img" id="visualizer" src={Visualizer} alt="visualizer" />
            <div className="color-block-text-1">Confidence Limits</div>
            <div className="color-block-text-1" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-1" style={{marginTop: "4vw"}}>A Python data visualization tool</div>
          </a>
          <a href="/projects#pooch" className="color-block green-block">
            <img className="block-img" id="puppy" src={Puppy} alt="puppy"/>
            <div className="color-block-text-2">Pooch</div>
            <div className="color-block-text-2" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-2" style={{marginTop: "4vw"}}>A React.js pet care web service</div>
          </a>
          <a href="/projects#maternal" className="color-block blue-block">
            <img className="block-img" id="brain" src={Brain} alt="brain" />
            <div className="color-block-text-2">Maternal</div>
            <div className="color-block-text-2" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-2" style={{marginTop: "4vw"}}>A TensorFlow machine learning model</div>
          </a>
          <a href="/projects#alexandria" className="color-block purple-block">
            <img className="block-img" id="book" src={Book} alt="book"/>
            <div className="color-block-text-2">Alexandria</div>
            <div className="color-block-text-2" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-2" style={{marginTop: "4vw"}}>A C# library web service</div>
          </a>
      </div>
    );
  };
}

export default ColorBlocks;
