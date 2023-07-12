import React, { useEffect, useState } from "react";
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
import {
  setCredits,
  selectCredits,
  decreaseCredits,
} from "../../redux/slices/credits";
import CreditError from "./ui/CreditError";
const Generator = () => {
  const { option } = useContext(TabContext);
  const defaultTexts = [
    `Let us know your current mood, and we'll help you find the perfect movie.`,
    `Please provide a description, any relevant details, or hints to help identify the movie.`,
  ];

  const dispatch = useDispatch();
  const infoPayload = useSelector(selectInfoPayload);
  const infoLoading = useSelector(selectInfoLoading);
  const credits = useSelector(selectCredits);
  const formData = useSelector(selectFormData);
  const [componentMounted, setComponentMounted] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const generateMovie = async () => {
    if (componentMounted) {
      console.log(credits);
      if (credits > 0) {
        await dispatch(decreaseCredits());
        await dispatch(fetchInfo(formData));
      } else {
        setShowPopup(true);
      }
    }
    setComponentMounted(true);
  };
  useEffect(() => {
    generateMovie();
  }, [formData]);

  useEffect(() => {
    if (infoPayload && infoPayload.movies.length > 0) {
      const filteredMovies = infoPayload.movies.filter((movie) => movie.Title);
      setFilteredMovies(filteredMovies);
    }
  }, [infoPayload]);
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
        {showPopup ? (
          <CreditError />
        ) : (
          <div className="flex flex-col gap-[16px]">
            {infoLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <MovieItemSkeleton key={index} />
              ))
            ) : filteredMovies.length > 0 ? (
              filteredMovies.map((movie, id) => (
                <MovieItem key={movie.id} movie={movie} num={id + 1} />
              ))
            ) : (
              <p></p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Generator;
