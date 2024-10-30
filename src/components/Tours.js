import React from "react";
import { tours } from "../data";
import Tour from "./Tour";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title mainTitle={"featured"} subTitle={"tours"} />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
