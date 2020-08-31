import React from "react";
import Giants from "../media/giants-flipped.jpg";

class Home extends React.Component {
  render() {
    return (
      <div id="home-page">
        <img className="home-background" src={Giants} alt="giants causeway mirrored"/>
      </div>
    );
  };
}

export default Home;
