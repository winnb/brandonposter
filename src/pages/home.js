import React from "react";
import Spring from "../media/spring.jpg";
import Field from "../media/field.mp4";
import Summer from "../media/dunes.jpg";
import Fall from "../media/fall.jpg";
import Winter from "../media/winter.jpg";
import Golden from "../media/golden.jpg";
import "../styles/home.scss";

import Backgrounds from "../components/backgrounds";
import Preview from "../components/preview";
import Projects from "../components/projects";

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <Backgrounds />
        <Preview />
        <Projects />
        </div>
    );
  };
}

export default Home;
