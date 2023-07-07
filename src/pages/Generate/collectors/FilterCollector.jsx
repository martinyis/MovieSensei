import React from "react";
import Dropdown from "./../ui/DropDown";
import { useState, useEffect } from "react";
import Counter from "../ui/Counter";
import {
  yearOptions,
  ratingOptions,
  countryOptions,
  genreOptions,
} from "../data/options";
import { TabContext } from "../../../Contexts/TabContext";
import { useContext } from "react";
import CountryDrop from "../ui/CountryDrop";
const FilterCollector = (props) => {
  const { defaultText } = props;
  const [textInfo, setTextInfo] = useState({ text: "", length: 0 });
  const { allCount } = useContext(TabContext);
  const [filterOptions, setFilterOptions] = useState({
    minYear: 1950,
    maxYear: new Date().getFullYear(),
    minRating: 0,
    maxRating: 10,
    countries: [],
    genres: [],
    description: "",
  });

  const handleChange = (e) => {
    const enteredText = e.target.value;
    const truncatedText = enteredText.slice(0, 400); // Limit the text to 400 characters
    setTextInfo({
      text: truncatedText,
      length: truncatedText.length,
    });
    setFilterOptions({
      ...filterOptions,
      description: enteredText,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      quantity: allCount,
      filterOptions: filterOptions,
    });
  };
  const getInfo = (info, variant) => {
    switch (variant) {
      case "minYear":
        setFilterOptions({
          ...filterOptions,
          minYear: info,
        });
        break;
      case "maxYear":
        setFilterOptions({
          ...filterOptions,
          maxYear: info,
        });
        break;
      case "minRating":
        setFilterOptions({
          ...filterOptions,
          minRating: info,
        });
        break;
      case "maxRating":
        setFilterOptions({
          ...filterOptions,
          maxRating: info,
        });
        break;
      case "countries":
        setFilterOptions({
          ...filterOptions,
          countries: info,
        });
        break;
      case "genres":
        setFilterOptions({
          ...filterOptions,
          genres: info,
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="mb-96px">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        action=""
        className="flex flex-col gap-[38px]"
      >
        <div className="flex gap-[20px] justify-between">
          <div className="w-[50%]">
            <p className="text-[14px]">Min Year</p>
            <Dropdown getInfo={getInfo} val={"minYear"} options={yearOptions} />
          </div>
          <div className="w-[50%]">
            <p className="text-[14px]">Max Year</p>
            <Dropdown getInfo={getInfo} val={"maxYear"} options={yearOptions} />
          </div>
        </div>
        <div className="flex gap-[20px] justify-between">
          <div className="w-[50%]">
            <p className="text-[14px]">Min IMDB rating</p>
            <Dropdown
              getInfo={getInfo}
              val={"minRating"}
              options={ratingOptions}
            />
          </div>
          <div className="w-[50%]">
            <p className="text-[14px]">Max IMDB rating</p>
            <Dropdown
              getInfo={getInfo}
              val={"maxRating"}
              options={ratingOptions}
            />
          </div>
        </div>
        <CountryDrop
          getInfo={getInfo}
          val={"countries"}
          options={countryOptions}
        />
        <CountryDrop getInfo={getInfo} val={"genres"} options={genreOptions} />
        <div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Put here any details you think we should know"
            className="w-[100%] h-[196px] rounded-[4px] border-[3px] border-[#E2DCFF] outline-none bg-white px-[38px] py-[29px] resize-none"
            onChange={handleChange}
            value={textInfo.text} // Bind the value to the state
          ></textarea>
          <div className="text-right text-sm text-gray-500 mt-2">
            {textInfo.length}/400
          </div>
          <div className="flex gap-[43px] items-end">
            <div>
              <p className="text-[24px]">Number of movies</p>
              <Counter />
            </div>
            <div className="flex gap-[18px] items-end">
              <button className="w-[196px] h-[48px]">Find a movie</button>
              <p className="text-[16px]">(1 credit)</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FilterCollector;
