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
import CountryDrop from "../ui/CountryDrop";
const FilterCollector = (props) => {
  const { defaultText } = props;
  const [textInfo, setTextInfo] = useState({ text: "", length: 0 });

  const handleChange = (e) => {
    const enteredText = e.target.value;
    const truncatedText = enteredText.slice(0, 400); // Limit the text to 400 characters
    setTextInfo({
      text: truncatedText,
      length: truncatedText.length,
    });
  };
  return (
    <div className="mb-96px">
      <form action="" className="flex flex-col gap-[38px]">
        <div className="flex gap-[20px] justify-between">
          <div className="w-[50%]">
            <p className="text-[14px]">Min Year</p>
            <Dropdown options={yearOptions} />
          </div>
          <div className="w-[50%]">
            <p className="text-[14px]">Max Year</p>
            <Dropdown options={yearOptions} />
          </div>
        </div>
        <div className="flex gap-[20px] justify-between">
          <div className="w-[50%]">
            <p className="text-[14px]">Min IMDB rating</p>
            <Dropdown options={ratingOptions} />
          </div>
          <div className="w-[50%]">
            <p className="text-[14px]">Max IMDB rating</p>
            <Dropdown options={ratingOptions} />
          </div>
        </div>
        <CountryDrop options={countryOptions} />
        <CountryDrop options={genreOptions} />
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
