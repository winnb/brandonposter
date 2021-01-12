import React from "react";
import "../styles/navbar.scss"
import BWLogo from "../media/bw-logo-square.png";
import Home from "../media/home-icon.png";
import Search from "../media/search-icon.png";
import Doc from "../media/document-icon.png";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Width: "",
      Height: ""
    };
  }

  componentDidMount() {
    if (window.location.pathname==="/") {
      document.getElementById("nav-menu").style.display = "block";
      document.getElementById("nav-menu").style.opacity = 100;
    }
    else {
      document.getElementById("nav-menu").style.display = "none";
      document.getElementById("nav-menu").style.opacity = 0;
    }

    this.setState({Width: window.innerWidth, Height: window.innerHeight})
    window.addEventListener("resize", this.updateDimensions.bind(this));
    document.getElementById("nav-icon-holder").style.display="none";
    setTimeout(() => {
      this.setState({Width: window.innerWidth, Height: window.innerHeight})
      if (this.state.Width < this.state.Height)
          this.setMobileFormat();
      else
          this.setDesktopFormat();
    }, 1000);
  }

  updateDimensions() {
    this.setState({Width: window.innerWidth, Height: window.innerHeight})
    console.log("Window size: ("+this.state.Width+", "+this.state.Height+")");
    if (this.state.Width < this.state.Height) {
        console.log("Height greater than width")
        this.setMobileFormat();
    }
    else {
      this.setDesktopFormat();
    }
  }

  setMobileFormat() {
    // Home page
    if (window.location.pathname==="/") {
      // Adjust color block contents
      var count = document.getElementsByClassName("color-block").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block")[i].style.width="100vw";
        document.getElementsByClassName("color-block")[i].style.height="84.38vw";
      }
      count = document.getElementsByClassName("block-img").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("block-img")[i].style.width="30vw";
        document.getElementsByClassName("block-img")[i].style.marginLeft="33vw";
        document.getElementsByClassName("block-img")[i].style.marginTop="25vw";
      }
      count = document.getElementsByClassName("block-img-tall").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("block-img-tall")[i].style.width="28vw";
        document.getElementsByClassName("block-img-tall")[i].style.marginLeft="35vw";
        document.getElementsByClassName("block-img-tall")[i].style.marginTop="15vw";
        document.getElementsByClassName("block-img-tall")[i].style.marginBottom="7vw";
      }
      count = document.getElementsByClassName("block-img-short").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("block-img-short")[i].style.width="33vw";
        document.getElementsByClassName("block-img-short")[i].style.marginLeft="35vw";
        document.getElementsByClassName("block-img-short")[i].style.marginTop="30vw";
        document.getElementsByClassName("block-img-short")[i].style.marginBottom="15vw";
      }
      count = document.getElementsByClassName("block-img-lg").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("block-img-lg")[i].style.width="50vw";
        document.getElementsByClassName("block-img-lg")[i].style.marginLeft="25vw";
        document.getElementsByClassName("block-img-lg")[i].style.marginTop="10vw";
        document.getElementsByClassName("block-img-lg")[i].style.marginBottom="5vw";
      }
      count = document.getElementsByClassName("color-block-text-1").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block-text-1")[i].style.fontSize="3.7vw";
        document.getElementsByClassName("color-block-text-1")[i].style.top="auto";
        if (i%3===1)
          document.getElementsByClassName("color-block-text-1")[i].style.marginTop="4vw";
        if (i%3===2)
          document.getElementsByClassName("color-block-text-1")[i].style.marginTop="8vw";
      }
      count = document.getElementsByClassName("color-block-text-2").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block-text-2")[i].style.fontSize="3.7vw";
        document.getElementsByClassName("color-block-text-2")[i].style.top="auto";
        if (i%3===1)
          document.getElementsByClassName("color-block-text-2")[i].style.marginTop="4vw";
        if (i%3===2)
          document.getElementsByClassName("color-block-text-2")[i].style.marginTop="8vw";
      }
      count = document.getElementsByClassName("color-block-text-3").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block-text-3")[i].style.fontSize="3.7vw";
        document.getElementsByClassName("color-block-text-3")[i].style.top="auto";
        if (i%3===1)
          document.getElementsByClassName("color-block-text-3")[i].style.marginTop="4vw";
        if (i%3===2)
          document.getElementsByClassName("color-block-text-3")[i].style.marginTop="8vw";
      }
      count = document.getElementsByClassName("color-block-text-4").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block-text-4")[i].style.fontSize="3.7vw";
        document.getElementsByClassName("color-block-text-4")[i].style.top="auto";
        if (i%3===1)
          document.getElementsByClassName("color-block-text-4")[i].style.marginTop="4vw";
        if (i%3===2)
          document.getElementsByClassName("color-block-text-4")[i].style.marginTop="8vw";
      }
      count = document.getElementsByClassName("color-block-lines").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block-lines")[i].style.letterSpacing="-0.8vw";
      }  
      // Adjust footer content
      document.getElementById("footer").style.display = "none";
      // Adjust about me content
      document.getElementById("about-box").style.height="80vw";
      document.getElementById("about-box").style.width="80vw";
      document.getElementById("about-box").style.left="10vw";
      document.getElementsByClassName("home-background")[0].style.height="100vw";
      document.getElementsByClassName("bio-line")[0].style.fontSize="4vw";
      document.getElementsByClassName("bio-line")[1].style.fontSize="2vw";
      document.getElementsByClassName("bio-line")[2].style.fontSize="2vw";
      document.getElementsByClassName("bio-line")[3].style.fontSize="3vw";
      document.getElementsByClassName("bio-line")[4].style.fontSize="2vw";
      document.getElementsByClassName("bio-line")[5].style.fontSize="3vw";
      document.getElementsByClassName("bio-line")[6].style.fontSize="3vw";
      document.getElementsByClassName("bio-line")[7].style.fontSize="2vw";
      document.getElementsByClassName("bio-line")[8].style.fontSize="2vw";
      document.getElementById("scroll-hint").style.display="none";
      document.getElementById("linkedin-holder").style.top="32vw";
      document.getElementById("linkedin-holder").style.left="61vw";
      document.getElementById("linkedin").style.width="5vw";
      // Adjust navbar content
      document.getElementById("portfolio-logo").style.fontSize="5vw";
      document.getElementById("portfolio-logo").style.left="6vw";
      document.getElementById("bw").style.width="6vw";
      document.getElementById("menu-button").style.display="none";
      document.getElementById("nav-menu").style.display="none";
      document.getElementById("nav-icon-holder").style.display="block";
    }
    // Resume page
    else if (window.location.pathname==="/resume") {
      document.getElementsByClassName("home-background")[0].style.height="240vw";
      document.getElementById("home-hint").style.display="none";
      // Adjust resume content
      document.getElementById("resume-holder").style.left="10vw";
      document.getElementById("resume-holder").style.top="16vw";
      document.getElementById("resume-holder").style.width="70vw";
      document.getElementById("resume-holder").style.height="106.8vw";
      document.getElementById("resume").style.width="80vw";
      document.getElementById("resume").style.height="106.8vw";
      document.getElementById("resume").data = document.getElementById("resume").data;
      document.getElementById("resume-contents").style.left="0vw";
      document.getElementById("resume-contents").style.width="70vw";
      document.getElementById("resume-contents").style.fontSize="1.625vw";
      document.getElementsByClassName("name")[0].style.fontSize="3.75vw";
      count = document.getElementsByTagName("b").length;
      for (var i=0; i<count; i++)
        document.getElementsByTagName("b")[i].style.fontSize="1.875vw";
      // Adjust footer content
      document.getElementById("footer").style.height="20vw";
      // Adjust navbar content
      document.getElementById("portfolio-logo").style.fontSize="5vw";
      document.getElementById("portfolio-logo").style.left="6vw";
      document.getElementById("bw").style.width="6vw";
      document.getElementById("menu-button").style.display="none";
      document.getElementById("nav-menu").style.display="none";
      document.getElementById("nav-icon-holder").style.display="block";
    }
    // Projects page
    else if (window.location.pathname==="/projects") {
      if (document.getElementById("in-mobile-format").innerText === "False") {
        document.getElementById("in-mobile-format").innerText = "True";
        document.getElementById("project-background").style.height="240vw";
      }
      document.getElementById("home-hint").style.display="none";
      document.getElementById("project-page-holder").style.left="2.5vw";
      // Adjust tag content
      document.getElementsByClassName("tag-title")[0].style.width="100vw";
      document.getElementsByClassName("tag-subtitle")[0].style.width="100vw";
      document.getElementsByClassName("tag-title")[0].style.fontSize="8vw";
      document.getElementsByClassName("tag-subtitle")[0].style.fontSize="2vw";
      document.getElementById("all-tags").style.fontSize="2vw";
      document.getElementById("all-tags").style.width="95vw";
      count = document.getElementsByClassName("long-tag").length;
      for (var i=0; i<count; i++)
        document.getElementsByClassName("long-tag")[i].style.width="21vw";
      // Adjust preview content
      document.getElementById("project-preview-title").style.width="100vw";
      document.getElementById("all-projects").style.width="95vw";
      count = document.getElementsByClassName("preview-title").length;
      for (var i=0; i<count; i++)
        document.getElementsByClassName("preview-title")[i].style.fontSize="3vw";
      count = document.getElementsByClassName("preview-box").length;
      for (var i=0; i<count; i++)
        document.getElementsByClassName("preview-box")[i].style.width="80vw";
      count = document.getElementsByClassName("project-preview-img-lg").length;
      for (var i=0; i<count; i++)
        document.getElementsByClassName("project-preview-img-lg")[i].style.width="60vw";
      count = document.getElementsByClassName("box-tag-holder").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("box-tag-holder")[i].style.width="75vw";
        document.getElementsByClassName("box-tag-holder")[i].style.marginLeft="2.5vw";
        document.getElementsByClassName("box-tag-holder")[i].style.marginRight="2.5vw";
        document.getElementsByClassName("box-tag-holder")[i].style.marginTop="2.5vw";
        document.getElementsByClassName("box-tag-holder")[i].style.marginBottom="2.5vw";
      }
      count = document.getElementsByClassName("preview-tag").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("preview-tag")[i].style.width="auto";
        document.getElementsByClassName("preview-tag")[i].style.fontSize="2vw";
        document.getElementsByClassName("preview-tag")[i].style.padding="0.5vw";
      }
      count = document.getElementsByClassName("preview-tag-long").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("preview-tag-long")[i].style.width="auto";
        document.getElementsByClassName("preview-tag-long")[i].style.fontSize="2vw";
        document.getElementsByClassName("preview-tag-long")[i].style.padding="0.5vw";
      }
      count = document.getElementsByClassName("preview-tag-xl").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("preview-tag-xl")[i].style.width="auto";
        document.getElementsByClassName("preview-tag-xl")[i].style.fontSize="2vw";
        document.getElementsByClassName("preview-tag-xl")[i].style.padding="0.5vw";
      }
      // Adjust footer content
      document.getElementById("footer").style.height="20vw";
      // Adjust navbar content
      document.getElementById("portfolio-logo").style.fontSize="5vw";
      document.getElementById("portfolio-logo").style.left="6vw";
      document.getElementById("bw").style.width="6vw";
      document.getElementById("menu-button").style.display="none";
      document.getElementById("nav-menu").style.display="none";
      document.getElementById("nav-icon-holder").style.display="block";
    }
  }

  setDesktopFormat() {
    // Home page
    if (window.location.pathname==="/") {
      // Adjust color block contents
      var count = document.getElementsByClassName("color-block").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block")[i].style.width="33.33vw";
        document.getElementsByClassName("color-block")[i].style.height="28.125vw";
      }
      count = document.getElementsByClassName("block-img").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("block-img")[i].style.width="10vw";
        document.getElementsByClassName("block-img")[i].style.marginLeft="10vw";
        document.getElementsByClassName("block-img")[i].style.marginTop="10vw";
      }
      count = document.getElementsByClassName("block-img-tall").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("block-img-tall")[i].style.width="8vw";
        document.getElementsByClassName("block-img-tall")[i].style.marginLeft="12vw";
        document.getElementsByClassName("block-img-tall")[i].style.marginTop="7vw";
        document.getElementsByClassName("block-img-tall")[i].style.marginBottom="0vw";
      }
      count = document.getElementsByClassName("block-img-short").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("block-img-short")[i].style.width="13vw";
        document.getElementsByClassName("block-img-short")[i].style.marginLeft="9.5vw";
        document.getElementsByClassName("block-img-short")[i].style.marginTop="10vw";
        document.getElementsByClassName("block-img-short")[i].style.marginBottom="0vw";
      }
      count = document.getElementsByClassName("block-img-lg").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("block-img-lg")[i].style.width="18vw";
        document.getElementsByClassName("block-img-lg")[i].style.marginLeft="6vw";
        document.getElementsByClassName("block-img-lg")[i].style.marginTop="4vw";
        document.getElementsByClassName("block-img-lg")[i].style.marginBottom="0vw";
      }
      count = document.getElementsByClassName("color-block-text-1").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block-text-1")[i].style.fontSize="1.1vw";
        document.getElementsByClassName("color-block-text-1")[i].style.top="78vw";
        if (i%3===1)
          document.getElementsByClassName("color-block-text-1")[i].style.marginTop="2vw";
        if (i%3===2)
          document.getElementsByClassName("color-block-text-1")[i].style.marginTop="4vw";
      }
      count = document.getElementsByClassName("color-block-text-2").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block-text-2")[i].style.fontSize="1.1vw";
        document.getElementsByClassName("color-block-text-2")[i].style.top="106vw";
        if (i%3===1)
          document.getElementsByClassName("color-block-text-2")[i].style.marginTop="2vw";
        if (i%3===2)
          document.getElementsByClassName("color-block-text-2")[i].style.marginTop="4vw";
      }
      count = document.getElementsByClassName("color-block-text-3").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block-text-3")[i].style.fontSize="1.1vw";
        document.getElementsByClassName("color-block-text-3")[i].style.top="134vw";
        if (i%3===1)
          document.getElementsByClassName("color-block-text-3")[i].style.marginTop="2vw";
        if (i%3===2)
          document.getElementsByClassName("color-block-text-3")[i].style.marginTop="4vw";
      }
      count = document.getElementsByClassName("color-block-text-4").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block-text-4")[i].style.fontSize="1.1vw";
        document.getElementsByClassName("color-block-text-4")[i].style.top="162vw";
        if (i%3===1)
          document.getElementsByClassName("color-block-text-4")[i].style.marginTop="2vw";
        if (i%3===2)
          document.getElementsByClassName("color-block-text-4")[i].style.marginTop="4vw";
      }
      count = document.getElementsByClassName("color-block-lines").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("color-block-lines")[i].style.letterSpacing="-0.2vw";
      }  
      // Adjust footer content
      document.getElementById("footer").style.display = "block";
      // Adjust about me content
      document.getElementById("about-box").style.height="41vw";
      document.getElementById("about-box").style.width="50vw";
      document.getElementById("about-box").style.left="25vw";
      document.getElementsByClassName("home-background")[0].style.height="auto";
      document.getElementsByClassName("bio-line")[0].style.fontSize="2vw";
      document.getElementsByClassName("bio-line")[1].style.fontSize="1vw";
      document.getElementsByClassName("bio-line")[2].style.fontSize="1vw";
      document.getElementsByClassName("bio-line")[3].style.fontSize="1.5vw";
      document.getElementsByClassName("bio-line")[4].style.fontSize="1vw";
      document.getElementsByClassName("bio-line")[5].style.fontSize="1.5vw";
      document.getElementsByClassName("bio-line")[6].style.fontSize="1.5vw";
      document.getElementsByClassName("bio-line")[7].style.fontSize="1vw";
      document.getElementsByClassName("bio-line")[8].style.fontSize="1vw";
      document.getElementById("scroll-hint").style.display="block";
      document.getElementById("linkedin-holder").style.top="24.5vw";
      document.getElementById("linkedin-holder").style.left="53.5vw";
      document.getElementById("linkedin").style.width="2.5vw";
      // Adjust navbar content
      document.getElementById("portfolio-logo").style.fontSize="2.5vw";
      document.getElementById("portfolio-logo").style.left="12vw";
      document.getElementById("bw").style.width="3.5vw";
      document.getElementById("menu-button").style.display="block";
      document.getElementById("nav-menu").style.display="block";
      document.getElementById("nav-icon-holder").style.display="none"; 
    }
    else if (window.location.pathname==="/resume") {
      document.getElementsByClassName("home-background")[0].style.height="auto";
      document.getElementById("home-hint").style.display="block";
      // Adjust resume content
      document.getElementById("resume-holder").style.left="33.3vw";
      document.getElementById("resume-holder").style.top="8vw";
      document.getElementById("resume-holder").style.width="33.3vw";
      document.getElementById("resume-holder").style.height="44.5vw";
      document.getElementById("resume").style.width="33.3vw";
      document.getElementById("resume").style.height="44.5vw";
      document.getElementById("resume").data = document.getElementById("resume").data;
      document.getElementById("resume-contents").style.left="30vw";
      document.getElementById("resume-contents").style.width="35vw";
      document.getElementById("resume-contents").style.fontSize="0.65vw";
      document.getElementsByClassName("name")[0].style.fontSize="1.5vw";
      count = document.getElementsByTagName("b").length;
      for (var i=0; i<count; i++)
        document.getElementsByTagName("b")[i].style.fontSize="0.75vw";
      // Adjust footer content
      document.getElementById("footer").style.height="8.5vw";
      // Adjust navbar content
      document.getElementById("portfolio-logo").style.fontSize="2.5vw";
      document.getElementById("portfolio-logo").style.left="12vw";
      document.getElementById("bw").style.width="3.5vw";
      document.getElementById("menu-button").style.display="block";
      document.getElementById("nav-menu").style.display="block";
      document.getElementById("nav-icon-holder").style.display="none"; 
    }
    // Projects page
    else if (window.location.pathname==="/projects") {
      if (document.getElementById("in-mobile-format").innerText === "True") {
        document.getElementById("in-mobile-format").innerText = "False";
        document.getElementById("project-background").style.height="60vw";
      }
      document.getElementById("home-hint").style.display="block";
      document.getElementById("project-page-holder").style.left="10vw";
      // Adjust tag content
      document.getElementsByClassName("tag-title")[0].style.width="80vw";
      document.getElementsByClassName("tag-subtitle")[0].style.width="80vw";
      document.getElementsByClassName("tag-title")[0].style.fontSize="4vw";
      document.getElementsByClassName("tag-subtitle")[0].style.fontSize="1vw";
      document.getElementById("all-tags").style.fontSize="1vw";
      document.getElementById("all-tags").style.width="80vw";
      count = document.getElementsByClassName("long-tag").length;
      for (var i=0; i<count; i++)
        document.getElementsByClassName("long-tag")[i].style.width="10.5vw";
      // Adjust preview content
      document.getElementById("project-preview-title").style.width="80vw";
      document.getElementById("all-projects").style.width="80vw";
      count = document.getElementsByClassName("preview-title").length;
      for (var i=0; i<count; i++)
        document.getElementsByClassName("preview-title")[i].style.fontSize="1.25vw";
      count = document.getElementsByClassName("preview-box").length;
      for (var i=0; i<count; i++)
        document.getElementsByClassName("preview-box")[i].style.width="20vw";
      count = document.getElementsByClassName("project-preview-img-lg").length;
      for (var i=0; i<count; i++)
        document.getElementsByClassName("project-preview-img-lg")[i].style.width="18vw";
      count = document.getElementsByClassName("box-tag-holder").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("box-tag-holder")[i].style.width="18vw";
        document.getElementsByClassName("box-tag-holder")[i].style.marginLeft="1vw";
        document.getElementsByClassName("box-tag-holder")[i].style.marginRight="1vw";
        document.getElementsByClassName("box-tag-holder")[i].style.marginTop="0vw";
        document.getElementsByClassName("box-tag-holder")[i].style.marginBottom="0vw";
      }
      count = document.getElementsByClassName("preview-tag").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("preview-tag")[i].style.width="1.5vw";
        document.getElementsByClassName("preview-tag")[i].style.fontSize="0.5vw";
        document.getElementsByClassName("preview-tag")[i].style.padding="0vw";
      }
      count = document.getElementsByClassName("preview-tag-long").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("preview-tag-long")[i].style.width="3.5vw";
        document.getElementsByClassName("preview-tag-long")[i].style.fontSize="0.5vw";
        document.getElementsByClassName("preview-tag-long")[i].style.padding="0vw";
      }
      count = document.getElementsByClassName("preview-tag-xl").length;
      for (var i=0; i<count; i++) {
        document.getElementsByClassName("preview-tag-xl")[i].style.width="5.5vw";
        document.getElementsByClassName("preview-tag-xl")[i].style.fontSize="0.5vw";
        document.getElementsByClassName("preview-tag-xl")[i].style.padding="0vw";
      }
      // Adjust footer content
      document.getElementById("footer").style.height="8.5vw";
      // Adjust navbar content
      document.getElementById("portfolio-logo").style.fontSize="2.5vw";
      document.getElementById("portfolio-logo").style.left="12vw";
      document.getElementById("bw").style.width="3.5vw";
      document.getElementById("menu-button").style.display="block";
      document.getElementById("nav-menu").style.display="block";
      document.getElementById("nav-icon-holder").style.display="none"; 
    }
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
          <div id="nav-icon-holder">
            <a href="/"><img className="nav-icon" src={Home} /></a>
            <a href="/projects"><img className="nav-icon" src={Search} /></a>
            <a href="/resume"><img className="nav-icon" src={Doc} /></a>
          </div>
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
