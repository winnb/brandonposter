import React from "react";
import "../styles/footer.scss";

import Mail from "../media/mail.png";
import LinkedIn from "../media/mini-linkedin.png";
import BWLogo from "../media/bw-logo-square.png";

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
          <div id="footer-block">©2020 Brandon Winn | Software Engineer</div>
          <div id="footer-links">
            <a href="/"><img className="footer-bw" src={BWLogo} alt="initials"/></a>
            <a href="mailto: winnbrandon2@gmail.com"><img className="footer-img" src={Mail} alt="mail icon"/></a>
            <a href="https://www.linkedin.com/in/brandon-winn/"><img className="footer-img" src={LinkedIn} alt="LinkedIn icon" /></a>
          </div>
      </div>
    );
  };
}

export default Footer;
