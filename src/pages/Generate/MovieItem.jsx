import React, { useEffect } from "react";
import MovieImg from "./../../assets/content/avengers.png";
import IMDBIcon from "./../../assets/icons/imdb-icon.png";
const MovieItem = (props) => {
  const { movie, num } = props;
  useEffect(() => {
    console.log(movie);
  });

  if (movie.Title == null) {
    return <></>;
  }
  return (
    <div className="py-[14px] px-[34px] bg-[#3F0071] flex justify-between sm:justify-center sm:items-center">
      <div className="leftSide flex sm:flex-col justify-center sm:items-center gap-5">
        <p className="mr-[11px] text-[28px]">{num}</p>
        <div className="mr-[21px]">
          <img
            src={`${movie.Poster}`}
            alt=""
            className="max-w-[96px] max-h-[133px]"
          />
        </div>
        <div>
          <div className="flex gap-[11px] mb-[6px] items-center">
            <p className="text-[24px] font-semibold 550:text-[18px]">
              {movie.Title}
            </p>
            <p className="text-[18px] font-semibold text-[#ffffff] 550:text-[14px]">
              {movie.Year}
            </p>
          </div>
          <p className="text-[16px] 550:text-[14px] text-[#e6ccf5] mb-[10px]">
            <span>{movie.Country}</span> • <span>{movie.Genre}</span>{" "}
            <span>Director: {movie.Director}</span>
          </p>
          <p className="text-[16px]  550:text-[14px] text-[#e6ccf5]">
            Cast: {movie.Actors}
          </p>
        </div>
        <div className="flex  gap-[10px] hidden sm:flex">
          <div>
            <img src={IMDBIcon} alt="" />
          </div>
          <p className="text-black text-[12px]">{movie?.Ratings[0]?.Value}</p>
        </div>
      </div>
      <div className="rightSide flex gap-[10px] 550:flex-col 550:gap-[5px] sm:hidden">
        <div className="w-[30px]">
          <img src={IMDBIcon} alt="" />
        </div>
        <p className="text-black text-[12px]">{movie?.Ratings[0]?.Value}</p>
      </div>
    </div>
  );
};

export default MovieItem;
