import React from "react";
import "../styles/navbar.scss"
import BWLogo from "../media/bw-logo-square.png";

class NavBar extends React.Component {

  componentDidMount() {
    if (window.location.pathname==="/") {
      document.getElementById("nav-menu").style.display = "block";
      document.getElementById("nav-menu").style.opacity = 100;
    }
    else {
      document.getElementById("nav-menu").style.display = "none";
      document.getElementById("nav-menu").style.opacity = 0;
    }
  }

//   openMenu() {
//     if (document.getElementById("nav-menu").style.display === "none") {
//       var op = 0;  // initial opacity
//       for (var i=0; i<100; i++) {
//         setTimeout(function() { 
//           document.getElementById("nav-menu").style.opacity = op;
//           op += 0.01;
//         }, 10); 
//       }
//       setTimeout(function() { 
//         document.getElementById("nav-menu").style.display = "block";
//       }, 1000);
//     }
//     else {
//       var op = 1;  // initial opacity
//       for (var i=0; i<100; i++) {
//         setTimeout(function() { 
//           document.getElementById("nav-menu").style.opacity = op;
//           op -= 0.01;
//         }, 10); 
//       }
//       setTimeout(function() { 
//         document.getElementById("nav-menu").style.display = "none";
//       }, 1000);
//   }
// }
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
            <div id="nav-home" className="nav-item"><a href="/" className="nav-link">Home</a></div>
            <div id="nav-projects" className="nav-item"><a href="/projects" className="nav-link">Projects</a></div>
            <div id="nav-resume" className="nav-item"><a href="/resume" className="nav-link">Resume</a></div>
          </div>
        </nav>
    );
  }
}

export default NavBar;
