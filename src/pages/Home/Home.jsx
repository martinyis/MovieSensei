import React from "react";
import HeroSection from "./HeroSection";
import AiBoard from "./AiBoard";
import Features from "./Features";
import Board from "./../../assets/content/DALL·E 2023-06-27 12.10-1.jpg";
import Board2 from "./../../assets/content/_09de6521-4429-4cfd-89f4-9f340ac79158 1.png";
import MoodSection from "./MoodSection";
import MovieItemSceleton from "../../components/Loaders/MovieItemSceleton";
const Home = () => {
  return (
    <div className="pb-[200px]">
      <HeroSection />
      <AiBoard board={Board} />
      <Features />
      <AiBoard board={Board2} />
      <MoodSection />
    </div>
  );
};

export default Home;
