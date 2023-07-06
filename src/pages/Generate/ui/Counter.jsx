import React, { useState } from "react";
import Plus from "./../../../assets/icons/plus.svg";
import Minus from "./../../../assets/icons/minus.svg";

const Counter = () => {
  const [count, setCount] = useState(5);
  const handlePlus = () => {
    if (count === 10) {
      return;
    }
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div className="flex gap-[15px] items-center">
      <div className="w-[118px] h-[30px] flex cursor-pointer">
        <div
          onClick={handlePlus}
          className="bg-[#D5B4B4] px-[12px] rounded-l-[10px]"
        >
          <img
            src={Plus}
            alt=""
            className=" transition-transform duration-300 ease-in-out hover:scale-125"
          />
        </div>
        <div
          onClick={handleMinus}
          className="bg-[#ffffff] px-[12px] rounded-r-[10px] "
        >
          <img
            src={Minus}
            alt=""
            className="transition-transform duration-300 ease-in-out hover:scale-125"
          />
        </div>
      </div>
      <p className="text-[24px] font-semibold">{count}</p>
    </div>
  );
};

export default Counter;
