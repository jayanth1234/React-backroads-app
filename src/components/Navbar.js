import React from "react";
// Logo navbar imports
import navbarLogo from "../images/logo.svg";
import SocialLink from "./SocialLink";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={navbarLogo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass={"nav-links"} itemClass={"nav-link"} />

        <ul className="nav-icons">
          {socialLinks.map((socialLink) => {
            return (
              <SocialLink
                {...socialLink}
                key={socialLink.id}
                itemClass={"nav-icon"}
              />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
