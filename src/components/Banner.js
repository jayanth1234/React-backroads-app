import React from "react";
import { bannerDesc, bannerTitle } from "../constants";

const Banner = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>{bannerTitle}</h1>
        <p>{bannerDesc}</p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
};

export default Banner;
