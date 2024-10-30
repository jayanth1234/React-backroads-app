import React from "react";
import Title from "./Title";
import { services } from "../data";
import OurService from "./OurService";

const OurServices = () => {
  return (
    <section className="section services" id="services">
      <Title mainTitle={"our"} subTitle={"services"} />
      <div className="section-center services-center">
        {services.map((service) => {
          return <OurService {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};

export default OurServices;
