import React from "react";
import "../styles/navbar.scss"
import BW from "../media/BW.png";
import Home from "../media/home-logo.png";
import About from "../media/about-logo.png";
import Projects from "../media/projects-logo.png";

class NavBar extends React.Component {

  componentDidMount() {
    document.getElementById("nav-menu").style.opacity = 0;
  }

  openMenu() {
      if (parseInt(document.getElementById("nav-menu").style.opacity) > 0) {
        var op = 1;  // initial opacity
        var timer = setInterval(function () {
            if (op <= 0.1){
                clearInterval(timer);
                document.getElementById("nav-menu").style.display = 'none';
            }
            document.getElementById("nav-menu").style.opacity = op;
            document.getElementById("nav-menu").style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 5);
    }
    else {
      var op = 0.1;  // initial opacity
    document.getElementById("nav-menu").style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        document.getElementById("nav-menu").style.opacity = op;
        document.getElementById("nav-menu").style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 5);
    }
  }

  render() {
    return (
        <nav className="nav-bar" >
          <a id="portfolio-logo" href="https://www.linkedin.com/in/brandon-winn/"><img id="bw" src={BW}  alt="Site logo"/>Brandon Winn's Portfolio</a>
          <a id="home-button" href="/"><img id="home-img" src={Home}  alt="Home button"/></a>
          <div id="menu-button" onClick={this.openMenu} unselectable="on">☰</div>
          <div id="nav-menu">
            <div id="nav-menu-projects"><a href="/projects" className="nav-item"><img id="projects-img" src={Projects}  alt="Projects link"/></a></div>
            <div id="nav-menu-about"><a href="/about" className="nav-item"><img id="about-img" src={About}  alt="About me link"/></a></div>
          </div>
        </nav>
    );
  }
}

export default NavBar;
