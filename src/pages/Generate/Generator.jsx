import React, { useEffect } from "react";
import Centered from "./ui/Centered";
import MoodCollector from "./collectors/MoodCollector";
import { TabContext } from "../../Contexts/TabContext";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchInfo,
  selectInfoPayload,
  selectInfoLoading,
  selectFormData,
} from "../../redux/slices/info";
import { useContext } from "react";
import FilterCollector from "./collectors/FilterCollector";
import MemoryCollector from "./collectors/MemroryCollector";
import MovieItem from "./MovieItem";
import MovieItemSkeleton from "../../components/Loaders/MovieItemSceleton";
const Generator = () => {
  const { option } = useContext(TabContext);
  const defaultTexts = [
    `Let us know your current mood, and we'll help you find the perfect movie.`,
    `Please provide a description, any relevant details, or hints to help identify the movie.`,
  ];

  const dispatch = useDispatch();
  const infoPayload = useSelector(selectInfoPayload);
  const infoLoading = useSelector(selectInfoLoading);
  const formData = useSelector(selectFormData);
  useEffect(() => {
    // Dispatch the fetchInfo action when the component mounts
    dispatch(fetchInfo(formData));
  }, [formData]);

  //selectInfoPayload
  useEffect(() => {
    console.log(infoPayload, "here");
  });
  const handleChange = (event, newValue) => {};

  return (
    <div className="max-w-[732px] mx-auto">
      <Centered />
      <div className="mt-[46px] mb-[96px]">
        {option === 0 ? (
          <MoodCollector defaultText={defaultTexts[0]} />
        ) : option === 1 ? (
          <MemoryCollector defaultText={defaultTexts[1]} />
        ) : (
          <FilterCollector />
        )}
      </div>
      <div className="mb-[200px]">
        <p className="text-[36px] font-semibold mb-[16px]">Results</p>
        <div className="flex flex-col gap-[16px]">
          {infoLoading ? (
            <MovieItemSkeleton />
          ) : (
            infoPayload &&
            infoPayload.movies.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Generator;
