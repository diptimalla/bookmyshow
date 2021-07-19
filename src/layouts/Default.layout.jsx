import React from "react";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import Navbar from "../components/Navbar/navbar.component";


const DefaultLayout = (props) => {
  return (
    <>
    <Navbar/>
    <HeroCarousel/>
      {props.children}
    </>
  );
};

export default DefaultLayout;