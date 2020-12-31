import React from "react";
import "../styles/home.scss";

import BWFooter from "../media/bw-footer.jpg";

class Footer extends React.Component {
  render() {
    return (
      <div id="home-page">
          <img className="home-background" src={BWFooter} alt="Page footer"/>
      </div>
    );
  };
}

export default Footer;
