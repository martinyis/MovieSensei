import React from "react";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";
const HeroSection = () => {
  return (
    <section className="mx-auto max-w-[1120px] pt-[160px] px-10 md:pt-[100px] xs:px-5">
      <h1 className="text-[28px] font-medium text-center xs:text-[18px]">
        MovieSensei
      </h1>
      <h2 className="text-[60px] xs:text-[30px] md:text-[40px] font-semibold text-center pt-[16px]">
        Discover Your Perfect Movie Match
      </h2>
      <h3 className="max-w-[893px] xs:text-[14px] text-center text-[20px] md:text-[18px] font-normal mx-auto">
        Find your perfect movie match effortlessly! Our AI-powered website
        provides personalized movie recommendations for unforgettable movie
        nights. Let AI be your trusted companion on your cinematic journey!
      </h3>
      <Link to="/generation">
        <button className="mt-[24px] w-[113px] text-center mx-auto px-[90px] sm:px-[60px] sm:py-2 py-4">
          Generate
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
