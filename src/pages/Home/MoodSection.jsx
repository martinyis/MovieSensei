import React from "react";
import RightImage from "./../../assets/content/DALL·E 2023-06-2712.10 2.png";
const MoodSection = () => {
  return (
    <div className="mx-auto max-w-[1120px] pt-[160px] px-10 xs:px-5 md:pt-[100px] flex gap-[64px] items-center md:flex-col">
      <div>
        <h3 className="text-[60px] font-bold max-w-[473px] lg:text-[50px] xs:text-[36px]">
          Find the Perfect Film for Any Mood
        </h3>
        <p className="text-[20px] max-w-[473px] xs:text-[18px]">
          Undecided? AI selects the perfect film for any mood. Generate and
          discover the ideal movie, effortlessly tailored to your preferences.
        </p>
      </div>
      <div className="">
        <img src={RightImage} alt="" />
      </div>
    </div>
  );
};

export default MoodSection;
