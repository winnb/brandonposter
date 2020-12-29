import React from "react";
import "../styles/home.scss";

import Purple from "../media/purple.jpg";
import Orange from "../media/orange.jpg";
import Blue from "../media/blue.jpg";
import BWFooter from "../media/bw-footer.jpg";

class Backgrounds extends React.Component {
  render() {
    return (
      <div>
        <img className="home-background" src={Purple}/>
        <div id="white-bg"/>
        <img className="home-background" src={Orange}/>
        <div id="white-bg"/>
        <img className="home-background" src={Blue}/>
        <img className="home-background" src={BWFooter}/>
      </div>
    );
  };
}

export default Backgrounds;
