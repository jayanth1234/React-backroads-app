import React from "react";
import SocialLink from "./SocialLink";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import { copyrightText } from "../data";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass={"footer-links"} itemClass={"footer-link"} />
      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          return (
            <SocialLink
              {...socialLink}
              key={socialLink.id}
              itemClass={"footer-icon"}
            />
          );
        })}
      </ul>

      <p className="copyright">{copyrightText}</p>
    </footer>
  );
};

export default Footer;
