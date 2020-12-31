import React from "react";
import "../styles/home.scss";

import Pooch from "../media/pooch-screen.png";
import Pooch2 from "../media/pooch-screen-2.png";
import Csharp from "../media/c-mvc-screen.png";
import Csharp2 from "../media/c-mvc-screen-2.png";
import Python from "../media/python-screen.png";
import Python2 from "../media/python-screen-2.png";
import Tensor from "../media/tensorflow-screen.png";
import Tensor2 from "../media/tensorflow-screen-2.png";
import Tensor3 from "../media/tensorflow-screen-3.png";
import Java from "../media/java-screen.png";
import Java2 from "../media/java-screen-2.png";
import Java3 from "../media/java-screen-3.png";

class Preview extends React.Component {
  render() {
    return (
      <div>
        <div id="preview-title">Portfolio Projects</div>
        <div id="preview-subtitle">Click on a preview to see more!</div>
        {/* React.js Pooch Preview */}
        <a href="/projects#pooch-box-lg" className="white-box" id="pooch-box-s">
          <img id="preview-img-orig" src={Pooch} alt="Project preview icon"/>
          <img id="preview-img-orig" src={Pooch2} alt="Project preview icon"/>
          <div className="box-text">Web service built with React.js/JavaScript/HTML/CSS</div>
        </a>
        {/* C# MVC Preview */}
        <a href="/projects#mvc-box-lg" className="white-box" id="mvc-box-s">
          <img id="preview-img-invert" src={Csharp} alt="Project preview icon"/>
          <img id="preview-img-invert" src={Csharp2} alt="Project preview icon"/>
          <div className="box-text">Web service built with C#/ASP.NET Core/MVC</div>
        </a>
        {/* Python Confidence Interval Preview */}
        <a href="/projects#confidence-box-lg" className="white-box" id="confidence-box-s">
          <img id="preview-img-orig" src={Python} alt="Project preview icon"/>
          <img id="python" src={Python2} alt="Project preview icon"/>
          <div className="box-text">Data visualization/confidence interval tool built with Python</div>
        </a>
        {/* TensorFlow ML Preview */}
        <a href="/projects" className="white-box-lg" id="box4">
          <img id="preview-img-orig" src={Tensor} alt="Project preview icon"/>
          <img id="python" src={Tensor2} alt="Project preview icon"/>
          <img id="preview-img-orig" src={Tensor3} alt="Project preview icon"/>
          <div className="box-text">Machine learning model made with Python/GCP/TensorFlow/BigQuery/ETL Pipelines</div>
        </a>
        {/* Java Divide and Conquer Preview */}
        <a href="/projects#conquer-box-lg" className="white-box-lg" id="conquer-box-s">
          <img id="preview-img-orig" src={Java} alt="Project preview icon"/>
          <img id="python" src={Java2} alt="Project preview icon"/>
          <img id="python" src={Java3} alt="Project preview icon"/>
          <div className="box-text">Divide and conquer algorithm implementation made with Java for code runtime optimization using recursion</div>
        </a>
      </div>
    );
  };
}

export default Preview;
