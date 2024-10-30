import React from "react";
// About Us image imports
import AboutUs from "./components/AboutUs";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import Tours from "./components/Tours";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Banner />
      <AboutUs />
      <OurServices />
      <Tours />
      <Footer />
    </React.Fragment>
  );
};

export default App;
