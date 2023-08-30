import React from "react";
import { Slider } from "../../components/Slider/Slider";
import "./Home.scss";
import { FeaturedProducts } from "../../components/FeaturedProducts/FeaturedProducts";
import { Categories } from "../../components/Categories/Categories";
import { Contact } from "../../components/Contact/Contact";

export const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedProducts type="Featured" />
      <Categories />
      <FeaturedProducts type="Trending" />
      <Contact />
    </div>
  );
};
