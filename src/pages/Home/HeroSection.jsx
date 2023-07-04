import React from "react";

const HeroSection = () => {
  return (
    <div className="mx-auto max-w-[1120px] pt-[160px] px-10 md:pt-[100px]">
      <h2 className="text-[28px] font-medium text-center">MovieSensei</h2>
      <h1 className="text-[60px] md:text-[40px] font-semibold text-center pt-[16px]">
        Discover Your Perfect Film Match
      </h1>
      <p className="max-w-[893px] text-center text-[20px] md:text-[18px] font-normal mx-auto">
        Find your perfect movie match effortlessly! Our website utilizes
        AI-powered recommendations to guide your movie nights with personalized
        suggestions. Discover films tailored to your taste and make every
        movie-watching experience unforgettable. Let AI be your trusted
        companion on your cinematic journey!
      </p>
      <button className="mt-[24px] w-[113px] text-center mx-auto">
        Generate
      </button>
    </div>
  );
};

export default HeroSection;
