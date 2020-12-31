import React from "react";
// import Spring from "../media/spring.jpg";
// import Field from "../media/field.mp4";
// import Summer from "../media/dunes.jpg";
// import Fall from "../media/fall.jpg";
// import Winter from "../media/winter.jpg";
// import Golden from "../media/golden.jpg";
import "../styles/home.scss";

import Preview from "../components/preview";
import Blue from "../media/blue.jpg";
import AboutMe from "../components/aboutme";
import ColorBlocks from "../components/colorblocks";

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <img className="home-background" src={Blue} alt="Abstract background"/>       
        <AboutMe/>
        <ColorBlocks/>
        </div>
    );
  };
}

export default Home;
