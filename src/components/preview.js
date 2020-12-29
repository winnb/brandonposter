import React from "react";
import "../styles/home.scss";

import Pooch from "../media/pooch-screen.png";
import Pooch2 from "../media/pooch-screen-2.png";
import CSharp from "../media/c-mvc-screen.png";
import CSharp2 from "../media/c-mvc-screen-2.png";
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
        {/* React.js Pooch Preview */}
        <a href="#pooch-box-lg" className="white-box" id="pooch-box-s">
          <img id="clipboard" src={Pooch}/>
          <img id="clipboard" src={Pooch2}/>
          <div className="box-text">Web service built with React.js/JavaScript/HTML/CSS</div>
        </a>
        {/* C# MVC Preview */}
        <a href="#mvc-box-lg" className="white-box" id="mvc-box-s">
          <img id="csharp" src={CSharp}/>
          <img id="csharp" src={CSharp2}/>
          <div className="box-text">Web service built with C#/ASP.NET Core/MVC</div>
        </a>
        {/* Python Confidence Interval Preview */}
        <a href="#confidence-box-lg" className="white-box" id="confidence-box-s">
          <img id="clipboard" src={Python}/>
          <img id="python" src={Python2}/>
          <div className="box-text">Data visualization/confidence interval tool built with Python</div>
        </a>
        {/* TensorFlow ML Preview */}
        <a href="/zoom-links" className="white-box-lg" id="box4">
          <img id="clipboard" src={Tensor}/>
          <img id="python" src={Tensor2}/>
          <img id="clipboard" src={Tensor3}/>
          <div className="box-text">Machine learning model made with Python/GCP/TensorFlow/BigQuery/ETL Pipelines</div>
        </a>
        {/* Java Divide and Conquer Preview */}
        <a href="#conquer-box-lg" className="white-box-lg" id="conquer-box-s">
          <img id="clipboard" src={Java}/>
          <img id="python" src={Java2}/>
          <img id="python" src={Java3}/>
          <div className="box-text">Divide and conquer algorithm implementation made with Java for code runtime optimization using recursion</div>
        </a>
      </div>
    );
  };
}

export default Preview;
