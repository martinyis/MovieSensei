import React, { useEffect, useState } from "react";
import Plus from "./../../../assets/icons/plus.svg";
import Minus from "./../../../assets/icons/minus.svg";
import { TabContext } from "../../../Contexts/TabContext";
import { useContext } from "react";
import "./counter.css";
const Counter = (props) => {
  const { setAllCount } = useContext(TabContext);
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    if (count === 0) {
      setCount(1);
    } else if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleMinus = () => {
    if (count === 1) {
      setCount(0);
    } else if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setAllCount(count);
    console.log(count);
  }, [count]);
  const handleInputChange = (e) => {
    e.preventDefault();
    const inputValue = e.target.value;
    const digitsOnly = inputValue.replace(/\D/g, ""); // Remove non-digit characters
    const newValue = digitsOnly === "" ? "" : parseInt(digitsOnly, 10);

    if (
      !isNaN(newValue) &&
      !inputValue.includes("-") &&
      !inputValue.includes("e") &&
      !inputValue.includes(".")
    ) {
      setCount(Math.min(Math.max(newValue, 0), 10)); // Restrict the value between 0 and 10
    } else {
      setCount(0);
    }
  };
  const handleInputKeyDown = (e) => {
    if (e.key === "Backspace" && e.target.value === "") {
      setCount(0);
    }
    if (e.key === "e" || e.key === "-" || e.key === ".") {
      e.preventDefault();
    }
    //prevent default for enter
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <div className="flex gap-[15px] items-center text-[#000000]">
      <div className="w-[118px] h-[30px] flex cursor-pointer">
        <div
          onClick={handlePlus}
          className="bg-[#610094] px-[12px] rounded-l-[10px]"
        >
          <img
            src={Plus}
            alt=""
            className="transition-transform duration-300 ease-in-out hover:scale-125"
          />
        </div>
        <div
          onClick={handleMinus}
          className="bg-[#ffffff] px-[12px] rounded-r-[10px]"
        >
          <img
            src={Minus}
            alt=""
            className="transition-transform duration-300 ease-in-out hover:scale-125 text-[#000000]"
          />
        </div>
      </div>
      <input
        type="number"
        value={count === 0 ? "" : count}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        className="text-[24px] font-semibold w-14 text-center custom-input rounded-[10px]"
        min={0}
        max={10}
      />
    </div>
  );
};

export default Counter;
