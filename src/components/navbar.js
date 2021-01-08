import React from "react";
import "../styles/navbar.scss"
import BWLogo from "../media/bw-logo-square.png";

class NavBar extends React.Component {

  componentDidMount() {
    document.getElementById("nav-menu").style.opacity = 100;
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
          <a id="portfolio-logo" href="/"><img id="bw" src={BWLogo} alt="bw logo"/>Brandon Winn's Portfolio</a>
          <div id="menu-button" onClick={this.openMenu} onMouseEnter={this.openMenu} unselectable="on">☰</div>
          <div id="nav-menu" onMouseLeave={this.openMenu}>
            <div id="nav-menu-projects"><a href="/" className="nav-item">Home</a></div>
            <div id="nav-menu-about"><a href="/projects" className="nav-item">Search</a></div>
            <div id="nav-menu-about"><a href="/resume" className="nav-item">Resume</a></div>
          </div>
        </nav>
    );
  }
}

export default NavBar;
