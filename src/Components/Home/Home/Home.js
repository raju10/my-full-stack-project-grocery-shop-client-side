import React from "react";
import ContactMe from "../../ContactMe/ContactMe/ContactMe";
import Testimonial from "../../Testimonial/Testimonial/Testimonial";

import Header from "../Header/Header/Header";
import Shop from "../Shop/Shop";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Testimonial></Testimonial>
      <ContactMe></ContactMe>
    </div>
  );
};

export default Home;
