import React, { useLayoutEffect, useState } from "react";
import "../styles/colorblocks.scss";

import Puppy from "../media/puppy.png";
import Book from "../media/book.png";
import Visualizer from "../media/visualizer.png";
import Brain from "../media/brain.png";
import Pie from "../media/pie.png";
import Takeout from "../media/takeout.png";
import Apple from "../media/apple.png";
import Bomber from "../media/bomber.png";
import Doll from "../media/doll.png";
import Bottle from "../media/bottle.png";
import Plane from "../media/plane.png";
import Burger from "../media/burger.png";

class ColorBlocks extends React.Component {

  render() {
    return (
      <div id="color-blocks">
          {/* Row 1 */}
          <a href="/restaurateur" className="color-block yellow-block">
            <img className="block-img" id="takeout" src={Takeout} alt="takeout"/>
            <div className="color-block-text-1">Restaurateur</div>
            <div className="color-block-text-1 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-1" style={{marginTop: "4vw"}}>A SQL database for managing a small business</div>
          </a>
          <a href="/divide+conquer" className="color-block orange-block">
            <img className="block-img" id="pie" src={Pie} alt="pie" />
            <div className="color-block-text-1">Divide and Conquer</div>
            <div className="color-block-text-1 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-1" style={{marginTop: "4vw"}}>A Java runtime optimization algorithm</div>
          </a>
          <a href="/ortega+time" className="color-block red-block">
            <img className="block-img" id="apple" src={Apple} alt="apple" />
            <div className="color-block-text-1">Ortega Time</div>
            <div className="color-block-text-1 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-1" style={{marginTop: "4vw"}}>A React.js educational tool for distance learning</div>
          </a>
          {/* Row 2 */}
          <a href="/pooch" className="color-block green-block">
            <img className="block-img" id="puppy" src={Puppy} alt="puppy"/>
            <div className="color-block-text-2">Pooch</div>
            <div className="color-block-text-2 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-2" style={{marginTop: "4vw"}}>A React.js pet care web service</div>
          </a>
          <a href="/maternal" className="color-block blue-block">
            <img className="block-img" id="brain" src={Brain} alt="brain" />
            <div className="color-block-text-2">Maternal</div>
            <div className="color-block-text-2 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-2" style={{marginTop: "4vw"}}>A TensorFlow machine learning model</div>
          </a>
          <a href="/alexandria" className="color-block purple-block">
            <img className="block-img" id="book" src={Book} alt="book"/>
            <div className="color-block-text-2">Alexandria</div>
            <div className="color-block-text-2 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-2" style={{marginTop: "4vw"}}>A C# library web service</div>
          </a>
          {/* Row 3 */}
          <a href="/confidence+limits" className="color-block pink-block">
            <img className="block-img" id="visualizer" src={Visualizer} alt="visualizer" />
            <div className="color-block-text-3">Confidence Limits</div>
            <div className="color-block-text-3 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-3" style={{marginTop: "4vw"}}>A Python data visualization tool</div>
          </a>
          <a href="/shuffle" className="color-block lime-block">
            <img className="block-img-tall" id="doll" src={Doll} alt="takeout"/>
            <div className="color-block-text-3">Shuffle</div>
            <div className="color-block-text-3 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-3" style={{marginTop: "4vw"}}>A C++ generic sorting algorithm</div>
          </a>
          <a href="/ddos" className="color-block sapphire-block">
            <img className="block-img-lg" id="bomber" src={Bomber} alt="bomber" />
            <div className="color-block-text-3">Website Killer</div>
            <div className="color-block-text-3 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-3" style={{marginTop: "4vw"}}>A Java denial of service cyberattack</div>
          </a>
          {/* Row 4 */}
          <a href="/healthy+belly" className="color-block yellow-block-2">
            <img className="block-img-tall" id="bottle" src={Bottle} alt="baby bottle"/>
            <div className="color-block-text-4">Healthy Belly</div>
            <div className="color-block-text-4 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-4" style={{marginTop: "4vw"}}>An Android food scanner app</div>
          </a>
          <a href="/grumble" className="color-block orange-block-2">
            <img className="block-img" id="burger" src={Burger} alt="burger" />
            <div className="color-block-text-4">Grumble</div>
            <div className="color-block-text-4 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-4" style={{marginTop: "4vw"}}>A Java Spring Boot food microservice</div>
            
          </a>
          <a href="/trak" className="color-block red-block-2">
            <img className="block-img-short" id="plane" src={Plane} alt="plane" />
            <div className="color-block-text-4">Trak</div>
            <div className="color-block-text-4 color-block-lines" style={{marginTop: "2vw", letterSpacing:"-0.2vw"}}>——————————————————————————</div>
            <div className="color-block-text-4" style={{marginTop: "4vw"}}>A React.js enterprise inventory management system</div>
          </a>
      </div>
    );
  };
}

export default ColorBlocks;
