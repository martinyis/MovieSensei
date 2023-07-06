import React, { useEffect } from "react";
import Centered from "./ui/Centered";
import MoodCollector from "./collectors/MoodCollector";
import { TabContext } from "../../Contexts/TabContext";
import { useContext } from "react";
import FilterCollector from "./collectors/FilterCollector";
const Generator = () => {
  const { option } = useContext(TabContext);
  const defaultTexts = [
    `Let us know your current mood, and we'll help you find the perfect movie.`,
    `Please provide a description, any relevant details, or hints to help identify the movie.`,
  ];
  const handleChange = (event, newValue) => {};
  return (
    <div className="max-w-[732px] mx-auto">
      <Centered />
      <div className="mt-[46px] mb-[200px]">
        {option == 0 ? (
          <MoodCollector defaultText={defaultTexts[0]} />
        ) : option == 1 ? (
          <MoodCollector defaultText={defaultTexts[1]} />
        ) : (
          <FilterCollector />
        )}
      </div>
    </div>
  );
};

export default Generator;
