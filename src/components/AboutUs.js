import React from "react";
import aboutUsImage from "../images/about.jpeg";
import Title from "./Title";
import {
  aboutUsDescText,
  aboutUsMainText,
  readMoreButtonText,
} from "../constants";

const AboutUs = () => {
  return (
    <section className="section" id="about">
      <Title mainTitle={"about"} subTitle={"us"} />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutUsImage} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>{aboutUsMainText}</h3>
          <p>{aboutUsDescText}</p>
          <p>{aboutUsDescText}</p>
          <a href="/#" className="btn">
            {readMoreButtonText}
          </a>
        </article>
      </div>
    </section>
  );
};

export default AboutUs;
