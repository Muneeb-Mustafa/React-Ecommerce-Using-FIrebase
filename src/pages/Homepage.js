import React, { useState } from "react"; 
import "../scss/_home.scss"; // Make sure to import the SCSS file for styling  
import Hero from "../components/HeroSection/Hero"; 
import PopularProducts from "../components/PopularProducts/PopularProducts";
import Section3 from "../components/Section3/Section3";
import Section4 from "../components/Section4/Section4"; 
import CardImageSlider from "../components/ImageSlider/ImageSlider";
import Faq from "../components/Faq/Faq";

function Home() {
  return (
    <main className="home-page">
      <Hero />
      <PopularProducts />
      <Section3 />
      <Section4 />
      <CardImageSlider />
    </main>
  );
}

export default Home;
